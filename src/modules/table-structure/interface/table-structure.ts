import { Document } from "mongoose";

export interface TableStructure extends Document {
    id: Number,
    tableTypeId: number,
    header: string,
    dataType: string,
    format: string,
    required: number
}