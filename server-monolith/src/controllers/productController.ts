import { Request, Response } from "express";

import { Product } from "../models";

export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(500).send({ message: "Error trying to create product." });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) {
      return res.status(404).send({ message: "Product not found." });
    }
    res.send(product);
  } catch (error) {
    res.status(500).send({ message: "Error al obtener el producto." });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate("category");
    if (!product) {
      return res.status(404).send({ message: "Product not found." });
    }
    res.send(product);
  } catch (error) {
    res.status(500).send({ message: "Error trying to update product." });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).send({ message: "Product not found." });
    }
    res.send({ message: "Product deleted." });
  } catch (error) {
    res.status(500).send({ message: "Error trying to delete product." });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.find().populate("category");
    res.send(products);
  } catch (error) {
    res.status(500).send({ message: "Error trying to get products." });
  }
};
