const scores = {
    Vasya: 0,
    Petya: 2,
    Kolya: 1
}

scores.Petya += 1;
scores.Kolya += 3;
scores.Vasya += 4;

console.log(scores); // vasya  4, petya  3, kolya  4

const myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
    "random animal": "Банановая акула"
};
console.log(myCrazyObject["some array"][2]["number"]); //console.log(myCrazyObject["some array"][2].number);