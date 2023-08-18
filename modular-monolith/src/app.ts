import dotenv from 'dotenv';
import { createExpressAPIServer } from './commons/config';
dotenv.config();


const server = createExpressAPIServer();
server.init();
