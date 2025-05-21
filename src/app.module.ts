import { Module } from '@nestjs/common';
import { CuentasController } from './controller/Cuentas/cuentas.controller';
import { BancoService } from './service/Banco/banco.service';

@Module({
  imports: [],
  controllers: [CuentasController],
  providers: [BancoService],
})
export class AppModule {}
