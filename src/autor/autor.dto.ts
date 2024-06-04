/* eslint-disable prettier/prettier */
import {
      IsDateString,
      IsEnum,
      IsNotEmpty,
      IsOptional,
      IsString,
      IsUUID,
} from 'class-validator';

import { GeneroEnum } from './genero.enum';
    
export class AutorDto {
      @IsUUID()
      @IsOptional()
      id: string;
    
      @IsString({ message: 'O campo nome deve ser do tipo texto' }) //PERSONALIZAÇÃO
      @IsNotEmpty({ message: 'O nome não pode ser vazio' })
      nome: string;
    
      @IsDateString() //ESPECIFICAR AS MENSAGENS
      @IsOptional()
      dataNascimento: Date;
    
      @IsEnum(GeneroEnum, { message: 'O genêrno deve ser apenas M, F ou I.' })
      @IsOptional()
      genero: GeneroEnum;
}