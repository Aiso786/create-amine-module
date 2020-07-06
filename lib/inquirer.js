const inquirer = require("inquirer");
const chalk = require("chalk");

const files = require("./files");

module.exports = {
  askModuleName: () => {
    const questions = [
      {
        name: "module",
        type: "input",
        message: "Enter the name of the Module:",
        validate: function (value) {
          if (value.length) {
            if (files.directoryExists(value)) {
              console.log(chalk.red("This module already exists !"));
              process.exit();
            } else {
              return true;
            }
          } else {
            return "Please enter the name of the Module.";
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};
