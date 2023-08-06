/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { WalletRepository } from "./wallet.repository"
import { CreateWalletDTO } from "./dto/CreateWallet.dto";
@Controller("wallet")
export class WalletController {
    constructor(private walletRepository: WalletRepository) {

    }
    @Post(':accountId')
    async createWallet(@Body() wallet : CreateWalletDTO, @Param() accountId :number) {
        const response  = await this.walletRepository.saveWallet(wallet, accountId)
        return {mensagem: "wallet salva com sucesso"}
    }
    @Get()
    async findAllWallet(){
        const response = await this.walletRepository.findAll()
        return response
    }
}