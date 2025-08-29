import express from "express";
import registerEmployeesController from "../controllers/registerEmployeesController.js";
const router = express.Router();

router.route("/").post(registerEmployeesController.register);

export default router;
