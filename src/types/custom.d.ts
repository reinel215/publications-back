import { Express } from "express-serve-static-core";
import { User, UserSerialize } from "./User";

declare module 'express-serve-static-core' {
    interface Request {
        user?: User
    }
    interface Response {
    }
}