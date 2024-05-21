// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { CommandeLine, CommandeLineDocument } from './entity/ligne-commande.entity';
// import { CreateCommandeLineDto } from './dto/createCommandeLineDto';
// import { Repas } from 'src/repas/entity/repas.entity';

// @Injectable()
// export class CommandeLineService {
//   constructor(
//     @InjectModel(CommandeLine.name)
//     private readonly commandeLineModel: Model<CommandeLineDocument>,
//     @InjectModel(Repas.name)
//     private readonly repasModel: Model<Repas>,
//   ) {}

//   async createCommandeLine(repasId: string): Promise<CommandeLine> {
//     // Check if the dish exists
//     const repas = await this.repasModel.findById(repasId);

//     if (!repas) {
//       throw new NotFoundException(`Repas with ID ${repasId} not found`);
//     }

//     // Find the command line entry for the dish
//     let commandeLine = await this.commandeLineModel.findOne({ repas: repasId });

//     if (!commandeLine) {
//       // If the dish is not in the command line, create a new command line entry
//       commandeLine = new this.commandeLineModel();
//       commandeLine.repas = repas;
//       commandeLine.quantity = 1;
//     } else {
//       // If the dish is already in the command line, increment the quantity
//       commandeLine.quantity += 1;
//     }
//     // Save the command line entry

//      await commandeLine.save();

//     // Return the dish name and quantity
//     return commandeLine
//   }

//   async getAllCommandeLines(): Promise<CommandeLine[]> {
//     return await this.commandeLineModel.find().exec();
//   }

//   async getCommandeLineById(id: string): Promise<CommandeLine> {
//     const commandeLine = await this.commandeLineModel.findById(id);

//     if (!commandeLine) {
//       throw new NotFoundException(`CommandeLine with ID ${id} not found`);
//     }

//     return commandeLine;
//   }
// }
