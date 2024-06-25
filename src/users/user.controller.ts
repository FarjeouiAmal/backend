import { Body, Controller, UseGuards, Delete, Get, Param, Post, Put, Headers, Query, UploadedFile, UseInterceptors  } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
// import { AdminRoles } from 'src/auth/Roles/admin-roles.guard';
// import { RestoRoles } from 'src/auth/Roles/resto-roles.guard';
 import { RolesGuard } from 'src/auth/Roles/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { User, UserRole } from './entity/user.entity';
import { Admin, Resto } from 'src/auth/Roles/adminResto.decorator';
import { RegisterUserDto } from './dto/register-user.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';


@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('register')
  async registerUser(@Body() registerUserDto: RegisterUserDto) {
    try {
      const newUser = await this.userService.registerUser(registerUserDto);
      return { message: 'User registered successfully', user: newUser };
    } catch (error) {
      return { message: 'Error registering user', error: error.message };
    }
  }

  @Post('create-resto')
@UseInterceptors(FileInterceptor('image'))
async createResto(@Body() createUserDto: CreateUserDto, @UploadedFile() file: Express.Multer.File) {
    if (file) {
        createUserDto.imagePath = `http://localhost:3004/uploads/${file.filename}`; // Full URL of the image
    }
    return this.userService.createResto(createUserDto);
}


  @Post('create-livreur')
  async createLivreur(@Body() createUserDto: CreateUserDto) {
    return this.userService.createLivreur(createUserDto);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    try {
      await this.userService.deleteUserById(id);
      return { message: 'User deleted successfully' };
    } catch (error) {
      return { message: 'Error deleting user', error: error.message };
    }
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Get('name/:name')
  async getUserByName(@Param('name') name: string) {
    return this.userService.getUserByName(name);
  }

  @Get('adresse/:adresse')
  async getUserByAdresse(@Param('adresse') adresse: string) {
    return this.userService.getUserByAdresse(adresse);
  }

  @Get('telephone/:telephone')
  async getUserByTelephone(@Param('telephone') telephone: string) {
    return this.userService.getUserByTelephone(telephone);
  }

  @Get()
  async getUsers(@Query('role') role?: string): Promise<User[]> {
    switch (role) {
      case 'resto':
        return this.userService.getRestoUsers();
      case 'consommateur':
        return this.userService.getConsommateurUsers();
      case 'livreur':
        return this.userService.getLivreurUsers();
      default:
        throw new Error("Invalid role parameter. Only 'resto', 'consommateur', or 'livreur' roles are supported.");
    }
  }

  @Get('count/livreurs')
  async countLivreur(): Promise<{ count: number }> {
    const count = await this.userService.countLivreur();
    return { count };
  }

  @Get('count/consommateurs')
  async countConsommateur(): Promise<{ count: number }> {
    const count = await this.userService.countConsommateur();
    return { count };
  }

  @Get('count/restos')
  async countResto(): Promise<{ count: number }> {
    const count = await this.userService.countResto();
    return { count };
  }

  
 // @Post()
  // @UseGuards(RolesGuard)
  // async createUser(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.createUser(createUserDto);
  // }




  // @Get()
  // // @UseGuards(JwtAuthGuard) // Add necessary guards
  // async getUsers() {
  //   return this.userService.getUsers();
  // }


  // @UseGuards(JwtAuthGuard)
  // @Delete(':id')
  // async deleteUser(@Param('id') id: string) {
  //   return this.userService.deleteUserById(id);
  // }
}
