
//Task 1
/*
    გვაქვს factory ობიექტი , რომელსაც აქვს რამდენიმე key-value წყვილი , 
    ასევე მეთოდი calculateWorkload - აბრუნებს მხოლოდ თანამშრომლის შესრულებული სამუშაოების მასივს (მაგალითის მიხედვით [40,25,28,30,31])
    და formatArray - რომელსაც გადაეცემა თანამშრომლის სახელი და აბრუნებს  ობიექტს თანამშრომლის სახელი  და ხელშეკრულების ამოწურვამდე
    დარჩენილი დროის მნშვნელობებით. ხელშეკრულების პერიოდი ყველა თანამშრომლისთვის არის 5 წელი. 
    მაგალითად ('John' ის შემთხვევაში დაგვიბრუნდება {name : "John", timeLeft : 4}) timeleft = 5 - timespent;
    გვაქვს 
    დალოგეთ calculateWorkload და formatArray შედეგები; 
    !!!აუცილებლად გამოიყენეთ bind მეთოდი
*/
let factory = {
    facName : 'Volkswagen Wolfsburg Plant',
    calculateWorkload : function (){
        const weeklyWorkData = this.employeeWeeklyWorkload;
        const resultArr = [];
        const nonValid = [];
        if(weeklyWorkData){
            for(let emp of weeklyWorkData){
                // emp.workload ? resultArr.push(emp.workload) : nonValid.push(emp)
                resultArr.push(emp.timeSpent || emp.workload)
            }
        }
        return resultArr;
    },
    formatArray : function (name) {
        const empData = this.employees;
        if(empData){
            for(let emp of empData){
                if(name === emp.name){
                    return {name : emp.name, timeleft : 5 - emp.timeSpent}

                }
            }
        }
        return 'employee not found'
    }
    
}



let factoryEmployees = {
    employees : [{name : "John", timeSpent : 1 } , {name : "Sam", timeSpent : 3 },{name : "Maria", timeSpent : 2 },{name : "Dan", timeSpent : 4 },{name : "Lorelai", timeSpent : 5 }],
    // employeeNum : this.employees.length,
}

let workloadData = {
    employeeWeeklyWorkload : [{name : "John", workload : 40 } , {name : "Sam", timeSpent : 25 },{name : "Maria", timeSpent : 28 },{name : "Dan", timeSpent : 30 },{name : "Lorelai", timeSpent : 31 }]
}


const testWork = factory.calculateWorkload.bind(workloadData)();
// console.log(testWork)

const empWork = factory.formatArray.bind(factoryEmployees,'John')();
// console.log(empWork)


// --------------------------------------------------------------------------------------------------------------------------------
//Task 2 - სწორია

/*
დაწერეთ ფუნქცია sumOfNumbers , რომელიც დააბრუნებს გადაცემული არგუმენტების ჯამს
აღნიშნული ფუნქცია გაუშვით applyს საშუალებით, შესაბამისად არგუმენტებიც applyს მეშვეობით უნდა გადაცეთ.

hint :  თუ კი ფუნქციაში არ გვაქვს this ქივორდის საჭიროება და შესაბამისად ობიექტი რომელსაც
thisმა უნდა მიუთითოს შეგიძლიათ apply call-ს პირველი არგუმენტად გადასცეთ null 
*/

function sumOfNumbers(x, y){
    return x + y
}

let number = [21,17]
let sum1 = sumOfNumbers.apply(null,number)
// console.log(sum1)


// --------------------------------------------------------------------------------------------------------------------------------
//Task 3
/*
დაწერეთ რეკურსიული ფუნქცია checkIfEven(n) . აბრუნებს გადაცემული მნიშვნელობა
არის თუ არა ლუწი . აუცილებლად გამოიყენეთ რეკურსია
*/

function checkIfEven(n){
    if(n === 0) return 'odd';
    if(n === 0) return 'even';
    else return checkIfEven(n-2)
}

// console.log(9)

// --------------------------------------------------------------------------------------------------------------------------------

//Task 4 
//გვაქვს ორი მასივი
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
//დაწერეთ ფუნქცია რომელიც გადაცემული მასივის ელემენტების მიხედვით დააბრუნებს შემდეგ ტექსტს : 
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// უნდა გამოვიყენოთ რიგითი რიცხვები წინადადების შესადგენად 1 - first - 1st , 2 - second - 2nd ...

let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

function CheckChoice(color){
    let textArr = [];
    for(i = 1 ; 1 <= color.length; i++){
        let txt = '';
        if( i % 10 === 1 && i % 100 !== 11){
            txt = `${i}st choice is ${color[i - 1]}`
        } else if (i % 10 === 2){
            txt = `${i}nd choice is ${color[i - 1]}`
        } else if (i % 10 === 3){
            txt = `${i}rd choice is ${color[i - 1]}`
        } else {
            txt = `${i}th choice is ${color[i - 1]}`
        }
        textArr.push(txt)
    }
    return textArr
}

// console.log(CheckChoice(color))

// --------------------------------------------------------------------------------------------------------------------------------
//Task 5
/**
 * დაწერეთ ფუნქცია რომელიც მასივიდან წაშლის falsy values მქონდე ელემენტებს 'null', '0', '""', 'false', 'undefined' and 'NaN' .
 * arr = [NaN, 0, 15, false, -22, '',undefined, 47, null]
 * ფუნქციამ უნდა დააბრუნოს [15,-22,57]
 */

let arr = [NaN, 0, 15, false, -22, '',undefined, 47, null];

let cleared = arr.filter((el) => el)

// console.log(cleared)

// --------------------------------------------------------------------------------------------------------------------------------
//Task 6 
/**
 * დაწერეთ ფუნქცია რომელიც ორ მასივს აერთიანებს და დუბლირებულ მნიშვნელობებს შლის 
 * function mergeArr(arr1,arr2) 
 * arr1 = [1,2,3]
 * arr2 = [2,1,30]
 * დაბრუნებული მნიშვენლობა უნდა იყოს [1,2,3,30]
 */



function merge(arr1, arr2){
    arrRes = [...arr1]
    for(let i = 0; i < arr2.length; i++){
        if(!arrRes.includes(arr2[i])){
            arrRes.push(arr2[i])
        }
    }
    return arrRes
    
}
// console.log(merge([1,2,3],[2,1,30]))


// --------------------------------------------------------------------------------------------------------------------------------
//Task 7
/**
 * გვავქს ორი ინდივიდუალური ელემენტების/სიგრძის მასივი , დაწერეთ ფუნქცია რომელიც დააბრუნებს ახალ მასივის
 * რომლის თითოეული ელემენტი იქნება შესაბამის ინდექსებზე მდგომი ელემენტების ჯამი
 * მაგ : 
 * [1,10,12,13] [4,5] -> [5,15,12,13]
 *                       [1+4,10+5,12,13]
 * 
 */

function sumOfNums(arr1,arr2){
    let longerArr = arr1.length >= arr2.length ? arr1 : arr2;
    let shortArr = arr1.length <= arr2.length ? arr1 : arr2;
    return longerArr.map((el,index) => {
        if(index < shortArr.length){
            return el + shortArr[index]
        } else return el
    })
}

// console.log(sumOfNums([1,10,12,13],[4,5]))