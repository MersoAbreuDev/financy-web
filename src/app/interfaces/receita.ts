export interface IReceita {
    idReceita:number;
    nomeReceita:string;
    tipoReceita:TipoReceita;
    valorReceita:number;
    dataCriacao:Date;
    periodoVigente:string;
    observacao:string;
}

export enum TipoReceita{
    DIARIO,
    SEMANAL,
    MENSAL,
    ANUAL
}












