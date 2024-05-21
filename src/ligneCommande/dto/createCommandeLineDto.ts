import { IsNotEmpty } from 'class-validator';

export class CreateCommandeLineDto {
  @IsNotEmpty()
  repasId: string;

  
}
