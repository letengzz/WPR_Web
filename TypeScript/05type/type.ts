type num = number;
let price: num
price = 100

type Status = number | string
type Gender = '男' | '女'

function printStatus(status: Status) {
    console.log(status);
}
function logGender(str: Gender) {
    console.log(str)
}

printStatus(404);
printStatus('200');
printStatus('501');
logGender('男')
logGender('女')

//面积
type Area = {
    height: number; //⾼
    width: number; //宽
};

//地址
type Address = {
    num: number; //楼号
    cell: number; //单元号
    room: string; //房间号
};

// 定义类型House，且House是Area和Address组成的交叉类型
type House = Area & Address;
const house: House = {
    height: 180,
    width: 75,
    num: 6,
    cell: 3,
    room: '702'
};


function demo(): void {
    // 返回undefined合法
    return undefined
    // 以下返回均不合法
    // return 100
    // return false
    // return null
    // return []
}
demo()

type LogFunc = () => void
const f1: LogFunc = () => {
 return 100; // 允许返回⾮空值
};

const f2: LogFunc = () => 200; // 允许返回⾮空值

const f3: LogFunc = function () {
 return 300; // 允许返回⾮空值
};


const src = [1, 2, 3];
const dst = [0];
src.forEach((el) => dst.push(el));
