import { Module } from '@nestjs/common';
import { TableStructureController } from './table-structure.controller';
import { TableStructureService } from './table-structure.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TableStructureSchema } from './schemas/table-structure.schema';

@Module({
  imports: [MongooseModule.forFeature([{
    name: 'TableStructure', schema: TableStructureSchema
  }])],
  controllers: [TableStructureController],
  providers: [TableStructureService]
})
export class TableStructureModule { }
