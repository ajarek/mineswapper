const grid = document.querySelector('.grid')
let width = 10
let squares = []
let bomb = 20
let draw = []

function drawBomb(k, n) {
    var numbers = new Array(n)
    for (var i = 0; i < n; i++) {
        numbers[i] = i + 1;
    }
    for (var i = 0; i < k; i++) {
        var r = Math.floor(Math.random() * n)
        draw.push(numbers[r]);
        numbers[r] = numbers[n - 1]
        n--
    }
}
drawBomb(bomb, width * width)

const createBoard = () => {

    for (i = 0; i < width * width; i++) {
        const square = document.createElement('div')
        square.setAttribute('id', i)

        for (j = 0; j < draw.length; j++) {
            if (square.id == draw[j]) {
                square.classList.add('bomb')
                square.setAttribute('oncontextmenu', 'event.preventDefault()')
            } else {
                square.classList.add('item')
            }
        }
        square.setAttribute('data-alert', '')

        grid.appendChild(square)

        squares.push(square)
    }
}

createBoard()

const items = document.querySelectorAll('.item').forEach((el, index) => {

    el.addEventListener('click', (e) => {
      
        if (e.target.classList.contains('bomb')) {
            alert('Game over');
            e.target.classList.add('wybuch')
            display()
            setTimeout("window.location.reload()", 3000);
        } else {
            el.classList.add('pudlo')
            data = squares[index].dataset.alert = ''
            if (index <9) {
                if (squares[index - 1].classList.contains('bomb')) data++;
                if (squares[index + 1].classList.contains('bomb')) data++;
                if (squares[index + width - 1].classList.contains('bomb')) data++;
                if (squares[index + width].classList.contains('bomb')) data++;
                if (squares[index + width + 1].classList.contains('bomb')) data++;
            } else if (index > 89) {
                if (squares[index - width].classList.contains('bomb')) data++;
                if (squares[index - width - 1].classList.contains('bomb')) data++;
                if (squares[index - width + 1].classList.contains('bomb')) data++;
                if (squares[index - 1].classList.contains('bomb')) data++;
                if (squares[index + 1].classList.contains('bomb')) data++;
            } else if (index % 10 === 0) {
                if (squares[index - width].classList.contains('bomb')) data++;
                if (squares[index + 1].classList.contains('bomb')) data++;
                if (squares[index - width + 1].classList.contains('bomb')) data++;
                if (squares[index + width].classList.contains('bomb')) data++;
                if (squares[index + width + 1].classList.contains('bomb')) data++;
            } else if (index % 10 === 9) {
                if (squares[index - width].classList.contains('bomb')) data++;
                if (squares[index + width].classList.contains('bomb')) data++;
                if (squares[index + width - 1].classList.contains('bomb')) data++;
                if (squares[index - width - 1].classList.contains('bomb')) data++;
                if (squares[index - 1].classList.contains('bomb')) data++;
            } else {
                if (squares[index - width].classList.contains('bomb')) data++;
                if (squares[index - width - 1].classList.contains('bomb')) data++;
                if (squares[index - width + 1].classList.contains('bomb')) data++;
                if (squares[index - 1].classList.contains('bomb')) data++;
                if (squares[index + 1].classList.contains('bomb')) data++;
                if (squares[index + width - 1].classList.contains('bomb')) data++;
                if (squares[index + width].classList.contains('bomb')) data++;
                if (squares[index + width + 1].classList.contains('bomb')) data++;
            }
            squares[index].innerHTML = data
        }
    })
})

const display = () => {
    document.querySelectorAll('.item').forEach(el => {
        if (el.classList.contains('bomb')) {
            el.classList.add('wybuch')
        }
    })
}

function flags() {
    const portion = document.querySelectorAll('.item')
    portion.forEach(buton => {
        buton.addEventListener('mouseup', MouseRightButton);

        function MouseRightButton(e) {
           
            if (typeof e === 'object' && e.target.classList.contains('bomb')) {
                switch (e.button) {

                    case 2:
                      
                        e.target.classList.add('flag')
                        break;

                }
            }
        }
    })
}
flags()