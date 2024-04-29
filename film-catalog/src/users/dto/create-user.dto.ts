import { IsEmail, IsNotEmpty, Matches, Min } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()    
    name: string;

    @IsEmail()
    email:string;

    @IsNotEmpty()    
    @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, { message: "A senha deve conter letras maiúscula, minúscula, números e caracteres especiais"})    
    password: string;
}
