import { IsString, IsEmail, IsNotEmpty, IsOptional } from 'class-validator'; // Remove IsDate import
import { Date as MongooseDate } from 'mongoose'; // Import Date type from mongoose

export class CreateUserDto {

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  telephone: string; 

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  adresse: string;

  @IsNotEmpty()
  @IsString()
  dateInscription: string;

  @IsNotEmpty()
  @IsString()
  role: string;

  imagePath?: string;

  @IsOptional()
  resetTokenExpires: MongooseDate; // Use MongooseDate type here

  @IsOptional()
  resetToken: string;
}
