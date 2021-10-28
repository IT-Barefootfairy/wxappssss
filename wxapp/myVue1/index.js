// let fs = require('fs')

// function readFile(pathname) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(pathname, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err)
//                 return
//             }
//             resolve(data)
//         })
//     })
// }

// let pro = readFile('./index2.txt')

// pro.then((data) => {
//     console.log('成功' + data);
// }).catch((err) => {
//     console.log(err, '+++++++++++++++++++++++++++++++++');
// })

// let p1 = new Promise((resolve, reject) => {
//     resolve(100)
// })

// p1.then(res => new Promise((resolve, reject) => {
//         reject(2)
//     }))
//     .then(() => {}, (err) => {
//         console.log(err, 'err');
//     })

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1000)
    }, 0)
})

p1.then((res) => {
    console.log(res);
})