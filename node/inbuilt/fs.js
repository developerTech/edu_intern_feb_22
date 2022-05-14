let fs = require('fs');

// fs.writeFile('myfile.txt','We are working for nodejs',()=>{
//     console.log('Task done')
// })

// fs.appendFile('myCode.txt',`${Math.floor(Math.random()*1000)}> We are working for nodejs \n`,()=>{
//     console.log('Task done')
// })

// fs.readFile('db.json','utf-8',(err,data)=>{
//     if(err) throw err
//     console.log(data)
// })

// fs.rename('myCode.txt','myText.txt',(err) => {
//     if(err) throw err
//     console.log('File Renamed')
// })

fs.unlink('myText.txt',(err) => {
    if(err) throw err
    console.log('File Deleted')
})