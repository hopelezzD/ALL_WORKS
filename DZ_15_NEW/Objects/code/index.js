let str = 'var_text_hello';
let resultString = "";
str.split("_").forEach(element => {
    resultString += element[0].toUpperCase() + element.slice(1);
});
console.log(resultString);

const ggg3 = function () {
    return 3;
}

const ggg4 = function () {
    return 4;
}

const ggg = function (arg1, arg2) {
    return arg1() + arg2();
}

console.log(ggg(ggg3, ggg4));



const wallet = {
    name: "Вася",
    btn: {
        name : "Bitcoin",
        logo : "<img src='https://logo-marque.com/wp-content/uploads/2020/08/Bitcoin-Logo.png'>",
        count :10,
        currency : 100
    },
    eth: {
        name : "Ethereum",
        logo : "<img src='https://cryptologos.cc/logos/ethereum-eth-logo.png'>",
        count :20,
        currency : 1000
    },
    stl: {
        name : "Stellar",
        logo : "<img src='https://cryptologos.cc/logos/stellar-xlm-logo.png'>",
        count :30,
        currency : 10000
    },

    show: function (coin) {
        document.write(`Доброго дня, ${this.name} ! На вашому балансі ${this[coin].logo} ${this[coin].name} залишилося ${this[coin].count} монет, якщо ви сьогодні продасте їх то, отримаєте ${this[coin].count*this[coin].currency} грн.<br><hr>`);
    }
}
wallet.show('eth');
wallet.show("btn");
wallet.show("stl");
