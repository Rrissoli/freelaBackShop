/* eslint-disable prettier/prettier */

import { IsEmail, IsNumber, IsString, MinLength } from "class-validator"
import { IsUniqueEmail, NotExistEmail } from "../validations/NotExistEmail.validator"

export class CreateAccountDTO {
    @IsString({message: "o nome precisa ser descrito"})
    @MinLength(6, {message:  'é necessário pelo menos 6 carácteres'})
    nome : string 
    @IsEmail({allow_display_name: true}, {message: 'precisa ser um email válido'})
    @IsUniqueEmail({message:"já existe uma conta com esse email"})
    email:string
    @IsString({message:'precisa ser uma senha válida'})
    @MinLength(6, {message: 'senha precisa de no mínimo 6 carácteres'})
    senha : string
    @IsNumber()
    balance : number


}