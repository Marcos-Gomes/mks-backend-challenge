import { IsNotEmpty } from "class-validator";

export class CreateFilmCatalogDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    releaseYear: string;

    @IsNotEmpty()
    filmlanguage: string;
    
    @IsNotEmpty()
    duration: string;

    @IsNotEmpty()
    director: string;

    @IsNotEmpty()
    cast: string;

    @IsNotEmpty()
    description: string;
}
