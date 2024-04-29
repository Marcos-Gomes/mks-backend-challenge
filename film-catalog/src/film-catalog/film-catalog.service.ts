import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFilmCatalogDto } from './dto/create-film-catalog.dto';
import { UpdateFilmCatalogDto } from './dto/update-film-catalog.dto';
import { Repository } from 'typeorm';
import { FilmCatalog } from './entities/film-catalog.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FilmCatalogService {
  constructor(
    @InjectRepository(FilmCatalog)
    private readonly filmCatalogRepository: Repository<FilmCatalog>
  ) {}

  async create(createFilmCatalogDto: CreateFilmCatalogDto) {
    const filmCatalog = this.filmCatalogRepository.create(createFilmCatalogDto);
    return await this.filmCatalogRepository.save(filmCatalog);
  }

  async findAll() {
    return await this.filmCatalogRepository.find();
  }

  async findOne(id: number) {
    return await this.filmCatalogRepository.findOne({
      where: { id }
    });
  }

  async update(id: number, updateFilmCatalogDto: UpdateFilmCatalogDto) {
    const filmCatalog = await this.findOne(id);

    if(!filmCatalog){
      throw new NotFoundException();
    }

    Object.assign(filmCatalog, updateFilmCatalogDto);
    
    return await this.filmCatalogRepository.save(filmCatalog);
  }

  async remove(id: number) {
    const filmCatalog = await this.findOne(id);

    if(!filmCatalog){
      throw new NotFoundException();
    }

    return await this.filmCatalogRepository.remove(filmCatalog);
  }
}
