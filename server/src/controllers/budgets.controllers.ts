import { Request, Response } from "express";
import { Budget } from "../models/budget";


export async function getBudgets(_req: Request, res: Response): Promise<Response> {
    try {
        const budgets = await Budget.findAll();
        //Inver the order of the budgets
        budgets.reverse();
        return res.status(200).json(budgets);
    }   catch (error) {
        return res.status(500).json(error);
    }
}

export async function getBudget(req: Request, res: Response): Promise<Response> {
   try {
       const { id } = req.params;
       const budget = await Budget.findByPk(id);
       return res.status(200).json(budget);
   }   catch (error) {
         return res.status(500).json(error);
    }
}

export async function createBudget(req: Request, res: Response): Promise<Response> {
   try{
         const { concept, amount, date, type, category, userId } = req.body;
         const budget = await Budget.create({
              concept,
              amount,
              date,
              type,
              category,
              userId
         });
         return res.status(200).json(budget);
   }  catch (error) {
            return res.status(500).json(error);
    }
}

export async function updateBudget(req: Request, res: Response): Promise<Response> {
    try{
        const { id } = req.params;
        const { concept, amount, date, category } = req.body;
        const budget = await Budget.findByPk(id);
        if (budget) {
            await budget.update({
                concept,
                amount,
                date,
                category
            });
            return res.status(200).json(budget);
        }
        return res.status(404).json({ message: 'Budget not found' });
    }   catch (error) {
            return res.status(500).json(error);
    }
}

export async function deleteBudget(req: Request, res: Response): Promise<Response> {
    try{
        const { id } = req.params;
        const budget = await Budget.findByPk(id);
        if (budget) {
            await budget.destroy();
            return res.status(200).json(budget);
        }
        return res.status(404).json({ message: 'Budget not found' });
    }   catch (error) {
            return res.status(500).json(error);
    }
}

export async function getCategory(req: Request, res: Response): Promise<Response> {
    try {
        const { category } = req.params;
        
        const budgets = await Budget.findAll({
            where: {
                category,
                type: 'expense'
            }
        });

        if(budgets.length > 0) {
            return res.status(200).json(budgets);
        }   else {
            return res.status(404).json({ message: 'There are no expenses with this category'});
        }
    }   catch (error) {
            return res.status(500).json(error);
    }
}