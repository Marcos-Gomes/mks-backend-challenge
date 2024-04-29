import { PartialType } from '@nestjs/mapped-types';
import { CreateFilmCatalogDto } from './create-film-catalog.dto';

export class UpdateFilmCatalogDto extends PartialType(CreateFilmCatalogDto) {}
