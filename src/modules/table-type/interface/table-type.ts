import { Document } from "mongoose";

export interface TableType extends Document {
    readonly id: number;
    readonly name: string;
}