import { Router } from "express";
import {register, login} from "../controllers/auth.controllers";
import {LOGIN, REGISTER} from "../paths";

const router = Router();

//REGISTER
router.post(REGISTER, register)

//LOGIN
router.post(LOGIN, login)




export default router;
