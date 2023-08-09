/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateAccountDTO } from "./dto/CreateAccount.dto";
import { AccountEntity } from "./entities/Account.entity";

@Injectable()
export class AccountRepository {
    
    private accounts: AccountEntity[] = [];

    saveAss(account: AccountEntity) {
        this.accounts.push(account);
    }
    findAll(){
        return this.accounts
    }
    async existEmail(email:string){
        const possivelAccount = this.accounts.find(
            account => account.email == email
        )
        return possivelAccount
    }
    async update(id: string, dadosAtualizar : Partial<AccountEntity>){
        const account = this.accounts.find(item => item.id == id)
        if(!account){
            throw new Error("Conta não existe")
        }
        Object.entries(dadosAtualizar).forEach(([chave, valor]) => {
            if(chave == id) return
            account[chave] = valor
        })
        return account
    }
    async delete(id: string){
        const account = this.accounts.find(item => item.id == id)
        const index = this.accounts.indexOf(account)
        this.accounts.splice(index, 1)
        return account
    }
}