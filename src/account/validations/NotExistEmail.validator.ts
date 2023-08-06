/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { AccountRepository } from "../account.repository";
import { Injectable, ValidationPipeOptions } from "@nestjs/common";
@Injectable()
@ValidatorConstraint({async : true})
export class NotExistEmail implements ValidatorConstraintInterface {
    constructor(
        private repository: AccountRepository
    ) { }
    async validate(email: string, validationArguments?: ValidationArguments): Promise<boolean> {
        try {
            const account = await this.repository.existEmail(email)
            return !account
        } catch (error) {
            throw new Error("erro na válidação de email existente")
        }
    }
}
export const IsUniqueEmail =  (opcoesValidacao: ValidationOptions)=> {
    return (objeto : Object, propriedade : string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesValidacao,
            constraints: [],
            validator: NotExistEmail
        })
    }
}