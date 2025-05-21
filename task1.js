
function download(callback) {
  console.log(" Downloading data...");
  setTimeout(() => {
    const data = "Hello from the internet!";
    callback(data);
  }, 1000);
}

function save(data, callback) {
  console.log(" Saving data to file...");
  setTimeout(() => {
    const fileName = "myfile.txt";
    callback(fileName);
  }, 1000);
} 


function upload(fileName, callback) {
  console.log(" Uploading file...");
  setTimeout(() => {
    const message = fileName + " uploaded successfully!";
    callback(message);
  }, 1000);
}


download(function (data) {

  save(data, function (file) {

    upload(file, function (result) {

      console.log(" Done:", result);
    });
  });
});
