import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Tienda } from '../entities/tienda.entity';
import { CreateTiendaDto, UpdateTiendaDto } from '../dtos/tienda.dto';

@Injectable()
export class TiendaRepository {
  constructor(
    @Inject('TIENDA_REPOSITORY')
    private readonly repository: Repository<Tienda>,
  ) {}

  async create(createTiendaDto: CreateTiendaDto): Promise<Tienda> {
    const tienda = this.repository.create(createTiendaDto);
    return await this.repository.save(tienda);
  }

  async findAll(): Promise<Tienda[]> {
    return await this.repository.find();
  }

  async findById(id: string): Promise<Tienda | null> {
    return await this.repository.findOne({ where: { id } });
  }

  async update(id: string, updateTiendaDto: UpdateTiendaDto): Promise<Tienda | null> {
    await this.repository.update(id, updateTiendaDto);
    return this.findById(id);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.repository.delete(id);
    return result.affected !== undefined && result.affected > 0;
  }
}
