function adicionar (a, b){
 return a + b;
}
function subtracao (a, b){
return a - b;
}
function multiplicacao (a, b){
return a * b;
}
function divisao (a, b){
return a / b;
}
function quadradoDoNumero (a){
return multiplicacao(a,a);

 }
function mediaDeTresNumeros (a, b, c){
return (adicionar(a,b,c))/3
}

console.log ("-------------- Teste de Operações / Calculador --------------")

console.log(adicionar(subtracao(10,5), 5));
console.log(multiplicacao(10, 5));
console.log(divisao(10, 5));
console.log(divisao(5, 0));
console.log(quadradoDoNumero(5));
console.log(mediaDeTresNumeros(2,6,6))


