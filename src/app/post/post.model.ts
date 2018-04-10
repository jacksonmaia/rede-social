export class Post{
    id : number;
    nome : string;
    legenda : string;
    qtdLikes : number;

    constructor(id, nome, legenda, qtdLikes){
        this.id = id;
        this.nome = nome;
        this.legenda = legenda;
        this.qtdLikes = qtdLikes;
    }
}