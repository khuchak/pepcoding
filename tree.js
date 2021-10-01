let fs=require("fs");
let path=require("path");
//let space="  ";
function vie(inp){
  let arr=fs.readdirSync(inp);
   for(let i=0;i<arr.length;i++){
      let checker=fs.lstatSync(path.join(inp,arr[i]));
      if(checker.isFile()){
          console.log(arr[i]);
      }
     /*  else{
          console.log(space,arr[i]);
          space+=" ";
         vie(path.join(inp,arr[i]));
         
      } */
  } 
}
module.exports={
    b:vie
}
//Do it efficiently
