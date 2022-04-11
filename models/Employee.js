const mongoosse = require("mongoose");

const employeeSchema = mongoosse.Schema({
  id: {
    type: Number,
    required: true,
  },
  employee_name: {
    type: String,
    required: true,
  },
  employee_salary: {
    type: Number,
    required: true,
  },
  employee_age: {
    type: Number,
    required: true,
  },
  profile_image: {
    type: String,
    default: "",
  },
});

const Employee = mongoosse.model("employee", employeeSchema);
module.exports = Employee;
