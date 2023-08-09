/* eslint-disable prettier/prettier */

import { WalletEntity } from "./entities/Wallet.entity"


export class WalletRepository {
    private wallets = []
    async saveWallet(wallet: WalletEntity,) {

        this.wallets.push(wallet)
    }
    findAll() {
        return this.wallets
    }
    async update(id: string, dadosAtualizar: Partial<WalletEntity>) {
        const wallet = this.wallets.find(item => item.id == id)
        if (!wallet) {
            throw new Error("Conta não existe")
        }
        Object.entries(dadosAtualizar).forEach(([chave, valor]) => {
            if (chave == id) return
            wallet[chave] = valor
        })
        return wallet
    }
    async delete(id: string) {
        try {
            const wallet = this.wallets.find(item => item.id == id)
            const index = this.wallets.indexOf(wallet)
            this.wallets.splice(index, 1)
            return wallet
        } catch (error) {
            throw new Error(error)
        }

    }
}