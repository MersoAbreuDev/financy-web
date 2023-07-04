export interface IParcela {
    id:number;
    valorParcela:string;
    status:Status
}

export enum Status{
    PAGO,
    ABERTO
}