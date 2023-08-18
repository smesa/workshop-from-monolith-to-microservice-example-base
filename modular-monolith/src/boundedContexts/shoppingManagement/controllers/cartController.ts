import { Request, Response } from "express";
import { Cart } from "../models";

export const createCart = async (req: Request, res: Response) => {
  try {
    const cart = new Cart(req.body);
    await cart.save();
    res.status(201).send(cart);
  } catch (error) {
    res.status(500).send({ message: "Error trying to create cart." });
  }
};

export const getCart = async (req: Request, res: Response) => {
  try {
    const cart = await Cart.findById(req.params.id).populate("items.product");
    if (!cart) {
      return res.status(404).send({ message: "Cart not found." });
    }
    res.send(cart);
  } catch (error) {
    res.status(500).send({ message: "Error trying to get cart." });
  }
};

export const updateCart = async (req: Request, res: Response) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cart) {
      return res.status(404).send({ message: "Cart not found." });
    }
    res.send(cart);
  } catch (error) {
    res.status(500).send({ message: "Error trying to update cart." });
  }
};

export const deleteCart = async (req: Request, res: Response) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    if (!cart) {
      return res.status(404).send({ message: "Cart not found." });
    }
    res.send({ message: "Cart deleted successfully." });
  } catch (error) {
    res.status(500).send({ message: "Error trying to delete cart." });
  }
};
