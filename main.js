let helpObj=require("./web-dev/help");
let organizeObj=require("./web-dev/organize");
let treeObj=require("./web-dev/tree");
let arr=process.argv.slice(2);
let inputPath=arr[1];
if(arr[0]=="organize"){
  organizeObj.a(inputPath);
}
else if(arr[0]=="tree"){
  treeObj.b(inputPath);
}
//Dsa
