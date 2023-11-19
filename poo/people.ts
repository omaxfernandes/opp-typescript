// Sintaxe para criar uma classe = classe

export default class People {
    // usando constructor informar atributos da classe pessoa
    constructor(n: string, i: number){
    this.name = n;
    this.age = i;
    }


    // Atributos da classe pessoa
    // name: string;
    // age: number;
}

// // Inserindo o valor dos atributos na primeira pessoa
// const fristPeople = new People();

// // Atributo name recebe o valor Max Santos
// fristPeople.name = "Max Santos";
// // Atributo age recebe o valor 23

// // Passando os valores para os atributos

const fristPeople = new People("Max Santos", 25)

// fristPeople.age = 23;
// Realiza impressão dos valores
console.log(
        `nome: ${fristPeople.name}, Idade: ${fristPeople.age}`
)