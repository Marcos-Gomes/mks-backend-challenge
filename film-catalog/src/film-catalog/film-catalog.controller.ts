import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FilmCatalogService } from './film-catalog.service';
import { CreateFilmCatalogDto } from './dto/create-film-catalog.dto';
import { UpdateFilmCatalogDto } from './dto/update-film-catalog.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('film-catalog')
@UseGuards(AuthGuard('jwt'))
export class FilmCatalogController {
  constructor(private readonly filmCatalogService: FilmCatalogService) {}

  @Post()
  create(@Body() createFilmCatalogDto: CreateFilmCatalogDto) {
    return this.filmCatalogService.create(createFilmCatalogDto);
  }

  @Get()
  findAll() {
    return this.filmCatalogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmCatalogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmCatalogDto: UpdateFilmCatalogDto) {
    return this.filmCatalogService.update(+id, updateFilmCatalogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmCatalogService.remove(+id);
  }
}
