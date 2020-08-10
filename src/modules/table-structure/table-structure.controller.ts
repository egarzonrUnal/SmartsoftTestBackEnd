import { Controller, Get, Param } from '@nestjs/common';
import { TableStructureService } from './table-structure.service';

@Controller('table-structure')
export class TableStructureController {

    constructor(private readonly tableStructureService: TableStructureService) { }

    @Get('table-type/:id')
    getTableStructures(@Param() tableTypeId: any) {
        return this.tableStructureService.getTablesStructures(tableTypeId)
    }
}
