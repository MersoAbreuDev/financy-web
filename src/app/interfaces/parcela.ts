export interface IParcela {
    id:number;
    valorParcela:string;
    codigoParcela:number;
    dataVencimento:string;
    status:Status
}

export enum Status{
    PAGO,
    ABERTO
}