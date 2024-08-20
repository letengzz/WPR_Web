// function walk(str: string) {
//     if (str === 'up') {
//         console.log("向【上】⾛");
//     } else if (str === 'down') {
//         console.log("向【下】⾛");
//     } else if (str === 'left') {
//         console.log("向【左】⾛");
//     } else if (str === 'right') {
//         console.log("向【右】⾛");
//     } else {
//         console.log("未知⽅向");
//     }
// }
// walk('up')
// walk('down')
// walk('left')
// walk('right')

// // 定义⼀个描述【上下左右】⽅向的枚举Direction
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
// console.log(Direction) // 打印Direction会看到如下内容
// /* 
//  {
//  0:'Up', 
//  1:'Down', 
//  2:'Left', 
//  3:'Right', 
//  Up:0, 
//  Down:1, 
//  Left:2,
//  Right:3
//  } 
// */
// // 反向映射
// console.log(Direction.Up)
// console.log(Direction[0])
// // 此⾏代码报错，枚举中的属性是只读的
// Direction.Up = 'shang'

// enum Direction {
//     Up = 6,
//     Down,
//     Left,
//     Right
// }
// console.log(Direction.Up); // 输出: 6
// console.log(Direction.Down); // 输出: 7


// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right,
// }
// function walk(n: Direction) {
//     if (n === Direction.Up) {
//         console.log("向【上】⾛");
//     } else if (n === Direction.Down) {
//         console.log("向【下】⾛");
//     } else if (n === Direction.Left) {
//         console.log("向【左】⾛");
//     } else if (n === Direction.Right) {
//         console.log("向【右】⾛");
//     } else {
//         console.log("未知⽅向");
//     }
// }
// walk(Direction.Up)
// walk(Direction.Down)

// enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }
// let x = Directions.Up;

const enum Directions {
    Up,
    Down,
    Left,
    Right
}
let x = Directions.Up;
