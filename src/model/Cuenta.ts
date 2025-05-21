export class Cuenta {
    numeroCuenta:string;
    titular:string;
    saldo:number;
    tipo:string;
    constructor(numeroCuenta?:string,titular?:string, saldo?:number, tipo?:string ) {
        this.numeroCuenta=numeroCuenta
        this.titular=titular
        this.saldo=saldo
        this.tipo=tipo
    }
}