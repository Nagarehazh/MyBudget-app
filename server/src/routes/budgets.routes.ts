import { Router } from "express";
import { BUDGETS, BUDGETS_ID, BUDGET_CATEGORY } from "../paths";
import { createBudget, deleteBudget, getBudget, getBudgets, updateBudget, getCategory } from "../controllers/budgets.controllers";

const router = Router();

router.get(BUDGETS, getBudgets);
router.get(BUDGET_CATEGORY, getCategory);
router.get(BUDGETS_ID, getBudget);
router.post(BUDGETS, createBudget);
router.put(BUDGETS_ID, updateBudget);
router.delete(BUDGETS_ID, deleteBudget);

export default router;