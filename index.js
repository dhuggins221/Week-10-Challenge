const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'What is the managers name',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('You need to enter the managers name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'Enter the managers id',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('You need to enter the managers id');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: 'What is your managers email',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('You need to enter the managers email');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: 'what is the mangers office number',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('You need to enter the mangers office number');
          return false;
        }
      }
    },
  ]);
};

const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: 'What is the engineers name',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('You need to enter the engineers name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerId',
      message: 'Enter the managers id',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('You need to enter the engineers id');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: 'What is the engineers email',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('You need to enter the engineers email');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'engineerOfficeNumber',
      message: 'what is the engineers office number',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('You need to enter the engineers office number');
          return false;
        }
      }
    },
  ]);
};

const promptIntern = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'internName',
      message: 'What is the managers name',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('You need to enter the interns name');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internId',
      message: 'Enter the interns id',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('You need to enter the interns id');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internEmail',
      message: 'What is your interns email',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('You need to enter the interns email');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'internOfficeNumber',
      message: 'what is the interns office number',
      validate: answer => {
        if (answer) {
          return true;
        } else {
          console.log('You need to enter the internss office number');
          return false;
        }
      }
    },
  ]);
};
