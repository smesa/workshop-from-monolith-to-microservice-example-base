import { Request, Response } from "express";
import bcryptjs from "bcryptjs";

import { User } from "../models";

export const createUser = async (req: Request, res: Response) => {
  try {
    
    const { password, ...restOfBody } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync());
    const user = new User({ ...restOfBody, password: hashedPassword });

    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ message: "Error trying to create user." });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }
    res.send(user);
  } catch (error) {
    res.status(500).send({ message: "Error trying to get user." });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }
    res.send(user);
  } catch (error) {
    res.status(500).send({ message: "Error trying to update user." });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send({ message: "User not found." });
    }
    res.send({ message: "User deleted." });
  } catch (error) {
    res.status(500).send({ message: "Error trying to delete user." });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send({ message: "Error trying to get users." });
  }
};
