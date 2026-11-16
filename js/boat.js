function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
    let maxShots = 15;
    let shotsLeft = maxShots;
    let hits = 0;

    let shipSize = rand(1, 4);
    let direction = rand(0, 1);

    let startRow = rand(1, 10);
    let startCol = rand(1, 10);

    if (direction == 0 && (startCol + shipSize) > 11) {
        startCol = 11 - shipSize;
    }
    if (direction == 1 && (startRow + shipSize) > 11) {
        startRow = 11 - shipSize;
    }

    let s1Row = startRow, s1Col = startCol;
    let s2Row = -1, s2Col = -1; 
    let s3Row = -1, s3Col = -1;
    let s4Row = -1, s4Col = -1;

    if (shipSize >= 2) {
        if (direction == 0) {
            s2Row = startRow; s2Col = startCol + 1; 
        }
        if (direction == 1) { 
            s2Row = startRow + 1; s2Col = startCol; 
        }
    }
    if (shipSize >= 3) {
        if (direction == 0) {
            s3Row = startRow; s3Col = startCol + 2;
        }
        if (direction == 1) {
            s3Row = startRow + 2; s3Col = startCol; 
        }
    }
    if (shipSize == 4) {
        if (direction == 0) {
            s4Row = startRow; s4Col = startCol + 3; 
        }
        if (direction == 1) {
            s4Row = startRow + 3; s4Col = startCol; 
        }
    }

    let s1Hit = false;
    let s2Hit = false;
    let s3Hit = false;
    let s4Hit = false;

    console.log("x " + startRow + "y " + startCol);

    while (shotsLeft > 0 && hits < shipSize) {
        let rowInput = prompt("Залишилось спроб: " + shotsLeft + " Влучено палуб: " + hits + " з " + shipSize + " Введіть x:");
        let colInput = prompt("Введіть y:");

        if (rowInput == null || colInput == null) {
            alert("Гру скасовано!");
            break;
        }

        let row = parseInt(rowInput);
        let col = parseInt(colInput);

        if (isNaN(row) || isNaN(col)) {
            alert("Помилка! Вводьте тільки числа.");
            continue; 
        }

        if (row < 1 || row > 10 || col < 1 || col > 10) {
            alert("Помилка. Координати мають бути від 1 до 10.");
            continue;
        }

        let isCurrentHit = false;

        if (row == s1Row && col == s1Col) {
            if (s1Hit == true) {
                alert("Ви вже влучали в цю палубу. Спроба не зараховується.");
                continue;
            }
            s1Hit = true;
            isCurrentHit = true;
        }
        else if (row == s2Row && col == s2Col && shipSize >= 2) {
            if (s2Hit == true) {
                alert("Ви вже влучали в цю палубу. Спроба не зараховується.");
                continue;
            }
            s2Hit = true;
            isCurrentHit = true;
        }
        else if (row == s3Row && col == s3Col && shipSize >= 3) {
            if (s3Hit == true) {
                alert("Ви вже влучали в цю палубу. Спроба не зараховується");
                continue;
            }
            s3Hit = true;
            isCurrentHit = true;
        }
        else if (row == s4Row && col == s4Col && shipSize == 4) {
            if (s4Hit == true) {
                alert("Ви вже влучали в цю палубу. Спроба не зараховується");
                continue;
            }
            s4Hit = true;
            isCurrentHit = true;
        }

        shotsLeft = shotsLeft - 1;

        if (isCurrentHit == true) {
            hits = hits + 1;
            alert("Попали");
        } else {
            alert("Повз");
        }
    }

    if (hits == shipSize) {
        alert("Ви повністю знищили корабель");
    } else if (shotsLeft == 0) {
        alert("У вас закінчилися спроби. Ви програли. Корабель починався на рядку " + startRow + ", стовпчику " + startCol);
    }
}
