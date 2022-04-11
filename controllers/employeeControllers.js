const Employee = require("../models/Employee");

const getEmployees = async (req, res) => {
  console.log("getting employees");
  try {
    const employees = await Employee.find({});
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  return;
};
const getEmployee = async (req, res) => {
  const id = req.params?.id;
  try {
    const employee = await Employee.findOne({ id: id });
    if (!employee) {
      throw new Error("No Employee with that id");
    }
    res.status(200).json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  return;
};
const createEmployee = async (req, res) => {
  const { id, name, age, salary, profile } = req.body;
  try {
    const exist = await Employee.findOne({ id: id });
    if (exist) throw new Error("Employee with that id already exists");
    const newEmployee = await Employee.create({
      id: id,
      employee_name: name,
      employee_salary: salary,
      employee_age: age,
      profile_image: profile,
    });
    res.status(201).json(newEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  return;
};
const updateEmployee = async (req, res) => {
  const id = req.params?.id;
  const { name, age, salary, profile } = req.body;

  try {
    const employee = await Employee.findOne({ id: id });
    if (!employee) throw Error("Employee with that id do not exists");
    employee.employee_name = name !== "" ? name : employee.employee_name;
    employee.employee_age = Number(age) !== 0 ? age : employee.employee_age;
    employee.employee_salary =
      Number(salary) !== 0 ? salary : employee.employee_salary;
    employee.profile_image = profile !== "" ? profile : employee.profile_image;

    await employee.save();
    res.json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  return;
};

module.exports = { getEmployee, getEmployees, createEmployee, updateEmployee };
