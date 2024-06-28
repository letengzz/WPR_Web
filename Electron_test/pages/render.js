const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3')
const content = document.getElementById('content');
// btn1.onclick = ()=>{
//     alert('点我了')
// }
btn1.addEventListener('click', () => {
    console.log(myAPI.version)
    document.body.innerHTML += `<h2>${myAPI.version}</h2>`
})


btn2.addEventListener('click', () => {
    console.log(content.value)
    myAPI.saveFile(content.value)
})



btn3.addEventListener('click', async () => {
    let data = await myAPI.readFile('D:/hello.txt')
    document.body.innerHTML += `<h2>${data}</h2>`
})