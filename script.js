//Declaring Variables
let table = document.getElementById('table');

//let fname = document.querySelector('#fname')
//let lname = document.querySelector('#lname')
//let salary = document.querySelector('#slr')

//let FirstName = document.querySelector('#FirstName')
//let submit = document.querySelector('#submit') 



//Create a function to calculate conversion 
{class Employee {

    get fname() {
        return '${this._fname}'
    }
    set fname() {
        this._fname = '${value}'
    }
    get lname() {
        return '${this._lname}'
    }
    set lname() {
        this._lname = '${value}'
    }
    get salary() {
        return this._salary
    }
    set salary() {
        this._salary = '${value}'
    

function constructor(fname, lname, salary){
    this._fname = fname;
    this._lname = lname;
    this._salary = salary; 

function displayEmployee(fname, lname, salary){
    Employee.call(this, fname, lname, salary); //call class, base construction function
    console.log('Last Name', $(this,_lname));
}
for(var i = 1; i < table.row.length; i++)
{
    table.row[i].onclick = function(){
        document.getElementById("fname"). value = this.cells[0]. innerHTML;
        document.getElementById("lname"). value = this.cells[1]. innerHTML;
        document.getElementById("slr"). value = this.cells[2]. innerHTML;
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




//submit.addEventListener('click', (e) => {table.innerHTML = displayEmployee(fname.value, lname.value, slr.value,); e.preventDefault()})
