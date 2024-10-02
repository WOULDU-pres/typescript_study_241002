function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x:number, y:number): number {
    return x + y;
}

let myAddFunction: (x:number, y:number) => number = function(
    x: number,
    y: number
): number {
    return x+y;
}

type AddFuntionType = (x:number, y:number) => number
let myAddFunction2: AddFuntionType = function(
    x: number,
    y: number
): number {
    return x+y;
}

/* parameter */

function buildName(firstName: string, lastName?: string): string {
    if (lastName){
        return firstName + " " + lastName;
    } else {
        console.log(lastName);
        return firstName;
    }
}

function buildName2(firstName: string, lastName: string = "김"): string {
    return firstName + " " + lastName;
}
let result1 = buildName("minsu");
let result2 = buildName("matfia", "napoli");

/* interface */

// interface란? 
// - type을 정의하는 역할
// - 객체의 구조를 정의하여 타입 안전성을 높임

// 선택적 프로퍼티

interface Person {
    name: string;
    age?: number;
}

let user1: Person = {
    name: "Hong",
    age: 30,
}

let user2: Person = {
    name: "YoungHee",
}

// 읽기 전용 프로퍼티

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {
    x: 10,
    y: 20
}
// p1.x = 5; // 오류 발생: 읽기 전용 속성은 수정 불가

// 함수 타입 인터페이스

interface SearchFunc {
    (source: string, substring: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
};

// 클래스에서 인터페이스 구현

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number){}
}
