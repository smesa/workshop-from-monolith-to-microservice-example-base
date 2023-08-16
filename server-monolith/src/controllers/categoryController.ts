import { Request, Response } from "express";
import { Category } from "../models";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).send(category);
  } catch (error) {
    res.status(500).send({ message: "Error try to create category." });
  }
};

export const getCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).send({ message: "Category not found." });
    }
    res.send(category);
  } catch (error) {
    res.status(500).send({ message: "Error trying to get category." });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) {
      return res.status(404).send({ message: "Category not found." });
    }
    res.send(category);
  } catch (error) {
    res.status(500).send({ message: "Error trying to update category." });
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).send({ message: "Category not found." });
    }
    res.send({ message: "Category deleted." });
  } catch (error) {
    res.status(500).send({ message: "Error trying to delete category." });
  }
};

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (error) {
    res.status(500).send({ message: "Error trying to get categories." });
  }
};
