
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);



const contaCorrenteRicardo = new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const conta2 = new ContaCorrente(102, cliente2);
const conata2 = new ContaCorrente(102, cliente2);
const cosnta2 = new ContaCorrente(102, cliente2);
const cofnta2 = new ContaCorrente(102, cliente2);
const cognta2 = new ContaCorrente(102, cliente2);
const cohnta2 = new ContaCorrente(102, cliente2);
const cojnta2 = new ContaCorrente(102, cliente2);
const conkta2 = new ContaCorrente(102, cliente2);
const contla2 = new ContaCorrente(102, cliente2);
const coçnta2 = new ContaCorrente(102, cliente2);
const consta2 = new ContaCorrente(102, cliente2);
const contdda2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteRicardo.tranferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);
