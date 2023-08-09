/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AccountRepository } from './account.repository';
import { CreateAccountDTO } from './dto/CreateAccount.dto';
import { AccountEntity } from './entities/Account.entity';
import { v4 as uuid } from 'uuid';
import { ListAccountDTO } from './dto/ListAccount.dto';
import { UpdateAccountDTO } from './dto/UpdateAccount.dto';
@Controller('accounts')
export class AccountController {

    constructor(private accountRepository: AccountRepository) {
 
    }

    @Post()
    async createAccount(@Body() dadosDaConta : CreateAccountDTO) {
        const accountEntity =  new AccountEntity()
        accountEntity.email =  dadosDaConta.email
        accountEntity.senha =  dadosDaConta.senha
        accountEntity.nome =  dadosDaConta.nome
        accountEntity.id = uuid()
        this.accountRepository.saveAss(accountEntity)
        return { mensagem: "conta cadastrada" }
    }
    @Get()
    async listAllAccounts() {
        const accounts = await this.accountRepository.findAll();
        const newAccounts = accounts.map(item => new ListAccountDTO(item.id,item.nome))
        return newAccounts
    }
    @Put("/:id")
    async updateAccount(@Param('id') id:string, @Body() dadosAtualizar : UpdateAccountDTO){
        const account = await this.accountRepository.update(id, dadosAtualizar)
        return {
            account:account,
            mensagem:"conta atualizada"
        }
    }
    @Delete("/:id")
    async deleteAccount(@Param('id') id ){
        const account = await this.accountRepository.delete(id)
        return {
            data: account,
            mensagem: "excluido com sucesso"
        }
    }
}
