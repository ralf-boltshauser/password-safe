import { IsString } from 'class-validator';

export class CreatePasswordDto {
  id: number;
  @IsString()
  readonly email: string;
  @IsString()
  readonly username: string;
  @IsString()
  readonly password: string;
  @IsString()
  readonly websiteUrl: string;
  @IsString()
  readonly notes: string;
}
