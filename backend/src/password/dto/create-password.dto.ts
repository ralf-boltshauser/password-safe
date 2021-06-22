import { IsString } from 'class-validator';

export class CreatePasswordDto {
  @IsString()
  readonly name: string;
}
