/**
 * Tuple型、列挙型などについての説明
 */

// 
//  Tuple型 : 配列の型指定において下記のように指定することで0番目はstring、
// 　　　　　　2番目はnumberのように条件厳しめで型指定することができる。(pushで追加することは可)
const book: [string, number, boolean] = ['business', 1500, false];



// 
// 列挙型 : 下記のようにenumを用いたオブジェクトを作成することにより、オブジェクト内の特定の
//         stringしか扱うことができなくなる。
enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
}
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.SHORT   // 更新する時も"object.key"のように指定する必要がある。


// 
// any型 : どんな型でも適応することができる。TS内のJSみたいな存在。
// 
let anything: any = true;
anything = 'Hello';
anything = ['Hello', 44, true]
anything = {};
anything.aiueo = "aiueo"

// 型指定されている変数であっても、any型の変数であれば割り込むことができる。(結論：any型は無敵)
let banana: string = 'banana';
banana = anything.aiueo


// 
// Union型 : 単体の変数などにおいて複数の型を扱うことができる。   →   : number | string
// 
let unionType: number | string = 10;
unionType = 'Hello'

// 配列内の型をごちゃ混ぜにして使うことも可能   →   :(number | string | boolean)[]
let unionTypes: (number | string | boolean)[] = [21, 'Hello', true]



// 
// Literal型 : 特定の決まった値のみを取り扱う
//  ※TypeScriptの場合は「const」で宣言するとliteral型、「let」で宣言するとstring型になる。
const apple: 'apple' = 'apple';
const profit: 500 = 500;


// Union型とLiteral型を組み合わせることにより、列挙型(enum型)の
// ような役割を果たすことができる。
// ①変数に使う方法
let clothSize: 'small' | 'medium' | 'large' = 'large'
// ②オブジェクトに使う方法
const cloth: {
    color: string;
    size: 'small' | 'medium' | 'large'
} = {
    color: 'white',
    size: 'medium'
}



// 
// typeエイリアス : 長い型などにおいて型を別名で管理する手法
// 
type foodSize = 'small' | 'medium' | 'large'
const food: {
    price: number;
    size: foodSize          // 作成したtypeを繰り返し使用することができる
} = {
    price: 5000,
    size: 'medium'
}
