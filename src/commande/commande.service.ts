import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dto/create-commande.dto';
import { Order } from './entity/commande.entity';
import { OrderDocument } from './entity/commande.entity';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

  async create(createOrderDto: CreateOrderDto) {
    const newOrder = new this.orderModel(createOrderDto);
    return newOrder.save();
  }

  async findAll() {
    return this.orderModel.find().exec();
  }
}
