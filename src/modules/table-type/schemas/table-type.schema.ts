import { Schema } from 'mongoose'

export const TableTypeSchema = new Schema({
  id: Number,
  name: String
}, { collection: 'table_types' })