/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

import { Type } from "class-transformer";
import { IsArray, IsEmail, IsNumber, IsString, MinLength, ValidateNested } from "class-validator"
import { Quote } from "src/quote/entities/quote.entity";
export class CreateWalletDTO{

    @IsNumber({ allowInfinity: false, allowNaN: false }, { message: 'Passe um Id de conta' })
    IdAccount: number
    @ValidateNested()
    @IsArray()
    @Type(() => Quote)
    quotes: Quote[]
    balance: number;
}