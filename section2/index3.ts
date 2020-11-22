/**
 * 関数や関数周りに型をつける方法
 */

// ※引数（パラメータ）には型推論は適応されないが、返り値は型推論が適応できる。
function add(num1: number, num2: number): number | string {
    return num1 + num2
}
add(4, 2);


// 
// 関数の戻り値にvoid関数を適応させる(返り値に何も返さない型を定義する)
// returnがあるときはundefined型が使えるが、returnがない時はvoid型を使う。
// 

function sayHello(): void {
    console.log('Hello!');
}

console.log(sayHello());

// 関数を呼び出す変数に型を定義する
const anotherAdd: (n1: number, n2: number) => number | string = add;



// アロー関数        ⬇️引数に対する型 ⬇️返り値の型   ⬇️引数
const doubleNumber: (num: number) => number = num => num * 2;



// callback関数に型を付ける  ⬇️引数numの型   ⬇️numの型  cbの返り値の型⬇️    ⬇️この関数の返り値の型
function doubleAndHnadle(num: number, cb: (num: number) => number): void {
    const doubleNumber = cb(num * 2)
    console.log(doubleNumber);
}
doubleAndHnadle(21, doubleNum => {
    return doubleNum
});



// Unknown型 : any型の少し厳しくしたもの
let unknownInput: unknown;     // unknown型
let anyInput: any;             // any型
let text: string;              // string型
//    ↓
//    ↓ 型の中身を設定
//    ↓
unknownInput = 'Hello';
unknownInput = 21;
unknownInput = true;
//    ↓
//    ↓ any型は他の型指定した変数に使えるが、
//    ↓ unknown型はエラーが出る
//    ↓
text = anyInput
// text = unknownInput
//    ↓
//    ↓ typeofで入れたい変数と同じ型かを確認してから変数に代入する
//    ↓
if (typeof unknownInput === 'string') {
    text = unknownInput;
}



/**
 * never型 : 絶対に何も返さない関数
 */
function error(message: string): never {
    throw new Error(message);
}
console.log(error('This is an error'));
