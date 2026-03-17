/* laço de repetição */
/* for /  while / do while */

for( i = 0; i < 10; i++){
    console.log(`FOR - O valor de i é: ${i}`);
}

var a = 0;
while(a <= 10) {
    console.log(`WHILE - O valor de a é: ${a}`);
    a++;
}

var y = 0;
do {
    console.log(`DO WHILE - O valor de y é: ${y}`);
    y++;
} while(y <= 10)

    for(z = 0; z <= 10; z++){
        for(j = 0; j <= 10; j++){
            console.log(`Item ${z} - ${j}`);
        }
    }