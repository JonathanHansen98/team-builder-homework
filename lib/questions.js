const checkNumber = value => {
    if (Number.isInteger(parseInt(value))) {
        return true
    }
    return 'Please enter a number.'
};
const employeeQuestions = [
    {
        type: "input",
        message: "What is their email address?",
        name: "email",
        validate: function validateEmail(subject) {
            let test = subject.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}/i)
            if (test) {
                return true
            }
             return 'Please enter a valid email address.'
        }
    },
    {
        type: "input",
        message: "What is their ID number?",
        name: "id",
        validate: checkNumber
        }
];
const managerQuestions = [
    {
        type: "input",
        message: "Who is your team's manager?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is their office number?",
        name: "officeNumber",
        validate: checkNumber
    },
    ...employeeQuestions
];
const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "Who is their github username?",
        name: "github"
    },
    ...employeeQuestions
];
const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What school are you attending?",
        name: "school"
    },
    ...employeeQuestions
];
const addMemberQuestions = [
    {
        type: "confirm",
        message: "Would you like to add another team member?",
        name: "addMember",
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