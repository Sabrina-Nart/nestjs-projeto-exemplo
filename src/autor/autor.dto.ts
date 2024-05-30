/* eslint-disable prettier/prettier */
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

function isOptional(): (target: AutorDto, propertyKey: "id") => void {
    throw new Error("Function not implemented.");
}
function IsUUID(): (target: AutorDto, propertyKey: "id") => void {
    throw new Error("Function not implemented.");
}

function IsNotEmpty(): (target: AutorDto, propertyKey: "nome") => void {
    throw new Error("Function not implemented.");
}

function IsDateString(): (target: AutorDto, propertyKey: "dataNascimento") => void {
    throw new Error("Function not implemented.");
}

function isEnum(GeneroEnum: typeof GeneroEnum): (target: AutorDto, propertyKey: "genero") => void {
    throw new Error("Function not implemented.");
}

