import { Body, Controller, Delete, Get, Param, Post, Res } from '@nestjs/common';
import { Cuenta } from 'src/model/Cuenta';
import { BancoService } from 'src/service/Banco/banco.service';
import { Response } from 'express';

@Controller('cuentas')
export class CuentasController {
  constructor(private readonly cuentasService: BancoService) { }

  @Post('alta')
  guardar(@Body() cuenta: Cuenta, @Res() response: Response): void {
    const resultado: boolean = this.cuentasService.save(cuenta);
    if (resultado) {
      response.status(200).send();
    }
    response.status(409).send();
  }

  @Get('todos')
  buscar(): Cuenta[] {
    return this.cuentasService.find()
  }

  @Get('buscarnum/:num')
  buscarPorNumero(@Param("num") numeroCuenta: string, @Res() response: Response):any{
    const cuenta = this.cuentasService.findByNumeroCuenta(numeroCuenta)
    if(cuenta) {
      return response.status(200).json(cuenta)
    } else {
      return response.status(409).json(new Cuenta());
    }
  }
  @Get('buscarsaldo/:saldo')
  buscarPorSaldo(@Param("saldo") saldoMin: number): Cuenta[] {
    return this.cuentasService.findBySaldoMin(saldoMin)
  }
  @Get('buscartipo/:tipo')
  buscarPorTipo(@Param("tipo") tipo: string): Cuenta[] {
    return this.cuentasService.findByTipo(tipo)
  }
  @Delete('eliminar/:num')
  eliminarPorNumero(@Param("num") numeroCuenta: string): void {
    this.cuentasService.deleteByNumeroCuenta(numeroCuenta)
  }
}