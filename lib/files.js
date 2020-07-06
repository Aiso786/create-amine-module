const fs = require("fs");
const path = require("path");
const _ = require("lodash");
const replace = require("replace-in-file");

module.exports = {
  getCurrentDirectoryBase: () => {
    return path.basename(process.cwd());
  },

  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  },

  getAllFiles: function getAllFilesfunc(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        arrayOfFiles = getAllFilesfunc(dirPath + "/" + file, arrayOfFiles);
      } else {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    });

    return arrayOfFiles;
  },

  renameDirs: function renameDirsFunc(dirPath, moduleName) {
    const files = fs.readdirSync(dirPath);

    files.forEach(function (file) {
      const oldDirPath = path.join(dirPath, file);
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        const newDirPath = _.replace(oldDirPath, "@Module@", moduleName);
        fs.renameSync(oldDirPath, newDirPath, function (err) {
          if (err) throw err;
          console.log("Directory Renamed.");
          renameDirsFunc(newDirPath);
        });
      }
    });
  },

  replaceContent: (rootDir, toReplace, value) => {
    const options = {
      files: [`${rootDir}/**/*.*`],
      from: toReplace,
      to: value,
    };

    try {
      let changedFiles = replace.sync(options);
      console.log(
        "Content replace in these files:",
        changedFiles
          .filter((x) => x.hasChanged)
          .map((x) => x.file)
          .join("\n")
      );
    } catch (error) {
      throw error;
    }
  },
};
