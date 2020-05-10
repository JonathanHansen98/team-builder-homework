// TODO: Write code to define and export the Employee class

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getName() {
        return this.name
    }
    getRole() {
        let contructorName = this.constructor.name
        return contructorName
    }
}

module.exports = Employee
