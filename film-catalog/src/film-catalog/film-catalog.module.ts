import { Module } from '@nestjs/common';
import { FilmCatalogService } from './film-catalog.service';
import { FilmCatalogController } from './film-catalog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmCatalog } from './entities/film-catalog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FilmCatalog])],
  controllers: [FilmCatalogController],
  providers: [FilmCatalogService],
})
export class FilmCatalogModule {}
