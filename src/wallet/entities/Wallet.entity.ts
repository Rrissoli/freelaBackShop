/* eslint-disable prettier/prettier */
import { Quote } from "src/quote/entities/quote.entity";

export class WalletEntity {
    id: string
    IdAccount: string
    quotes: Quote[]
    balance: number;
}