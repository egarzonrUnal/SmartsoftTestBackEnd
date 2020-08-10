import { Controller, Get, Param } from '@nestjs/common';
import { TableTypeService } from './table-type.service';

@Controller('table-type')
export class TableTypeController {
    constructor(private readonly _tableTypeService: TableTypeService) { }
    @Get(':id')
    getTables(@Param() id: any) {
        console.log(id);
        return this._tableTypeService.getTables(id);
    }
}
