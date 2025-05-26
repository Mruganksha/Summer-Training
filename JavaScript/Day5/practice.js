//higher order function
function greet(name){
    return `Hello, ${name}`
}

function UserInput(callback){
    const name = "mruganksha"
    console.log(callback(name))
}

UserInput(greet)

//callback function
function fetchData(callback){
    setTimeout(() => {
        callback("Data Loaded")
    }, 1000)
}

fetchData((message) => {
    console.log(message); 
  });

//callback
function getUser(callback) {
    setTimeout(() => {
      callback({ id: 1, name: "mru" });
    }, 1000);
}
  
getUser((user) => {
    console.log("Callback:", user);
});

//async with promise
function getUser() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: 1, name: "mru" });
      }, 1000);
    });
}
  
async function showUser() {
    const user = await getUser();
    console.log("Async:", user);
}
  
showUser();
  
  