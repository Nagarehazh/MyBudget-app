import { Router } from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser, getUserBudgets, login } from "../controllers/users.controllers";
import { USERS_ID, USERS, USERS_BUDGETS, LOGIN } from "../paths";

const router = Router();

router.get(USERS, getUsers);
router.get(USERS_ID, getUser);
router.get(USERS_BUDGETS, getUserBudgets);
router.post(USERS, createUser);
router.put(USERS_ID, updateUser);
router.delete(USERS_ID, deleteUser);
router.get(LOGIN, login);


export default router;

