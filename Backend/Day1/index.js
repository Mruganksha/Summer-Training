const fs = require('node:fs');
const { unlink } = require('node:fs/promises');

//writefile : used to create a file
//appendfile : to add something to the file which already exists
//copyfile
//rename
//unlink : to remove file

//fs.writeFile(file, data[, options], callback)
fs.writeFile("hey.txt", "hello hii", function(err){
    if(err){
        console.log(err);
    } else {
        console.log("done");
    }
})

//fs.appendFile(path, data[, options], callback)
fs.appendFile("hey.txt", " I am MRuganksha", function(err){
    if(err){
        console.log(err);
    } else {
        console.log("append done");
    }
})

//fs.rename(oldPath, newPath, callback)
fs.rename("hey.txt", "hello.txt", function(err){
    if(err){
        console.log(err);
    } else{
        console.log("file renamed");
    }
})

//fs.copyFile(src, dest[, mode])
fs.copyFile("hello.txt", "new.txt", function(err){
    if(err){
        console.log(err.message);  
    } else{
        console.log("copiied");  
    }
})

//fs.unlink(path, callback)
fs.unlink("hello.txt", function(err){
    if(err){
        console.log(err.message);  
    } else{
        console.log("removed");  
    }
})

//rmdir is used to remove a blank directory only , if anything is present then u cant remove it
//fs.rmdir(path[, options], callback)
fs.rmdir("./copy", function(err){
    if(err){
        console.log(err.message);  
    } else{
        console.log("removed directory");  
    }
})

//if you want to remove a directory which is not empty then u can either use => fs.rm or {recursive: true}
/*fs.rm("./copy", {recursive: true}, function(err){
    if(err){
        console.log(err.message);  
    } else{
        console.log("removed directory");  
    }
}) */

//to create folder: ?

//to read file : fs.readFile(path[, options], callback)
fs.readFile("Introduction.txt", function(err){
    if(err){
        console.log(err.message);  
    } else{
        console.log("reading");  
    }
})

