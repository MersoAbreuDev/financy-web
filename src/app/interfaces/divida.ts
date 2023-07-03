import { ICredor } from "./credor";
import { IResponsavel } from "./responsavel";

export interface IDivida {
    id:number;
    nome:string;
    dataCompra: Date,
    valor: number,
    parcela: number,
    status: Status,
    idCredor: ICredor,
    idResponsavel: IResponsavel
}

export enum Status{
    PAGO,
    ABERTO
}