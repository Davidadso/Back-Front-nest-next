import { Transform } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsEmail, IsString, MinLength } from "class-validator";

export class RegisterDto {

    @MinLength(1)
    @IsString()
    userName: string;

    @IsEmail()
    email: string;   

    @IsString()
    @MinLength(6)
    password: string;


    @Transform(({value}) => value.trim())
    @IsArray()
    @ArrayNotEmpty()
    @MinLength(6)
    roles: string[];  
}