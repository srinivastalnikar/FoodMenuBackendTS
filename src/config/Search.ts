import { Request } from "express";

export interface SearchRequest extends Request {
    body: SearchBody;
}

interface SearchBody {
    dishName?: string;
    dishCat?: string;
    dishDesc?: string;
    resName?: string;
    cuisine?: string;
}
