// repas.dto.ts

import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateRepasDto {
  @IsNotEmpty()
  @IsString()
  nom: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  prix: number;

  @IsOptional()
  @IsString()
  supplements?: string;

  @IsNotEmpty() // Assuming category ID is required
  @IsString()
  categoryId: string; // New field for category ID
}
