import { Module } from '@nestjs/common';
import { DatabaseModule } from '../datasources/database.module';
import { TiendaController } from './controllers/tienda.controller';
import { TiendaService } from './services/tienda.service';
import { TiendaRepository } from './repositories/tienda.repository';
import { repositoryProviders } from './repositories/repository.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [TiendaController],
  providers: [
    ...repositoryProviders,
    TiendaRepository,
    TiendaService,
  ],
  exports: [TiendaService],
})
export class IdentificacionModule {}
