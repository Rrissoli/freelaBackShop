/* eslint-disable prettier/prettier */
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { QuoteModule } from './quote/quote.module';
import WalletModule from './wallet/wallet.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [AccountModule, WalletModule, QuoteModule],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor,
  }]
})
export class AppModule {}
