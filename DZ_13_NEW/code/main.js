// 1 треугольник
document.write(`# 1. Треугольник <br> <br> `);

for (let i = 0; i < 10; i++) {
    for (let x = i; x < 10; x++) {
        document.write("&nbsp;");
    }
    for (let y = i; y >= 0; y--) {
        document.write("*");
    }
    document.write("<br>");
}
document.write("<br>");
document.write("<br>");

//  2 Ромб
document.write(`# 2. Ромб <br> <br> `);

for (let i = 0; i < 10; i++) {
    for (let x = i; x < 10; x++) {
        document.write("&nbsp;");
    }
    for (let y = i; y >= 0; y--) {
        document.write("*");
    }
    document.write("<br>");
}
for (let i = 0; i < 9; i++) {
    for(let y=7-i;y<9;y++){
        document.write("&nbsp;");
    }
    for(let x=i;x<9;x++){
        document.write("*");
    }
    document.write("<br>")
}




// 3 Порожній прямокутник
document.write(`# 3. Порожній прямокутник <br> <br> `);
for (let i = 0; i < 20; i++) {

    for (let y = 0; y < 20; y++) {
        if (i > 0 && y > 0 && i < 19 && y < 19) {
            document.write("&nbsp;&nbsp;");
        }
        else {
            document.write("*");
        }
    }
    document.write("<br>");
}

const func= function (callback){
    let name = "tutty";
    callback(name);
}

func(n=>{
    console.log("Hello " +n);
})