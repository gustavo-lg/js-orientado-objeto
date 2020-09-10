import { ContaCorrente } from "./ContaCorrente.js";
import { Cliente } from "./Cliente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";


const cliente1 = new Cliente("Gustavo", 10544245809);

const conta1 = new ContaCorrente(1, cliente1); 

const poupanca = new ContaPoupanca(100, cliente1, 1);

//novaconta

const cliente2 = new Cliente("Ana", 10147745809);

const conta2 = new ContaCorrente(2, cliente2); 


console.log(conta1);

console.log(poupanca);



console.log(ContaCorrente.totalContas);
