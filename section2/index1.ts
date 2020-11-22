/**
 * TypeScriptの型の付け方
 * 　　　※型の上にマウスを持ってくることで、認識しているかを確認することができる。
 */

// boolean  (Y or N)
let hasValue: boolean = true;

// number (浮動小数点もマイナスも扱える)
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;

// string (シングルクォート、シングルクォート、バッククォートを扱える)
let single: string = 'Hello';
let double: string = "Hello";
let back: string = `Hello`;


// 型推論　：　型を指定しない記法（勝手に型予想してくれる。hoverすることで型確認が可能）
let Value = true;

// 型注釈　：　変数名を宣言した後に、「:number」のように型を指定する記法
let value: number = 4;



// オブジェクトに型をつける方法

// 型推論による記法
const person = {
    name: 'Jack',
    age: 24
}

// 型注釈による記法
const Person: {
    name: string;
    age: number;
} = {
    name: 'Jack',
    age: 24
}


// 配列に型をつける
const fruits: string[] = ['Apple', 'Banana', 'Grape']
