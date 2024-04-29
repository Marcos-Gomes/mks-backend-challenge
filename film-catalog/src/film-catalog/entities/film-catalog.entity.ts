import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ColumnMetadata } from "typeorm/metadata/ColumnMetadata";

@Entity()
export class FilmCatalog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({name: 'release_year' })
    releaseYear: string;

    @Column({ name: 'film_language'})
    filmlanguage: string;
    
    @Column()
    duration: string;

    @Column()
    director: string;

    @Column()
    cast: string;

    @Column({ type: 'text'})
    description: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;

    @UpdateDateColumn({ name: 'updated_at'})
    updatedAt: string;
}
