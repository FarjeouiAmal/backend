// import { Controller, Post, Body, Param, Get } from '@nestjs/common';
// import { CommandeLineService } from './ligne-commande.service';
// import { CommandeLine } from './entity/ligne-commande.entity'; // Assurez-vous que le chemin d'import est correct

// @Controller('commande-lines')
// export class CommandeLineController {
//   constructor(private readonly commandeLineService: CommandeLineService) {}

//   @Post() // Remove ':repasId' from the decorator
//   async createCommandeLine(@Body() body: { repasId: string }): Promise<any> {
//     const { repasId } = body;
//     return await this.commandeLineService.createCommandeLine(repasId);
//   }

//   @Get()
//   async getAllCommandeLines(): Promise<CommandeLine[]> {
//     return await this.commandeLineService.getAllCommandeLines();
//   }

//   @Get(':id')
//   async getCommandeLineById(@Param('id') id: string): Promise<CommandeLine> {
//     return await this.commandeLineService.getCommandeLineById(id);
//   }

// }
