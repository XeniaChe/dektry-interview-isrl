import { IsNotEmpty, Length, IsUrl, IsInt } from 'class-validator';

export class CreateImageDto {
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @Length(10, 35)
  title: string;

  @IsNotEmpty()
  @IsUrl()
  url: string;
}
