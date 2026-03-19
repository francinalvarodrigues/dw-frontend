var nota1 = 5;
var nota2 = 7;

var media = (nota1 + nota2) / 2;

console.log('A nota do aluno é:$(media)');

/* As condições são Se o aluno tem  nota maior que 7 ele está aprovado, caso contrário ele está reprovado */

if (média>= 7){
console.log('O aluno está aprovada!')
} else{

console.log('O aluno está reprovado!')
}

/* * As condições são: Se o aluno tem média maior que 7 ele está Aprovado. Se a nota estiver entre 6 e 7, ele está de Recuperação, caso a nota dele seja menor que 6, ele está Reprovado. */

if(media>= 7){
console.log('O aluno está aprovado!')

} else if(media <6){
console.log('O aluno está reprovado!')
} else{
    console.log('O aluno está de recuperação')
}
