// src/orders/models/order.model.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Entity } from 'typeorm';
import { Document } from 'mongoose';

@Entity('orders')
@Schema()
export class Order {
  @Prop({ required: true })
  customerId: string;

  @Prop({ required: true })
  items: { id: string; name: string; price: number; quantity: number }[];

  @Prop({ required: true })
  total: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
export type OrderDocument = Order & Document;

