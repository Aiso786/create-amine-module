const fs = require("fs-extra");
const path = require("path");
const _ = require("lodash");
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

const inquirer = require("./lib/inquirer");
const files = require("./lib/files");

clear();

console.log(chalk.yellow(figlet.textSync("Create Amine Module")));

const run = async () => {
  const moduleNameInput = await inquirer.askModuleName();
  const moduleName = _.capitalize(_.replace(moduleNameInput.module, " ", ""));
  const moduleNameUpper = _.upperCase(moduleName);
  const moduleNameLower = _.lowerCase(moduleName);

  console.log("Copy templates to new Module");
  const templateFilesDir = path.join(process.cwd(), "templates", "Module");
  try {
    fs.copySync(templateFilesDir, path.join("temp", moduleName));
    console.log("Templates copy completed !");
  } catch (err) {
    console.error(err);
  }

  console.log("Rename directories");
  files.renameDirs(path.join(process.cwd(), "temp", moduleName), moduleName);

  console.log("Get all files from new Module and rename them");
  const newFiles = files.getAllFiles(
    path.join(process.cwd(), "temp", moduleName)
  );
  _.forEach(newFiles, (filePath) => {
    console.log(filePath);
    fs.renameSync(
      filePath,
      _.replace(filePath, "@Module@", moduleName),
      function (err) {
        if (err) throw err;
        console.log("File Renamed.");
      }
    );
  });

  console.log("Replace Upper First case content in files");
  files.replaceContent(
    path.join(process.cwd(), "temp", moduleName),
    /@Module@/g,
    moduleName
  );

  console.log("Replace Upper case content in files");
  files.replaceContent(
    path.join(process.cwd(), "temp", moduleNameUpper),
    /@MODULE@/g,
    moduleNameUpper
  );

  console.log("Replace Lower case content in files");
  files.replaceContent(
    path.join(process.cwd(), "temp", moduleNameLower),
    /@module@/g,
    moduleNameLower
  );
};

run();