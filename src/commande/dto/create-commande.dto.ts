// src/orders/dto/create-order.dto.ts
export class CreateOrderDto {
  customerId: string;
  items: { id: string; name: string; price: number; quantity: number }[];
  total: number;
}
