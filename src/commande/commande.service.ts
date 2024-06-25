import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-commande.dto';
import { Order } from './entity/commande.entity';
import { OrderDocument } from './entity/commande.entity';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const orderDate = new Date();
    const orderDay = this.getDayOfWeek(orderDate);

    const newOrder = new this.orderModel({
      ...createOrderDto,
      orderDate,
      orderDay,
    });

    return newOrder.save();
  }

  private getDayOfWeek(date: Date): string {
    const days = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    return days[date.getUTCDay()];
  }
  async findAll() {
    return this.orderModel.find().exec();
  }

  async getOrderCount(): Promise<number> {
    return await this.orderModel.countDocuments(); // Use countDocuments method for Mongoose models
  }
}
