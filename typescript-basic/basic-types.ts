/* 숫자 */

let demical: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(demical, hex, binary, octal);
console.log(demical, hex, binary, octal);

/* 문자열 */

let color: string = "blue";
color = "red";

//template string
let fullName: string = 'Hong';
let age: number = 30;
let sentence: string = `Hello, Mr.${fullName}. You're Age is ${age}.`

console.log(sentence);

/* boolean */

let isDone: boolean = false;

console.log(isDone);

/* null, undefined */

let u: undefined = undefined;
let n: null = null;

console.log(u);
console.log(n);

/* any */

let notSure: any = 4;
notSure = "이제는 문자열입니다.";
notSure = false;

console.log(notSure);

/* void 타입 */
// 일반적으로 함수에서 반환 값이 없을 때 사용

function warnUser(): void{
    console.log("warning message");
}

/* Array */
let list1: number[] = [1,3,4];
let list2: Array<number> = [1,2,3];

/* tuple */
let x: [string, number];
x = ["hello", 10];

console.log(x[0].substring(1));
console.log(x[0].substr(1));

/* enum */
enum Color {
    Red,
    Green,
    Blue,
}
let c: Color = Color.Green;
console.log(c);

let colorName: string = Color[2];
console.log(colorName);
