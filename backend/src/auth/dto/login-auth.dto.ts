import { Transform } from "class-transformer";
import { ArrayNotEmpty, IsArray, IsEmail, IsString, MinLength } from "class-validator";

export class LoginDto {

    @MinLength(1)
    @IsString()
    userName: string;

    @IsEmail()
    email: string;   

    @IsString()
    @MinLength(6)
    password: string;

}