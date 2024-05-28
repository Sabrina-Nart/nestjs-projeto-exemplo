import { GeneroEnum } from "./genero.enum";

export class AutorDto{
    @IsUUID()
    @isOptional()
    id: string;

    @isString()
    @IsNotEmpty()
    nome: string;

    @IsDateString()
    @IsNotEmpty()
    dataNascimento: Date;

    @isEnum(GeneroEnum)
    @isOptional()
    genero:GeneroEnum;
}