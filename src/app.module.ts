import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TableTypeModule } from './modules/table-type/table-type.module';
import { TableStructureModule } from './modules/table-structure/table-structure.module';
import { MongooseModule } from '@nestjs/mongoose'
@Module({
  imports: [TableTypeModule, TableStructureModule, MongooseModule.forRoot('mongodb+srv://Admin:SlrGWOjoy9hOBGir@cluster0.yl6q4.mongodb.net/smartsoft', {
    useNewUrlParser: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
