import { Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TableType } from './interface/table-type';

@Injectable()
export class TableTypeService {
    constructor(@InjectModel('TableType') readonly tableTypeModel: Model<TableType>) { }


    async getTables(id: any) {
        return await this.tableTypeModel.find(id);
    }
}
