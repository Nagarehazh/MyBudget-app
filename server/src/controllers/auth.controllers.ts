import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/user';
import * as dotenv from 'dotenv'
dotenv.config()

//register
export const register = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { userName, email, password } = req.body;
        // console.log(userName, email, password );
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const user = await User.create({
            userName,
            email,
            password: hashedPassword
        });
        
        const token = jwt.sign({ id: user }, "sda1234" || 'secretkey', {
            expiresIn: 60 * 60 * 24
        });
        return res.status(200).json({ user, token });
    } catch (error) {
        return res.status(500).json(error);
    }
}

//login
export const login = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const validPassword = await bcrypt.compare(password, (user as unknown as any).password);
        if (!validPassword) {
            return res.status(401).json({ token: null, message: 'Invalid password' });
        }
        const token = jwt.sign({ id: user }, process.env.SECRET_KEY || 'secretkey', {
            expiresIn: 60 * 60 * 24
        });

        const { password: _, ...userWithoutPassword } = (user as unknown as any);
        return res.status(200).json({ user: userWithoutPassword, token });
        
    } catch (error) {
        return res.status(500).json(error);
    }
}
