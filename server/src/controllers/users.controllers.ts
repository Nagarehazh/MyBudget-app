import { Request, Response } from "express";
import { User } from "../models/user";
import { Budget } from "../models/budget";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv'
dotenv.config()


export async function getUsers(_req: Request, res: Response): Promise<Response> {
    try {
        const users = await User.findAll();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export async function getUser(req: Request, res: Response): Promise<Response> {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
}

export async function createUser(req: Request, res: Response): Promise<Response> {
    try {
        const { id, userName, email, password } = req.body;
        const user = await User.create({
            id,
            userName,
            email,
            password: await bcrypt.hash(password, 10)
        });

    
        const token = jwt.sign({ id: user }, process.env.SECRET_KEY || 'secretkey', {
            expiresIn: 60 * 60 * 24
        });

        return res.status(200).json({ user, token });
        

    } catch (error) {
        return res.status(500).json(error);
    }
}

   
export async function updateUser(req: Request, res: Response): Promise<Response> {
    try {
        const { id } = req.params;
        const { userName, email, password } = req.body;
        const user = await User.findByPk(id);
        if (user) {
            await user.update({
                userName,
                email,
                password
            });
            return res.status(200).json(user);
        }
        return res.status(404).json({ message: 'User not found' });
    } catch (error) {
        return res.status(500).json(error);
    }
}

export async function deleteUser(req: Request, res: Response): Promise<Response> {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            return res.status(200).json(user);
        }
        return res.status(404).json({ message: 'User not found' });
    } catch (error) {
        return res.status(500).json(error);
    }
}

//Budgets for user
export async function getUserBudgets(req: Request, res: Response): Promise<Response> {
    try {
        const { id } = req.params;
        //pagination

        const budgets = await Budget.findAll({
            attributes: ['id', 'concept', 'amount', 'date', 'type', 'category'],
            where: {
                userId: id
            }
        });

        if (budgets.length > 0) {
            return res.status(200).json(budgets.reverse());
        } else {
            return res.status(404).json({ message: 'Budget not found' });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}


