/* eslint-disable prettier/prettier */

import { Module } from "@nestjs/common";
import { WalletController } from "./wallet.controller";
import { WalletRepository } from "./wallet.repository";

@Module({
    controllers: [WalletController],
    providers:[WalletRepository]
})



export default class WalletModule{

}