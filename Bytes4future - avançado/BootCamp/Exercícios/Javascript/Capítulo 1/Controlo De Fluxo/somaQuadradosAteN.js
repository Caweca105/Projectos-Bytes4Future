function somaQuadradosAteN(n){
    // escreve aqui a função
   let sum = 0;
   for (let i = 1; i <= n; i++) {
       sum += i ** 2
   }
   return sum
}