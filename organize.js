let fs=require("fs");
let path=require("path");
function fn(inp){
 if(!(fs.existsSync(path.join(inp,"organized files")))){
  fs.mkdirSync(path.join(inp,"organized files"));
  let allfiles=fs.readdirSync(inp);
  fs.mkdirSync(path.join(inp,"organized files","media"));
  fs.mkdirSync(path.join(inp,"organized files","archives"));
  fs.mkdirSync(path.join(inp,"organized files","documents"));
  fs.mkdirSync(path.join(inp,"organized files","app"));
  fs.mkdirSync(path.join(inp,"organized files","others"));
  let media=["mp4", "mkv"];
  let q="organized files";
  let archives=['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"];
  let documents=['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'txt','js'];
  let app=['exe', 'dmg', 'pkg', "deb"];
  for(let i=0;i<allfiles.length;i++){
      let str=allfiles[i];
      let arr2=str.split(".");
     let y=fs.lstatSync(path.join(inp,allfiles[i]));
      if (media.includes(arr2[1])){
         fs.copyFileSync(path.join(inp,allfiles[i]),path.join(inp,"organized files","media",allfiles[i]));
      }
      else if(archives.includes(arr2[1])){
        fs.copyFileSync(path.join(inp,allfiles[i]),path.join(inp,"organized files","archives",allfiles[i]));
      }
      else if(documents.includes(arr2[1])){
        fs.copyFileSync(path.join(inp,allfiles[i]),path.join(inp,"organized files","documents",allfiles[i]));
      }
      else if(app.includes(arr2[1])){
        fs.copyFileSync(path.join(inp,allfiles[i]),path.join(inp,"organized files","app",allfiles[i]));
      }
      else if(y.isFile()){
          //console.log!(y.isDirectory());
        fs.copyFileSync(path.join(inp,allfiles[i]),path.join(inp,"organized files","others",allfiles[i]));
      }
     //let type=path.basename(path.join(inp,allfiles[i]));
  }
 }
}
module.exports={
   a:fn
}
//This code is main which contains organize,tree
