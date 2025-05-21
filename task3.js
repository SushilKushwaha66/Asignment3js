
function  download(){
    return new Promise((resolve) => {
        console.log("Downloading data ...");
        setTimeout(()=> {
            const data = "hellow from the internet:";
            resolve(data);
        }, 10000);
    });
}


function save(data){
    return new Promise ( (resolve , rejecet) => {
         console.log(` saving data in to file ${data}`);
         setTimeout(() => {
            const filename = "sushil.text";
            resolve(filename);
         } ,10);
    })
}


function uploading(filename) {
     return new Promise( (resolve , reject) => {
         
   console.log("uploading file");
   setTimeout(() =>{

 const message =` ${filename} uploade succesfully`;
 resolve(message);

   } , 1000);



     })
}

async function processAll() {
  try {
    const data = await download();
    const fileName = await save(data);
    const result = await uploading(fileName);
    console.log(" Done:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}


processAll();
