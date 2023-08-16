import dotenv from 'dotenv';
dotenv.config();

import { createExpressAPIServer } from "./config/server";

const server = createExpressAPIServer();
server.init();
