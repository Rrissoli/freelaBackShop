/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { AccountController } from "./account.controller";
import { AccountRepository } from "./account.repository";
import { NotExistEmail } from "./validations/NotExistEmail.validator";
@Module({
    controllers: [AccountController],
    providers:[AccountRepository, NotExistEmail],
})
export class AccountModule {


}