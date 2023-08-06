/* eslint-disable prettier/prettier */

export class WalletRepository {
    private wallets = []
    saveWallet(wallet,accountId :number) {
        wallet.accountId = accountId
        this.wallets.push(wallet)
    }
    findAll() {
        return this.wallets
    }
}