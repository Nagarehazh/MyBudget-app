import { Router } from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser, getUserBudgets } from "../controllers/users.controllers";
import { USERS_ID, USERS, USERS_BUDGETS  } from "../paths";

const router = Router();

router.get(USERS, getUsers);
router.get(USERS_ID, getUser);
router.get(USERS_BUDGETS, getUserBudgets);
router.post(USERS, createUser);
router.put(USERS_ID, updateUser);
router.delete(USERS_ID, deleteUser);


export default router;

