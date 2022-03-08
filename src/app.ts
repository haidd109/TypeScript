export{};

const a: number = 30;
const b: number = 30;

//Khai bao
// type User = {
//    id: number;
//    name: string
// }
interface User{
    id: number, //required
    name: string, //required
    status?: boolean //required optional chaining (dấu ?) 
}

const nyName: string ="Dinh Duc Hai";
const myAge: number | string = 20; //Kieu union
const status: boolean = true;
const myObj: User = {id: 1, name: "Hai"};

const numberArr: number[] = [1,2,3,3];
const stringArr: string[] = ["a","b","c"];
const objectArr: User[] = [{id: 1, name: "A"}, {id: 2, name: "B"}];

function sum(numA: number, numB:number):number{
    return numA + numB;
}
sum(a,b)

/** 
 * tsc --init
 * target: "es2018"
 * baseUrl: "./src"
 * outDir: "./dist"
 * sourceMap: true
*/