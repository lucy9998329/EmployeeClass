//Declaring Variables
let table = document.getElementById('table');
let fname = document.querySelector('#fname')
let lname = document.querySelector('#lname')
let salary = document.querySelector('#salary')

let FirstName = document.querySelector('#FirstName')
let submit = document.querySelector('#submit')


class Employee {

    get fname() {
        return `${this._fname}`
    }
    set fname(value) {
        this._fname = `${value}`
    }
    get lname() {
        return `${this._lname}`
    }
    set lname(value) {
        this._lname = `${value}`
    }
    get salary() {
        return `${this._salary}`
    }
    set salary(value) {
        this._salary = `${value}`
    }

    constructor(fname, lname, salary) {
        this._fname = fname;
        this._lname = lname;
        this._salary = salary;
    }


    displayEmployee() {
        Employee.call(this, fname, lname, salary); //call class, base construction function
        
    }

        for (var i = 1; i < table.rows.length; i++) {
            table.rows[i].onclick = function () {
                document.getElementById("fname").value = this.cells[0].innerHTML;
                document.getElementById("lname").value = this.cells[1].innerHTML;
                document.getElementById("salary").value = this.cells[2].innerHTML;
            }
        }

        //displayEmployee.prototype = new Employee(); // create a prototype chain
        //displayEmployee.prototype.constructor = displayEmployee
    }
    //var lucy = new.Employee();
    //lucy.fname = "Lucy"
    //lucy.lname = "Laurentino"
    //lucy.salary = 1600.00

}
}
}




//submit.addEventListener('click', (e) => {table.innerHTML = displayEmployee(fname.value, lname.value, salary.value,); e.preventDefault()})
