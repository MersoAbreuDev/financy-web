
export interface IUsuario{
    id:number;
    email:string;
    role:Role;
}

export enum Role {
    ADMIN,
    USER
}
