import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './model/User.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createUser(@Body() userDto: User) {
    return this.appService.createUser(userDto);
  }

  @Get()
  getAllUser() {
    return this.appService.getAllUser();
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() userUpdateDto: User) {
    return this.appService.updateUser(id, userUpdateDto);
  }

  @Get(':id')
  async getUser(@Param('id') id: String) {
    return this.appService.getUser(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.appService.deleteUser(id);
  }
}
