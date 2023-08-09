/* eslint-disable prettier/prettier */
import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { QuoteModule } from './quote/quote.module';
import WalletModule from './wallet/wallet.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/db/postgres.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AccountModule,
    WalletModule,
    QuoteModule,
    ConfigModule.forRoot({
      isGlobal : true
    }),
    TypeOrmModule.forRootAsync({
      useClass:PostgresConfigService,
      inject: [PostgresConfigService]
    })
  ],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: ClassSerializerInterceptor,
  }]
})
export class AppModule { }
