// 0123456789 expressoes regulares - para fazer alguma coisa (match)
//EX: se eu quero que ele substitua # por r - preciso por a fleg (g)
let umaString = "O rato roueu a roupa do rei de Roma.";

console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[a-z]/g));
console.log(umaString.replace(/r/g, '#'));
console.log(umaString.length);
console.log(umaString.slice(2, 6));
console.log(umaString.slice(-5, umaString.length - 1));
console.log(umaString.slice(32));
console.log(umaString.substring(umaString.length - 5, umaString.length -1));
console.log(umaString.split('r'));
console.log(umaString.split(' ', 3));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
