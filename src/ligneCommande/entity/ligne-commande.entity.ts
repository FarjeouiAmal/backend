import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Order } from '../../commande/entity/commande.entity';
import { Repas } from 'src/repas/entity/repas.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CommandeLineDocument = CommandeLine & Document;

@Schema()
export class CommandeLine {
  @PrimaryGeneratedColumn()
  id: string;

  //  @ManyToOne(() => Order, commande => commande.commandeLines)
  //  @JoinColumn()
  //  commande: Order;

  //  @ManyToOne(() => Repas, repas => repas.commandeLines)
  //  @JoinColumn() // On ne spécifie pas repas.commandeLines car cette propriété n'existe pas sur l'entité Repas
  //  repas: Repas;

  @Prop()
  repasName: string;

  @Prop()
  quantity: number;
}
export const CommandeLineSchema = SchemaFactory.createForClass(CommandeLine);