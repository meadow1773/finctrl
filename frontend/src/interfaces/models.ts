// AUTO-GENERATED FILE - DO NOT EDIT DIRECTLY
// Gerado automaticamente em: 2026-07-19T23:23:07.491Z
export interface Categoria {
    nome: string;
    nomeTipo: string;
    icone: Icone;
    id?: number | undefined;
    dataCriacao?: Date | undefined;
    dataAlteracao?: Date | undefined;
}

export interface EntidadeGenerica {
    id?: number | undefined;
    dataCriacao?: Date | undefined;
    dataAlteracao?: Date | undefined;
}

export interface Icone {
    id: number;
    dataCriacao: Date;
    dataAlteracao: Date;
    link: string;
    matIcon: boolean;
}

export interface Tipo {
    id: number;
    dataCriacao: Date;
    dataAlteracao: Date;
    nome: string;
    icone: Icone | null;
}

export interface Transacao {
    nomeCategoria: string;
    mes: number;
    ano: number;
    valor: number;
    descricao: string;
    id?: number | undefined;
    dataCriacao?: Date | undefined;
    dataAlteracao?: Date | undefined;
}
