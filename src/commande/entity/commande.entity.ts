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

  @Prop({ required: true, default: Date.now }) // Add a new field for order date with default value as current date
  orderDate: Date; // Assuming the name of the field is 'orderDate'

  @Prop({ required: true }) // Add a new field for order day
  orderDay: string; // Assuming the name of the field is 'orderDay'
}


export const OrderSchema = SchemaFactory.createForClass(Order);
export type OrderDocument = Order & Document;

