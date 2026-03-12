function somar() {
    const soma = n1 + n2;
    const dobroN1 = n1 * 2;
    const metadeN2 = n2 / 2;

    const resultado = document.getElementById('result');
    resultado.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${soma}</strong>.<br>
        O dobro de ${n1} é <strong>${dobroN1}</strong> e a metade de ${n2} é <strong>${metadeN2}</strong>.`;
}