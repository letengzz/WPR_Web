let count: (a: number, b: number) => number
count = function (x, y) {
    return x + y
}

// 参数x必须是数字，参数y也必须是数字，函数返回值也必须是数字
function demo(x: number, y: number): number {
    return x + y
}
demo(100, 200)
demo(100, '200') //警告：类型“string”的参数不能赋给类型“number”的参数
demo(100, 200, 300) //警告：应有 2 个参数，但获得 3 个
demo(100) //警告：应有 2 个参数，但获得 1 个