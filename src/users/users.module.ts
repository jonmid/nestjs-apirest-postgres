import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { Customer } from './entities/customer.entity';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User } from './entities/user.entity';
import { OrdersController } from './controllers/orders.controller';
import { OrdersService } from './services/orders.service';
import { Order } from './entities/order.entity';
import { OrderProductController } from './controllers/order-product.controller';
import { OrderProductService } from './services/order-product.service';
import { OrderProduct } from './entities/order-product.entity';

import { ProductsModule } from '../products/products.module';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forFeature([User, Customer, Order, OrderProduct]),
  ],
  controllers: [
    CustomerController,
    UsersController,
    OrdersController,
    OrderProductController,
  ],
  providers: [
    CustomersService,
    UsersService,
    OrdersService,
    OrderProductService,
  ],
})
export class UsersModule {}
