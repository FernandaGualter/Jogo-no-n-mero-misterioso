let x = Math.floor(Math.random() * 10) + 1;
alert(`Olá, bem vindo(a) ao jogo! Atenção: a cada ${x} tentativas, o número muda!`);
let numeroMisterioso = Math.floor(Math.random() * 100) + 1;
let tentativa = 1;
let palpite;

while (palpite != numeroMisterioso) {
    palpite = parseInt(prompt('Advinhe o número misterioso entre 1 e 100'));
    if (isNaN(palpite) || palpite < 0 || palpite > 100) {
        alert("Por favor, digite um número válido!");
        continue;
    }
    if (palpite == numeroMisterioso) {

        break;
    } else {
        if (palpite > numeroMisterioso) {
            alert(`O número misterioso está entre 0 e ${palpite}`);
        } else {
            alert(`O número misterioso está entre ${palpite} e 100`);
        }
        tentativa++;
        if (tentativa % x == 0) {
            numeroMisterioso = Math.floor(Math.random() * 100) + 1;
            alert("O número misterioso mudou!");
        }
    }
}

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, o número misterioso foi descoberto na ${tentativa} ${palavraTentativa}.`);