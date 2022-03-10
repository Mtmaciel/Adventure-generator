export interface enredo{
    titulo:string;
    descricao:string;
    opcoesEnredo:opcaoEnredo[];
}

export interface opcaoEnredo{
    descricao:string;
    quantidade:number;
    tiposDisponiveis:TipoCarta[];
}

export interface carta{
    titulo:string;
    subTitulo?:string;
    descricao?:string;
    tabela:boolean;
    opcoes:opcaoCarta[];
}

export interface opcaoCarta{
    titulo?:string;
    valor?:number;
    descricao:string;
    nivel?:NivelCampanha;
}

export enum TipoCarta{
    PERSONAGEM,
    AMEACA,
    LOCAL,
    OBJETO,
    EVENTO
}

export enum NivelCampanha{
    INICIANTE,
    VETERANO,
    CAMPEAO,
    LENDA
}