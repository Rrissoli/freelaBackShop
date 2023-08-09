/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { WalletRepository } from "./wallet.repository"
import { CreateWalletDTO } from "./dto/CreateWallet.dto";
import { WalletEntity } from "./entities/Wallet.entity";
import { v4 as uuid } from "uuid";
import { UpdateWalletDTO } from "./dto/UpdateWallet.dto";
@Controller("wallet")
export class WalletController {
    constructor(private walletRepository: WalletRepository) {

    }
    @Post('/:accountId')
    async createWallet(@Param("accountId") accountId : string, @Body() wallet: CreateWalletDTO) {
        const obj = new WalletEntity()
        obj.id = uuid()
        obj.IdAccount = accountId
        obj.balance = wallet.balance
        obj.quotes = wallet.quotes
        const response = await this.walletRepository.saveWallet(obj)
        return { mensagem: "wallet salva com sucesso" }
    }
    @Get()
    async findAllWallet() {
        const response = await this.walletRepository.findAll()
        return response
    }
    @Put("/:id")
    async updateWallet(@Param('id') id : string, @Body() dataUpdated : UpdateWalletDTO){
        const response = await this.walletRepository.update(id,dataUpdated)
        return {
            data: response,
            message:"updated successfully",
        }
    }
    @Delete()
    async deleteWallet(@Param('id') id : string){
        const response = await this.walletRepository.delete(id)
        return {
            data:response,
            mensagem: 'Deleted'
        }
    }
}