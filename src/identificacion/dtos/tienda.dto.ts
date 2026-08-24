import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateTiendaDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  codigoInterno: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  nombreComercial: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  responsable: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  rut: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  direccion: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  ciudad: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  pais: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  telefono: string;
}

export class UpdateTiendaDto extends PartialType(CreateTiendaDto) {}

export class TiendaResponseDto {
  id: string;
  codigoInterno: string;
  nombreComercial: string;
  responsable: string;
  rut: string;
  direccion: string;
  ciudad: string;
  pais: string;
  telefono: string;
  createdAt: Date;
  updatedAt: Date;
}
