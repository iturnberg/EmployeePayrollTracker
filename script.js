
let firstName=[];
let lastName=[];
let salary=[];
let i=0;
let totalSalary=0;
let averageSalary=0;
let x= true;

// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  const employees = [];
  let x = true;
  while (x) {
    const employee = {};
    
    // Prompt for employee's first name with validation
    let firstNameInput = prompt("Please enter employee First Name: ");
    while (!firstNameInput || firstNameInput.trim() === "") {
      firstNameInput = prompt("Please enter a valid employee First Name: ");
    }
    employee.firstName = firstNameInput.trim();

    // Prompt for employee's last name with validation
    let lastNameInput = prompt("Please enter employee Last Name: ");
    while (!lastNameInput || lastNameInput.trim() === "") {
      lastNameInput = prompt("Please enter a valid employee Last Name: ");
    }
    employee.lastName = lastNameInput.trim();

    // Prompt for employee's salary with validation
    let salaryInput = prompt("Please enter employee salary: ");
    while (!salaryInput || isNaN(parseFloat(salaryInput))) {
      salaryInput = prompt("Please enter a valid employee salary: ");
    }
    employee.salary = parseFloat(salaryInput);

    employees.push(employee);
    
    x = confirm("Do you want to enter another employee?");
  }
  return employees;
}


// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }
  let averageSalary = 0;
  if (employeesArray.length > 0) {
    averageSalary = totalSalary / employeesArray.length;
  }
  averageSalary=averageSalary.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  console.log('Average Salary: ',averageSalary)
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
    // Check if the array is empty
    if (employeesArray.length === 0) {
      console.log("No employees to select from.");
      return null;
    }
  
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * employeesArray.length);
  
    // Retrieve the random employee
    const randomEmployee = employeesArray[randomIndex];
  
    console.log(randomEmployee.firstName, ' is our lucky draw winner!');
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
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
