import { Module } from '@nestjs/common';
import { TableTypeController } from './table-type.controller';
import { TableTypeService } from './table-type.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TableTypeSchema } from './schemas/table-type.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'TableType', schema: TableTypeSchema }
  ])],
  controllers: [TableTypeController],
  providers: [TableTypeService]
})
export class TableTypeModule { }
