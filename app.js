const fs = require('fs');
const path = require ('path');

const dirname1800 = __dirname + '/1800';
const dirname2000 = __dirname + '/2000';

function Boy() {
    fs.readdir(dirname1800,(err,files) => {
        if(err) {
            console.log(err)
            return;
        }
        files.forEach(value => {
            const fileName = path.join(dirname1800,value);
            fs.readFile(fileName,(err1) => {
                if(err1) {
                    console.log(err1)
                    return;
                }
            })
        })
        fs.readFile(path.join(dirname1800),(err,data) => {
            if (err) {
                console.log(err)
                return
            }
            let json =JSON.parse(data.toString())
            if (json.gender === 'male') {
                fs.rename(path.join(dirname1800),path.join(dirname2000), err1 => {
                    console.log(err1)
                })
            }
        })
    })
}
Boy()

function Girl () {
    fs.readdir(dirname2000, (err,files) => {
        if(err) {
            console.log(err)
            return;
        }
        files.forEach(value => {
            const fileName = path.join(dirname2000,value);
            fs.readFile(fileName,(err1) => {
                if(err1) {
                    console.log(err1)
                    return;
                }
            })
        })
        fs.readFile(path.join(dirname2000), (err,data) => {
            if(err){
                console.log(err)
                return
            }
            let json =JSON.parse(data.toString())
            if(json.gender === 'female') {
                fs.rename(path.join(dirname2000),path.join(dirname1800),err1 => {
                    console.log(err1)
                })
            }
        })
    })
}

Girl()

