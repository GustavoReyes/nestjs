import { Injectable } from '@nestjs/common';
import { Cuenta } from 'src/model/Cuenta';

@Injectable()
export class BancoService {
  cuentas: Cuenta[] = [
      {
        "numeroCuenta": "ES2114650100722030876293",
        "titular": "Juan Pérez",
        "saldo": 1500.50,
        "tipo": "ahorro"
      },
      {
        "numeroCuenta": "ES2114650100722030876294",
        "titular": "María García",
        "saldo": 2500.75,
        "tipo": "corriente"
      },
      {
        "numeroCuenta": "ES2114650100722030876295",
        "titular": "Carlos Rodríguez",
        "saldo": 5000.00,
        "tipo": "ahorro"
      },
      {
        "numeroCuenta": "ES2114650100722030876296",
        "titular": "Ana Martínez",
        "saldo": 750.25,
        "tipo": "corriente"
      },
      {
        "numeroCuenta": "ES2114650100722030876297",
        "titular": "Luis Sánchez",
        "saldo": 3200.00,
        "tipo": "ahorro"
      },
      {
        "numeroCuenta": "ES2114650100722030876298",
        "titular": "Carmen López",
        "saldo": 1800.50,
        "tipo": "corriente"
      },
      {
        "numeroCuenta": "ES2114650100722030876299",
        "titular": "Pedro Ramírez",
        "saldo": 4500.75,
        "tipo": "ahorro"
      },
      {
        "numeroCuenta": "ES2114650100722030876300",
        "titular": "Isabel Torres",
        "saldo": 950.25,
        "tipo": "corriente"
      },
      {
        "numeroCuenta": "ES2114650100722030876301",
        "titular": "Miguel Fernández",
        "saldo": 6000.00,
        "tipo": "ahorro"
      },
      {
        "numeroCuenta": "ES2114650100722030876302",
        "titular": "Laura González",
        "saldo": 2100.50,
        "tipo": "corriente"
      },
      {
        "numeroCuenta": "ES2114650100722030876303",
        "titular": "Roberto Díaz",
        "saldo": 3500.25,
        "tipo": "ahorro"
      },
      {
        "numeroCuenta": "ES2114650100722030876304",
        "titular": "Elena Moreno",
        "saldo": 1250.75,
        "tipo": "corriente"
      },
      {
        "numeroCuenta": "ES2114650100722030876305",
        "titular": "Francisco Jiménez",
        "saldo": 4200.00,
        "tipo": "ahorro"
      },
      {
        "numeroCuenta": "ES2114650100722030876306",
        "titular": "Sofía Ruiz",
        "saldo": 800.50,
        "tipo": "corriente"
      },
      {
        "numeroCuenta": "ES2114650100722030876307",
        "titular": "David Hernández",
        "saldo": 5500.75,
        "tipo": "ahorro"
      },
      {
        "numeroCuenta": "ES2114650100722030876308",
        "titular": "Patricia Alonso",
        "saldo": 1600.25,
        "tipo": "corriente"
      },
      {
        "numeroCuenta": "ES2114650100722030876309",
        "titular": "Javier Navarro",
        "saldo": 3800.00,
        "tipo": "ahorro"
      },
      {
        "numeroCuenta": "ES2114650100722030876310",
        "titular": "Marina Castro",
        "saldo": 2300.50,
        "tipo": "corriente"
      }
    ]

    save(cuenta: Cuenta): boolean {
      if(!this.cuentas.some(c => c.numeroCuenta === cuenta.numeroCuenta)){
      this.cuentas.push(cuenta);
      return true
    }
    console.log("El numero de cuenta existe");
    return false
  }

find(){
  console.log(`Tienes un total de ${this.cuentas.length} cuentas`);
  return this.cuentas
}

findByNumeroCuenta(numeroCuenta: string):Cuenta{
  return this.cuentas.find(c => c.numeroCuenta == numeroCuenta)
}

findByTipo(tipo: string): Cuenta[]{
  return this.cuentas.filter(c => c.tipo == tipo)
}

findBySaldoMin(saldoMin: number): Cuenta[]{
  return this.cuentas.filter(c => c.saldo == saldoMin)
}

deleteByNumeroCuenta(numeroCuenta: string): void {
  this.cuentas = this.cuentas.filter(c => c.numeroCuenta != numeroCuenta)
}
}