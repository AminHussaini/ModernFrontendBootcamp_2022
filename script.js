const promiseObject = fetch('/data.json')


// promiseObject.then(res => {
//   const promiseObject2 = res.json()
//   promiseObject2.then(data => {
//     // console.log(data)
//   })
// })

promiseObject
.then(rest => rest.json())
.then(fin => {
  console.log(fin)
})