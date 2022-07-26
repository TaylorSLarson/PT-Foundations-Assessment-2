////////////////////////////////////////////////////
///////////////////EMPLOYEES.JS/////////////////////
////////////////////////////////////////////////////
/*
    In this file, you'll be writing classes to 
    store information about restaurant employees.
*/

//////////////////PROBLEM 1////////////////////
/*  
    Create a new class called `Employee`.
    Make sure to call your constructor, and
    require these 2 parameters: name, shifts.

    Create a method on the class called
    `getSchedule` that prints a string:
    [NAME] works on [SHIFTS]
    Where NAME and SHIFTS reference the values
    stored on the object.
*/

//CODE HERE

class Employee {
    constructor (name, shift){
    this.name = name;
    this.shift = shift;
  }
     getSchedule = function(){
        return this.name, this.shift
  }
}


function Employee0 (name, shift){
      this.name = name;
      this.shift = shift;
    this.getSchedule = function(){
       return this.name, this.shift
        }
}


//  getSchedule(){
//     return this.name, this.shift
// }

getSchedule1 = () => (Employee.name, Employee.shift)


/*
    Create a new instance of your class.
    Save it to a variable called `empOne`.

    You can use this sample data or make
    up your own:
    name: Jess
    shifts: weekday mornings, weekday afternoons
*/

//CODE HERE

/*
    Call the `getSchedule` method on the
    `empOne` object.
*/

//CODE HERE

const employeeOne = new Employee();
employeeOne.name = 'Jessica'
employeeOne.shift = 'Monday - Friday, 9 am - 5 pm'

 const empOne = new Employee('Jessica', 'Monday - Friday, 9 am - 5 pm',)

 empOne.getSchedule1()

// employeeOne.getSchedule1()

// console.log(employeeOne.getSchedule1())


/*
    Make a copy of the empOne object
    using the spread operator.
    Save it to a variable called `empTwo`.

    Change the name of `empTwo` to 'Nick'.

    Hint: you can do this inline with the 
    spread operator or reassign it using 
    dot or bracket notation.
*/

//CODE HERE

const empTwo = empOne.slice('Nick', 'Tuesday, Thursday, Sunday, 5pm - 10 pm')

//////////////////PROBLEM 2////////////////////
/*  
    Write a class called Manager that *extends* 
    the Employee class. In the constructor, 
    make sure you require all of the parameters 
    from the Employee class as well as 1 
    new one: employees, which will be an array of 
    employees that report to this manager. 
    (Hint: don't forget to call the super function)

    Create a method called `getEmployees` that
    console.logs a string:
    [NAME] manages [EMPLOYEES]
    Where NAME and EMPLOYEES reference the values
    stored on the object.

    Create a second method called `addEmployee`
    that takes in one argument, `emp`, which
    should be a string of an employee name.
    The function should push the name into 
    the employees array. 
*/

//CODE HERE

class Manager{
    constructor(Employee, manages){
        this.Employee = Employee
        this.manages = manages.Array
    }
 }

 function getEmployees(Manager){
 return this.manages
}

function addEmployee(emp){
    return emp.name
}


/*
    Create a new instance of your class.
    Save it to a variable called `manager`.

    You can use this sample data or make
    up your own:
    name: Winston
    shifts: weekday mornings, weekday afternoons
    employees: Cece and Schmidt
*/

//CODE HERE

const manager = {
// constructor(Manager)
'name': 'Winston',
'manges': ['Cece','Schmidt']
}

/*
    Call the `getEmployees` method on the
    `manager` object.  
*/

//CODE HERE
const printEmp = getEmployees(manager)
/*
    Call the `addEmployee` method on the 
    `manager` object passing in the string 
    'Coach' or whatever name you'd like.
*/

//CODE HERE 

const printNewEmp = addEmployee(John)

/*
    Call the `getEmployees` method on the
    `manager` object again to confirm 
    that an employee was added.
*/

//CODE HERE