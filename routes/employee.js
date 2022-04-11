const express = require("express");
const router = express.Router();

const {
  getEmployee,
  createEmployee,
  getEmployees,
  updateEmployee,
} = require("../controllers/employeeControllers");

router.get("/", getEmployees);
router.post("/", createEmployee);
router.get("/:id", getEmployee);
router.put("/:id", updateEmployee);

module.exports = router;
