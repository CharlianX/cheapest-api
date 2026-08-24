import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { TiendaRepository } from '../repositories/tienda.repository';
import { CreateTiendaDto, UpdateTiendaDto } from '../dtos/tienda.dto';
import { Tienda } from '../entities/tienda.entity';

@Injectable()
export class TiendaService {
  constructor(private readonly tiendaRepository: TiendaRepository) {}

  async create(createTiendaDto: CreateTiendaDto): Promise<Tienda> {
    try {
      return await this.tiendaRepository.create(createTiendaDto);
    } catch (error) {
      throw new BadRequestException('Error al crear la tienda. Verifique los datos enviados.');
    }
  }

  async findAll(): Promise<Tienda[]> {
    return await this.tiendaRepository.findAll();
  }

  async findById(id: string): Promise<Tienda> {
    const tienda = await this.tiendaRepository.findById(id);
    if (!tienda) {
      throw new NotFoundException(`Tienda con ID ${id} no encontrada.`);
    }
    return tienda;
  }

  async update(id: string, updateTiendaDto: UpdateTiendaDto): Promise<Tienda> {
    await this.findById(id); 
    const tiendaActualizada = await this.tiendaRepository.update(id, updateTiendaDto);
    if (!tiendaActualizada) {
      throw new BadRequestException('No se pudo actualizar la tienda.');
    }
    return tiendaActualizada;
  }

  async delete(id: string): Promise<void> {
    await this.findById(id); 
    const deleted = await this.tiendaRepository.delete(id);
    if (!deleted) {
      throw new BadRequestException('No se pudo eliminar la tienda.');
    }
  }

  async exists(id: string): Promise<boolean> {
    const tienda = await this.tiendaRepository.findById(id);
    return !!tienda;
  }
}
