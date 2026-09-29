function onclickBtn() {
  debugger;
  let num = Number(document.getElementById("txtinp").value);
  let emty = document.getElementById("txtinp").value;

  const checkPromise = new Promise((resolve, reject) => {
    if (num > 0) {
      resolve("Positive Number")
    } else if (emty != _) {
      reject("NAN");
    } else {
      reject("Not a Positive Number")
    }
  });
  checkPromise
    .then((result) => {
      document.getElementById("valueInput").innerHTML = result;
    })
    .catch((error) => {
      document.getElementById("valueInput").innerHTML = error;
    })
    .finally(() => {
      console.log("Completed")
    });
}
