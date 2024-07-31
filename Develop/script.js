// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
document.getElementById('#add-employment-btn')

const arrayOfEmployees = []

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  const employees = []
}

  while (true) {
    const firstName = prompt("First Name");
    const lastName = prompt("Last Name");
    const salary = prompt("Salary")
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    if(isNaN(salary)) {
      salary = 0,

    employees.push(employee);

    addEmployee = confirm("Add another?")

    if (continueAdding) {
      addEmployee();
    }
    addEmployee();
    return employees;

  }

}

const displayAverageSalary = function(employeesArray) {
  let sum = 0;
for(let i = 0; i < employees.length; i++) {
  sum += numbers[i];
}
const averageSalary = sum / employees.length;
}

// Select a random employee
function getRandomEmployee(employeesArray) {

function rand(items) {
    // "|" for a kinda "int div"




  // TODO: Select and display a random employee
}
 return employees[employees.length * Math.random() | 0];
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
  function displayEmployees(employeesArray) {
    // Get the employee table
    const employeeTable = document.querySelector('#employee-table');

    // Clear the employee table
    employeeTable.innerHTML = '';

    // Loop through the employee data and create a row for each employee
    for (let i = 0; i < employeesArray.length; i++) {
      const currentEmployee = employeesArray[i];

      const newTableRow = document.createElement("tr");

      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = currentEmployee.firstName;
      newTableRow.append(firstNameCell);

      const lastNameCell = document.createElement("td");
      lastNameCell.textContent = currentEmployee.lastName;
      newTableRow.append(lastNameCell);

      const salaryCell = document.createElement("td");
      // Format the salary as currency
      salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });

      newTableRow.append(salaryCell);

      employeeTable.append(newTableRow);
    }
  }

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
