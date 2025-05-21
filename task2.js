
function download() {
  return new Promise((resolve) => {
    console.log("Step 1: Downloading data...");
    setTimeout(() => {
      const data = "Hello from the internet!";
      resolve(data);
    }, 1000);
  });
}


function save(data) {
  return new Promise((resolve) => {
    console.log("Step 2: Saving data to file...");
    setTimeout(() => {
      const fileName = "myfile.txt";
      resolve(fileName);
    }, 1000);
  });
}

function upload(fileName) {
  return new Promise((resolve) => {
    console.log("Step 3: Uploading file...");
    setTimeout(() => {
      const message = `${fileName} uploaded successfully!`;
      resolve(message);
    }, 1000);
  });
}

download()
  .then((data) => save(data)) 
  .then((fileName) => upload(fileName))
  .then((result) => {
    console.log(" Done:", result);
  });
