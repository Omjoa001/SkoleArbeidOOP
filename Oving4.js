let tall = 6

let firstPromise = new Promise(function tesTall(resolve,reject) {
if (tall > 10) {
resolve(tall)
} else {
  let grunn =  new Error("Tallet er ikke stor nok")
  reject(error.message)
    }
  }
)
