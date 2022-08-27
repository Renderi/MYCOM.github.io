var ScorePoints = 0;
var GameLevels = 1
var PointsToLevelUp = 10;
var PointsPerClick = 1;

function informationAboutGame() {
    alert("Это первая игра которую я делал не по учебнику либо по гайду, А самостоятельно. Я не знаю PhP(язык для серверной части), поэтому вы получили что получили(Северная часть нужна чтобы обновлялось всё в RealTime)" + " \nЧтобы считать что игра Пройдена Дойдите до 100 лвла! " + "\n Игра правда очень простая(на один лвл по 10 кликов)" + " \n ну в любом случае я старался(и не стоит забывать что это моя первая игра!)")
}

function BuffClicks() {
PointsPerClick * GameLevels
return(PointsPerClick)
};

function HtmlAddPoints() {
    BuffClicks
    ScorePoints += 1 * GameLevels
    document.getElementById("PointsHtml").innerHTML=ScorePoints
};

function AddLevel() {   
 if (PointsToLevelUp > ScorePoints) {
    let Count1 = +PointsToLevelUp - +ScorePoints
    console.log(Count1)
    alert("Недостаточно Поинтов!" + " " + "\nДля LvLUp нужно" + " " + PointsToLevelUp); //+ " ( тебе не хватает поинтов " + " " + Count1 + ")");
 } else {
    ScorePoints = ScorePoints - PointsToLevelUp;
    ++GameLevels;
    PointsToLevelUp = 10 * GameLevels;
    return(PointsToLevelUp)
 }
};

function informationStats() {
    alert("Текущий LvL: " + GameLevels + "\nСколько Поинтов: " + ScorePoints + "\nПоинтов за клик: " + PointsPerClick + "\nСтоймость Уровня: " + PointsToLevelUp);
};
if (GameLevels == 100) {
    alert("Поздравляю ты прошёл игру! " + "Игра была перезапущена!")
    GameLevels = 1
    ScorePoints = 1
}