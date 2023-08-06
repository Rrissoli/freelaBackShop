/* eslint-disable prettier/prettier */
import { IsNumber, IsString } from "class-validator"
export class Quote {
    @IsString({message: 'a Cota está sem nome'})
    nome: string
    @IsNumber({allowInfinity: false, allowNaN: false}, {message : 'valor não válido'})
    value: number
    @IsNumber({allowInfinity: false, allowNaN: false}, {message : 'valor não válido'})
    quantityOfQuote : number
    @IsNumber({allowInfinity: false, allowNaN: false}, {message : 'valor não válido'})
    totalValue:number
    @IsNumber({allowInfinity: false, allowNaN: false}, {message : 'valor não válido'})
    IdWallet : number
}
