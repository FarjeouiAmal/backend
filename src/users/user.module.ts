// user.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './entity/user.entity';
import { UserSchema } from './entity/user.entity';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
//import { APP_GUARD } from '@nestjs/core';
// import { RolesGuard } from 'src/auth/Roles/roles.guard';
// import { RestoRoles } from 'src/auth/Roles/resto-roles.guard';
// import { AdminRoles } from 'src/auth/Roles/admin-roles.guard';
import { JwtModule } from '@nestjs/jwt';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';



@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({}),
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
          cb(null, `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),

  ],
  
  controllers: [UserController],
  providers: [
    UserService,
    // RolesGuard,
    // { provide: APP_GUARD, useClass: RolesGuard },
    // { provide: APP_GUARD, useValue: RestoRoles },  // Update this line
    // { provide: APP_GUARD, useValue: AdminRoles}, 
  ],
})
export class UserModule {}
