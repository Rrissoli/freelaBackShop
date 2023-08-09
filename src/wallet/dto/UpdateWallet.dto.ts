/* eslint-disable prettier/prettier */


import { Type } from "class-transformer";
import { IsArray, IsEmail, IsNumber, IsString, MinLength, ValidateNested } from "class-validator"
import { Quote } from "src/quote/entities/quote.entity";
export class UpdateWalletDTO {
    @ValidateNested()
    @IsArray()
    @Type(() => Quote)
    quotes: Quote[]
    @IsNumber()
    balance: number;
}