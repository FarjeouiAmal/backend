import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { RepasModule } from './repas/repas.module';
import { MenuModule } from './menu/menu.module';
import { MailModule } from './auth/mail/mail.module';
import { CategorieModule } from './catégorie/categorie.module';
import { OrdersModule } from './commande/commande.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    UserModule,
    AuthModule,
    MailModule,
    RepasModule,
    CategorieModule,
    MenuModule,
    OrdersModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
