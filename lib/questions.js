const employeeQuestions = [
    {
        type: "input",
        name: "email",
        message: "What is their email address?"
    },
    {
        type: "input",
        name: "id",
        message: "What is their ID number?"
    }
];
const managerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "Who is your team's manager?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is their office number?"
    },
    ...employeeQuestions
];
const engineerQuestions = [
    {
        type: "input",
        name: "engineerName",
        message: "What is the engineer's name?"
    },
    {
        type: "input",
        name: "github",
        message: "Who is their github username?"
    },
    ...employeeQuestions
];
const internQuestions = [
    {
        type: "input",
        name: "internName",
        message: "What is the intern's name?"
    },
    {
        type: "input",
        name: "school",
        message: "What school are you attending?"
    },
    ...employeeQuestions
];
const addMemberQuestions = [
    {
        type: "confirm",
        name: "addMember",
        message: "Would you like to add another team member?",
        default: false
    }
];
const memberList = {
    type: "list",
    name: "member",
    choices: ["Manager", "Engineer", "Intern"]
};

module.exports = {
    employeeQuestions,
    managerQuestions,
    engineerQuestions,
    internQuestions,
    addMemberQuestions,
    memberList
}