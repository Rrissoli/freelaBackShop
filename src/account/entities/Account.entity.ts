/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { Exclude, Expose } from 'class-transformer';
export class AccountEntity {
    id : string
    nome : string 
    email:string
    @Exclude()
    senha : string
    balance : number
    

}