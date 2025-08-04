const emojis = ['🐶','🐱','🦁','🐮','🐵','🐸','🐤','🦊'];
let cartas = [...emojis, ...emojis];
cartas = cartas.sort(() => 0.5 - Math.random());

const tabuleiro = document.getElementById('tabuleiro');
let cartaVirada = null;
let bloqueado = false;

cartas.forEach((emoji, index) => {
    const carta = document.createElement('div');
    carta.classList.add('carta');
    carta.dataset.emoji = emoji;
    carta.dataset.index = index;

    carta.addEventListener('click', () => {
        if (bloqueado || carta.classList.contains('virada')) return;

        carta.textContent = emoji;
        carta.classList.add('virada');

        if (!cartaVirada) {
            cartaVirada = carta;
        } else {
            if (
                carta.dataset.emoji === cartaVirada.dataset.emoji &&
                carta.dataset.index !== cartaVirada.dataset.index
            ) {
                cartaVirada = null;
            } else {
                bloqueado = true;
                setTimeout(() => {
                    carta.textContent = '';
                    carta.classList.remove('virada');
                    cartaVirada.textContent = '';
                    cartaVirada.classList.remove('virada');
                    cartaVirada = null;
                    bloqueado = false;
                }, 1000);
            }
        }
    });

    tabuleiro.appendChild(carta);
});

