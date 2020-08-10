import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TableStructure } from './interface/table-structure';
import { table } from 'console';

@Injectable()
export class TableStructureService {
    constructor(@InjectModel('TableStructure') private readonly _tableStructure: Model<TableStructure>) { }

    async getTablesStructures(tableTypeId: any) {
        console.log(await this._tableStructure.find({ tableTypeId: 1 }));
        return await this._tableStructure.find({ tableTypeId: tableTypeId.id })
    }

}
