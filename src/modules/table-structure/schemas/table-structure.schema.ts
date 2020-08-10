import { Schema } from "mongoose";

export const TableStructureSchema = new Schema({
    id: Number,
    tableTypeId: Number,
    header: String,
    dataType: String,
    format: String,
    required: Number
}, { collection: 'table_structure' })