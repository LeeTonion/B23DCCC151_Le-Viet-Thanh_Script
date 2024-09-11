

let y = 10;
if (y === 10) {
  let y = 20; 
  console.log(y); 
}
console.log(y);
const z = 10;
console.log(z);  
//if (z === 10) {
 // z = 20;
 // console.log(z);} 
var x = 10;
function number(a,b=5)
{   x += 10;
    return a * b
}
console.log(x); 
console.log(number(x));
console.log(number(x,8));
function member(name) {
    name = name || "Thanh";
    return "tôi tên là "+ name;
  }
  console.log(member());
  console.log(member("Lê Việt Thành")); 