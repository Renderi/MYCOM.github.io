var RandomLoc = Math.floor(Math.random() * 5);
var location1 = RandomLoc;
var location2 = RandomLoc + 1;
var location3 = RandomLoc + 2;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
    guess = prompt("Кордината выстрела(0-6)");
    if (guess < 0 || guess > 6) {
        alert("Неверное значение")

    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Попадание!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
            }
        } else {
            alert("Промах ;(")
        }
        
    }

};
var stats = "Поздравляю! ты потопил корабль тебе потребовалось попыток: " + guesses + " Аккуратность " + (3/guesses)

alert(stats);