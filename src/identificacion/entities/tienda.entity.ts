import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('tiendas')
export class Tienda {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'codigo_interno', type: 'varchar', length: 50, unique: true })
  codigoInterno: string;

  @Column({ name: 'nombre_comercial', type: 'varchar', length: 150 })
  nombreComercial: string;

  @Column({ type: 'varchar', length: 150 })
  responsable: string;

  @Column({ type: 'varchar', length: 50 })
  rut: string;

  @Column({ type: 'varchar', length: 255 })
  direccion: string;

  @Column({ type: 'varchar', length: 100 })
  ciudad: string;

  @Column({ type: 'varchar', length: 100 })
  pais: string;

  @Column({ type: 'varchar', length: 50 })
  telefono: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
