const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "../output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./htmlRenderer");

const questions = require('./questions')
const { managerQuestions, engineerQuestions, internQuestions, addMemberQuestions, memberList } = questions

let team = [];

const promptManager = () => {
    inquirer.prompt(managerQuestions).then(ans => {
        const { managerName, id, email, officeNumber } = ans
        const manager = new Manager(managerName, id, email, officeNumber)
        team.push(manager)
        addMemberFunction()
    })
};
const promptEngineer = () => {
    inquirer.prompt(engineerQuestions).then(ans => {
        const { engineerName, id, email, github } = ans
        const engineer = new Engineer(engineerName, id, email, github)
        team.push(engineer)
        addMemberFunction();
    })
};
const promptIntern = () => {
    inquirer.prompt(internQuestions).then(ans => {
        const { internName, id, email, school } = ans
        const intern = new Intern(internName, id, email, school)
        team.push(intern)
        addMemberFunction()
    })
};
const addMemberFunction = () => {
    inquirer.prompt(addMemberQuestions).then(ans => {
        const cont = ans.addMember
        if (cont === true) {
            inquirer.prompt(memberList).then(ans => {
                const nextMember = ans.member;
                switch (nextMember) {
                    case "Manager":
                        promptManager();
                        break;
                    case "Engineer":
                        promptEngineer();
                        break;
                    case "Intern":
                        promptIntern()
                        break;
                }
            })
        }
        else {
            inquirer.prompt({
                type: "confirm",
                name: "finished",
                message: "Are you sure you are finished?",
                default: true
            }).then(ans => {
                const finished = ans.finished
                if (finished === true) {
                    const template = render(team)
                    fs.writeFile(outputPath, template, (err, data) => {
                        if (err) {
                            throw err
                        }
                        else {
                            console.log(`File successfully written to: ${outputPath}`)
                        }
                    })
                }
                else {
                    addMemberFunction()
                }
            })
        }
    })
};

module.exports = { promptManager, promptEngineer, promptIntern, addMemberFunction }