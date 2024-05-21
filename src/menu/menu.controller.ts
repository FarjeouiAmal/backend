// menu.controller.ts
import { Controller, Post, Body, UseGuards, Request, Param, Patch, Delete, Get} from '@nestjs/common';
import { MenuService } from './menu.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entity/menu.entity';
import { User } from 'src/users/entity/user.entity';

@Controller('menus')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

 
  @Post()
  async createMenu(@Request() req, @Body() createMenuDto: CreateMenuDto) {
    return this.menuService.createMenu(req.user, createMenuDto);
  }

  
@Patch(':id')
async updateMenu(@Request() req, @Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
  return this.menuService.updateMenu(id, updateMenuDto);
}


@Delete(':id')
async deleteMenu(@Request() req, @Param('id') id: string) {
  return this.menuService.deleteMenu(id);
}



  
  @Get()
  async getMenu(@Request() req): Promise<Menu[]> {
    const user: User = req.user; // Get authenticated user
    return this.menuService.getMenu(user);
  }
}
