export default class Animal {
    tipo: string;   
    nome: string;
    idade: number;

    constructor(t: string, n: string, i: number) {
        this.tipo = t;
        this.nome = n;
        this.idade = i;
        
    }

    // Erdando um método usando a sintax puclic
    // tipo void não retorna nada

    public comunicar(): void{
        console.log("Olá, sou método da classe mãe")
    }

}

// classe que erda atributos da classe animal

class Cachorro extends Animal{
    raca: string;

    // método super traz os tributos que a classe está erdando.
    constructor(t: string, n: string, i: number, r:string) {
        super(t, n, i);
        this.raca = r;
    }
    public  comunicar(): void {
        console.log("au ua")
    }
}


class Pessoa extends Animal {
    cor: string;

    constructor(t: string, n: string, i: number, c: string) {
        super(t, n, i,)
        this.cor = c;
    }

    public comunicar(): void {
        console.log(`Boa tarde, esse é meu cacchoro ${cachorro1.nome}`)  
    }
}    


// Estanciando nossas clases para imprimir as particularidades.


// Cria uma varival e atriuia nela a classe que recebe os valores 
const cachorro1 = new Cachorro("Cachorro", "tigrão", 3, "poodle");
cachorro1.comunicar();


// imprimindo os valores atribuidos a classe cachorro
// console.log(`Tipo: ${cachorro1.tipo} nome: ${cachorro1.nome} idade: ${cachorro1.idade} raça: ${cachorro1.raca}`)


const pessoa1 = new Pessoa("Humano", "Max Santos", 23, "Preta");
pessoa1.comunicar();

// console.log(`Tipo: ${pessoa1.tipo} nome: ${pessoa1.nome} idade: ${pessoa1.idade} cor: ${pessoa1.cor}`);