const area = document.getElementById('area');
let step = 0;
let result = '';
const winnerIs = document.getElementById('modal-content');
const modalWindow = document.getElementById('modal-wrapper');
const overlay = document.getElementById('overlay');
const btnRestart = document.getElementById('btn-restart');

area.addEventListener('click', e => {
    if(e.target.className = 'box') {
        step % 2 == 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
        step += 1;
        check();
    }
})

const check = () => {
    const boxes = document.getElementsByClassName('box');
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < arr.length; i++) {
        if (
            boxes[arr[i][0]].innerHTML == 'X' && boxes[arr[i][1]].innerHTML == 'X' && boxes[arr[i][2]].innerHTML == 'X') {
                result = 'Player 1';
                checkResult(result);
        } else if (
            boxes[arr[i][0]].innerHTML == '0' && boxes[arr[i][1]].innerHTML == '0' && boxes[arr[i][2]].innerHTML == '0') {
                result = 'Player 2';
                checkResult(result);
    /*    } else if () {
            result = 'Friendship';
            checkResult(result);
            } */
    }
}

const checkResult = winner => {
    winnerIs.innerHTML = `Winner is ${winner}!`;
    modalWindow.style.display = 'block';
}

const restart = () => {
    modalWindow.style.display = 'none';
    location.reload();
}

overlay.addEventListener('click', restart);
btnRestart.addEventListener('click', restart);