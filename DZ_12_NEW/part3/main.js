var x = 6, y = 14, z = 4;
document.write("x = 6, y = 14, z = 4 <br>");
// x += y - x++ * z; -4
// z = --x - y * 5;
// y / = x + 5 % z;
// z - x + + + y * 5;
// x = y - x++ * z;
console.log(x += y - x++ * z); // 6+=14-6++*4    6*4  14-24  6+(-10)= -4 (ответ)
document.write("x += y - x++ * z    ответ -4 <br>");

x = 6, y = 14, z = 4;
console.log(z= --x - y * 5); //  Z=--6-14*5     --6=5  14*5=70   5-70=-65   z =-65 (ответ)
document.write("z = --x - y * 5    ответ z =-65 <br>");
x = 6, y = 14, z = 4;
console.log(y /= x + 5 % z); // 14/=6+5%4  5%4=1 6+1=7 14/7= 2   (ответ)
document.write("y /= x + 5 % z    ответ 2 <br>");
x = 6, y = 14, z = 4;
console.log( z - x + + + y * 5); // 4-6++ +14*5  14*5=70  4-6=-2  -2+70= 68 (ответ)
document.write("z - x + + + y * 5    ответ 68 <br>");
x = 6, y = 14, z = 4;
console.log( x = y - x++ * z); // x= 14-6++ *4  6*4=24 14-24= -10  (ответ)
document.write("x = y - x++ * z       ответ -10 <br>");