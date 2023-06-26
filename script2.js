// const myPromise=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     const condition=true
//     if(condition){
//       resolve("Success")
//     }else{
//       reject("Error:Some thing went wrong")
//     }
//   },2000)
// })

// console.log('START')
// myPromise.then((result)=>{ // call back function for resolve
//   console.log(result);
// }).catch((error)=>{//// call back function for reject
//   console.log(error)
// })
// console.log('ENd')


// PROMISE //

// const promiseA = new Promise((resolve, reject) => {
//     resolve(777);
//   });
//   // At this point, "promiseA" is already settled.
//   promiseA.then((val) => console.log("asynchronous logging has val:", val));
//   console.log("immediate logging");
  
  // produces output in this order:
  // immediate logging
  // asynchronous logging has val: 777

  
// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//           .then ((responce)=>responce.json())
//           //.then ((responce)=>{return responce.json()})
//           /*.then ((responce)=>{{
//             resolve(responce.json()
//         })*/
//           .then((json)=>resolve(json))
//           .catch((err)=>reject(err))
//     });
    
// }

// fetchData()
// .then(data=>console.log(data))
// .catch(error=>console.log(error))


// ASYN/AWAIT  //  

// async function fetchData(){
//     try{
//         const responce=await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         const json=await responce.json()
//         return json
//         }catch(err){
//             console.error(err)
//         }
// }


// fetchData().then(res=>console.log(res))


// sorting the obj using age //

// let a = [
//     {
//         firstName: 'John',
//         lastName: 'Doe',
//         age: 27,
//         joinedDate: 'December 15, 2017'
//     },

//     {
//         firstName: 'Ana',
//         lastName: 'Rosy',
//         age: 25,
//         joinedDate: 'January 15, 2019'
//     },

//     {
//         firstName: 'Zion',
//         lastName: 'Albert',
//         age: 30,
//         joinedDate: 'February 15, 2011'
//     }
// ];

// a.sort((a, b) => {
//     return a.age - b.age;
// });

// a.forEach((e) => {
//     console.log(`${e.firstName} ${e.lastName} ${e.age}`);
// });



async function fetchData(){
    try{
        const responce=await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const json=await responce.json()
        
        return json;
        }catch(err){
            console.log(err)
        }
}
// fetchData().then(res=>console.log(res))
function fetchDataevent(){
    const answer=document.getElementById('hii');
    fetchData().then(data=>{
      // console.log(data);
        var table='<table border=1>';
        var col='';
        for(var i in data){
            col+=`<td> ${data[i]}</td> `;
        }
        table+=`</tr> ${col}</tr>`;
        table+=`</table>`;
        answer.innerHTML=table;
    });
}
