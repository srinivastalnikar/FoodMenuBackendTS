import { Request } from "express";

export interface UserRequest extends Request {
    body: UserDetails;
}

interface UserDetails {
    username: string;
    password: string;
}
