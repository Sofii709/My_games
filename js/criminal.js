function startGame() {
    let balance = 100500;
    let cameraOn = true;
    let totalStolen = 0;

    function steal(amount) { 
        cameraOn = !cameraOn;
        totalStolen += amount;
        balance -= amount;
        cameraOn = true;
        return amount;
    }

    let amount = steal(20000);
    alert("Criminal: you stole " + amount + ". Remaining balance: " + balance);
    while (balance > 0) {
        let userInput = prompt("Скільки ще ви хочете вкрасти? (Залишилось у банку: " + balance + ")");
        if (userInput === null) {
            break;
        }

        let nextAmount = Number(userInput);

        if (userInput.trim() === "" || isNaN(nextAmount) || nextAmount <= 0) {
            alert("Помилка! Введіть число більше нуля.");
            continue;
        }

        if (nextAmount > balance) {
            alert("У банку немає стільки грошей! Максимально доступно: " + balance);
            continue;
        }

        let stolenNow = steal(nextAmount);
        alert("Criminal: you stole " + stolenNow + ". Remaining balance: " + balance);
    }

    if (balance === 0) {
        alert("Банк повністю пограбовано! Всього вкрадено: " + totalStolen);
    } else {
        alert("Гру завершено. Всього вкрадено: " + totalStolen + ". Залишок у банку: " + balance);
    }

    console.log("Stolen: " + totalStolen);
    console.log("Bank balance: " + balance);
}
