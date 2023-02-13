import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dtos/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async createCat(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async getAll() {
    return this.catsService.findAll();
  }

  @Get('filter')
  async getOne(@Query('name') name: string) {
    return this.catsService.findOne(name);
  }
}
