import express, { Express } from "express";
import cors from "cors";

import { connectToMongoDb } from "../../database";
import { cartRoutes } from "../../../../boundedContexts/shoppingManagement/routes";
import { userRoutes } from "../../../../boundedContexts/userManagement/routes";
import { categoryRoutes, productRoutes } from "../../../../boundedContexts/inventoryManagement/routes";

const createExpressAPIServer = () => {
  const app: Express = express();
  const port: string = process.env.PORT || "3000";

  const paths = {
    users: "/api/users",
    categories: "/api/categories",
    products: "/api/products",
    cart: "/api/cart",
  };

  const connectDB = async () => {
    await connectToMongoDb();
  };

  const middlewares = () => {
    app.use(cors());
    app.use(express.json());
    app.use(express.static("public"));
  };

  const routes = () => {
    app.use(paths.users, userRoutes);
    app.use(paths.categories, categoryRoutes);
    app.use(paths.products, productRoutes);
    app.use(paths.cart, cartRoutes);
  };

  const listen = () => {
    app.listen(port, () => {
      console.log("Server running on port", port);
    });
  };

  const init = async () => {
    await connectDB();
    middlewares();
    routes();
    listen();
  };

  return {
    init,
  };
};

export default createExpressAPIServer;
