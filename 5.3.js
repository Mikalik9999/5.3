//5.3.1//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
//let a = prompt('Введите имя');
//let ucFirst =() => {
//    a = a[0].toUpperCase() + a.slice(1);
//    return a;
//}
//ucFirst()
//alert(a)
//5.3.2Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
//let a = prompt('Введите имя');
//let checkSpam =() => {
//    a = ( a.toLowerCase() );
//    if (a.includes('viagra')) {
//        alert('true')
//    } else if (a.includes('xxx')){
//        alert('true')
 //   } else {
//        alert('false')
 //   }
//   return a;
//}
//checkSpam()
//5.3.3//Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и,
//    если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
 //   Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
//let a = prompt('Введите строку');
//let b = prompt('Введите max');
//let truncate =() => {
 //   if (a.length > b) {
//       alert (a.slice(0,+b) + '...' );
//    } else {
//        alert(a)
//    }
//    return a;
//}
//truncate()
//5.3.4.Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//    Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять
//числовое значение и возвращать его.
let a = prompt('Введите строку');
function extractCurrencyValue(str) {
    return a = (+a.slice(1));
}
extractCurrencyValue()
alert(a)