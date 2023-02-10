var fs=require('fs');// import the statement we need to import is from node module we did import event bcz it in build.
//fs represent filestream
// it allow to perform any activity with anyfile
var rs=fs.createReadStream('./demofile.txt');
rs.on('open',function(){
    console.log("The file is open");
})