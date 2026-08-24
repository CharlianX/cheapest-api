import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { TiendaService } from '../services/tienda.service';
import { CreateTiendaDto, UpdateTiendaDto } from '../dtos/tienda.dto';

@Controller('tiendas')
export class TiendaController {
  constructor(private readonly tiendaService: TiendaService) {}

  @Post()
  create(@Body(new ValidationPipe({ transform: true })) createTiendaDto: CreateTiendaDto) {
    return this.tiendaService.create(createTiendaDto);
  }

  @Get()
  findAll() {
    return this.tiendaService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.tiendaService.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new ValidationPipe({ transform: true })) updateTiendaDto: UpdateTiendaDto,
  ) {
    return this.tiendaService.update(id, updateTiendaDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.tiendaService.delete(id);
  }
}
