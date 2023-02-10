const fs=require("fs");
function readUFT8File(filePath){
    fs.readFile(filePath, "utf-8", (data,error)=>{
        if(error){
            console.error(error);
            return;
        }
        console.log(data);
    });
}
readUFT8File('demofile.txt');
