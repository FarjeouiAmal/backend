// src/orders/orders.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { OrdersService } from './commande.service';
import { CreateOrderDto } from './dto/create-commande.dto';
@Controller('api/orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  
    @Post()
    async create(@Body() createOrderDto: CreateOrderDto) {
      return this.ordersService.create(createOrderDto);
    }
  
    @Get()
    async findAll() {
      return this.ordersService.findAll();
    }
  }