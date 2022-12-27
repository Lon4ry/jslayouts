let money = Math.floor(Math.random()*10000000)/100;
let balance = document.getElementById("Balance");
balance.textContent = `Баланс: ${money} RUB`;
let withdraw = document.getElementById("Withdraw");
let inpWithdraw = document.getElementById("inpWithdraw");
let btnWithdraw = document.getElementById("btnWithdraw");
let triesLeft = 5;

let notEnoughMoney = `
        <div class="Withdraw">
        <p>Не удалось снять деньги, недостаточно средств</p>
        <button id="btnNotEnoughMoney">Ввести другую сумму</button>
        </div>
`;

let anotherTry = `
            <form>
                <div class="Withdraw">
                    <label for="inpWithdraw">Введите сумму для снятия:</label>
                    <input type="text" name="" placeholder="Сумма" id="inpWithdraw">
                </div>
                <button type="button" id="btnWithdraw">Снять</button>
            </form>
`;

btnWithdraw.addEventListener("click", function() {
    money -= Number(inpWithdraw.value);
    if (money>=0)
        balance.textContent = `Баланс: ${money} RUB`;
    else {
        withdraw.innerHTML = notEnoughMoney + `<p class="Withdraw">Осталось попыток: ${triesLeft}</p>`;
        let btnNotEnoughMoney = document.getElementById("btnNotEnoughMoney");
        btnNotEnoughMoney.addEventListener("click", function() {
            triesLeft -= 1;
            withdraw.innerHTML = anotherTry;
            balance = document.getElementById("Balance");
            withdraw = document.getElementById("Withdraw");
            inpWithdraw = document.getElementById("inpWithdraw");
            btnWithdraw = document.getElementById("btnWithdraw");
            btnWithdraw.addEventListener("click", function() {
                money -= Number(inpWithdraw.value);
                if (money>=0)
                    balance.textContent = `Баланс: ${money} RUB`;
                else {
                    withdraw.innerHTML = notEnoughMoney + `<p class="Withdraw">Осталось попыток: ${triesLeft}</p>`;
                    let btnNotEnoughMoney = document.getElementById("btnNotEnoughMoney");
                    btnNotEnoughMoney.addEventListener("click", function() {
                        triesLeft -= 1;
                        withdraw.innerHTML = anotherTry;
                        balance = document.getElementById("Balance");
                        withdraw = document.getElementById("Withdraw");
                        inpWithdraw = document.getElementById("inpWithdraw");
                        btnWithdraw = document.getElementById("btnWithdraw");
                        btnWithdraw.addEventListener("click", function() {
                            money -= Number(inpWithdraw.value);
                            if (money>=0)
                                balance.textContent = `Баланс: ${money} RUB`;
                            else {
                                withdraw.innerHTML = notEnoughMoney + `<p class="Withdraw">Осталось попыток: ${triesLeft}</p>`;
                                let btnNotEnoughMoney = document.getElementById("btnNotEnoughMoney");
                                btnNotEnoughMoney.addEventListener("click", function() {
                                    triesLeft -= 1;
                                    withdraw.innerHTML = anotherTry;
                                    balance = document.getElementById("Balance");
                                    withdraw = document.getElementById("Withdraw");
                                    inpWithdraw = document.getElementById("inpWithdraw");
                                    btnWithdraw = document.getElementById("btnWithdraw");
                                    btnWithdraw.addEventListener("click", function() {
                                        money -= Number(inpWithdraw.value);
                                        if (money>=0)
                                            balance.textContent = `Баланс: ${money} RUB`;
                                        else {
                                            withdraw.innerHTML = notEnoughMoney + `<p class="Withdraw">Осталось попыток: ${triesLeft}</p>`;
                                            let btnNotEnoughMoney = document.getElementById("btnNotEnoughMoney");
                                            btnNotEnoughMoney.addEventListener("click", function() {
                                                triesLeft -= 1;
                                                withdraw.innerHTML = anotherTry;
                                                balance = document.getElementById("Balance");
                                                withdraw = document.getElementById("Withdraw");
                                                inpWithdraw = document.getElementById("inpWithdraw");
                                                btnWithdraw = document.getElementById("btnWithdraw");
                                                btnWithdraw.addEventListener("click", function() {
                                                    money -= Number(inpWithdraw.value);
                                                    if (money>=0)
                                                        balance.textContent = `Баланс: ${money} RUB`;
                                                    else {
                                                        withdraw.innerHTML = notEnoughMoney + `<p class="Withdraw">Осталось попыток: ${triesLeft}</p>`;
                                                        let btnNotEnoughMoney = document.getElementById("btnNotEnoughMoney");
                                                        btnNotEnoughMoney.addEventListener("click", function() {
                                                            triesLeft -= 1;
                                                            withdraw.innerHTML = anotherTry;
                                                            balance = document.getElementById("Balance");
                                                            withdraw = document.getElementById("Withdraw");
                                                            inpWithdraw = document.getElementById("inpWithdraw");
                                                            btnWithdraw = document.getElementById("btnWithdraw");
                                                            btnWithdraw.addEventListener("click", function() {
                                                                money -= Number(inpWithdraw.value);
                                                                if (money>=0)
                                                                    balance.textContent = `Баланс: ${money} RUB`;
                                                                else {
                                                                    withdraw.innerHTML = notEnoughMoney + `<p class="Withdraw">Осталось попыток: ${triesLeft}</p>`;
                                                                    let btnNotEnoughMoney = document.getElementById("btnNotEnoughMoney");
                                                                    btnNotEnoughMoney.addEventListener("click", function() {
                                                                        triesLeft -= 1;
                                                                        withdraw.innerHTML = anotherTry;
                                                                        balance = document.getElementById("Balance");
                                                                        withdraw = document.getElementById("Withdraw");
                                                                        inpWithdraw = document.getElementById("inpWithdraw");
                                                                        btnWithdraw = document.getElementById("btnWithdraw");
                                                                    });
                                                                }
                                                            });
                                                        });
                                                    }
                                                });
                                            });
                                        }
                                    });
                                });
                            }
                        });
                    });
                }
            });
        });
    }
});