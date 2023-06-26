// //for loop

// let arr=[9,6,1]
// for(var i of arr){
//   if(i%2==0){
//     console.log(i+' its even')
//   }
//   else{
//     console.log(i+' its odd')
//   }
// }
// //array example
// let arr = new Array(1,"value2",[1,2,3])//anything can be stored dynamically
// console.log(arr)
// let arr = new Array(9) // if single arr is diven then it is considered as lenght
// console.log(arr)

// let arr=[1,2,3,4,5,6]
// delete arr[2]
// console.log(arr)

// let arr = new Array(1,"value2",[1,2,3])//anything can be stored dynamically
// console.log(arr)


// let arr = new Array(9) // if single arr is diven then it is considered as lenght
// arr[3]=3
// console.log(arr)

// Foreach function //

// const arr=['a','b','c','d']
// arr.forEach((arr)=>{ //for each is an higher Order fuctiom
//   console.log(arr);
// });


// const mul=(arr,n)=>{
//   a=[]
//   arr.forEach((i)=>{
//     a.push(i*2)
//   })
//   return a
// }
// const res=mul([1,2,3],2);
// console.log(res);


// const mul=(arr,n)=>{
//   a=[]
//   arr.forEach((i)=> //ForEach returns nothing
//     a.push(i*2))
//   return a
// }
// const res=mul([1,2,3],2);
// console.log(res);


// MAP //

// const mul=(arr,n)=>{
//     const a=arr.map((i)=>i*2)// map return new array with modified oiginal
//     return a
    
//   }
//   const res=mul([1,2,3],2);
//   console.log(res);


// const oe=(arr)=>{
//     const a=arr.map((i)=>//{ if remove '{' the it is considered as implecite return 
//        (i%2==0)
//         ?'even'
//         :'odd'
//       )
//       return a
  
    
//   }
//   const res=oe([1,2,3,4,5]);
//   console.log(res);
  
// FILTTER //

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

// spread operator //

// let arr=[2,3,4,5]
// let a=arr
// console.log(...a,...arr)


// ARRAY DESTRUCTURING //

// const arr=[1,2,3,4]
// const [a,b,c]=arr
// console.log(c)

// const ar=[1,2,3,4,5]
// const [_,a,b]=arr//to skip the element depending upon on the position of '_' 
// console.log(b)


// const array=[1,2,3,4,5]
// const [a1,b1,...rest]=array
// console.log(rest)



// OBJECT //

//object in js is ller to python dictionary

// const student={
//   name:'Ram',
//   cls:8,
//   marks:{
//     eng:89,
//     mat:90,
//     sci:98,
//     e:"fdgdfdsf"
//   }
// }
// const sub="sci"
// console.log(student.marks[sub])


// const pm=(obj,sub)=>{
//   return student.name+'\'s mark is '+ student.marks[sub]
// }
// console.log(pm(student,sub))



//  Bool  //


// console.log(1+true)//bool converts to Number when added to int
// console.log('1'+true)//bool converts to str when added to str
// console.log(2*false)

// const person = [{
//   name:" John",
//   age: 25
//     },
//     { name:'Ram',
//   age:8,}
//   ]
   
// // console.log(person)

// const {age,name}=person
// console.log(age)


// const obj = {
//   name:" John",
//   age: 25
//     }
//     console.log(obj?.adderss?.state|| 'IN')

  //const {age,name:n,h=5}=obj
  //console.log(h)
// for(var i in obj){
//   console.log(i+':'+obj[i])
// }


// const person = [{
//   name:" John",
//   age: 25
//     },{ 
//   name:'Ram',
//   age:8,
//     }]

// console.log(person.length)


// const obj=[{
//     name:'Nandha',
//     age:22,
//     height:5
// },{
//     name:'ram',
//     age:25,
//     height:6.1,
// }]
// //obj[0].age=(obj[0].age)+2
// //obj[1].age=(obj[1].age)+2
// for(var i in obj){
//     obj[i].age=obj[i].age+2
// }
// console.log(obj)


// const res=obj.map((user)=>({...user,age:user.age+2}))
// console.log(res)



// const obj={
//   a:1,
//   b:2,
//   c:3,
//   a:4//there are no doublicate so it updates
// }
// console.log(obj)


// Function //
// (function(){
//     setTimeout(()=>console.log(1), 2000);
//     console.log(2);
//     setTimeout(()=>console.log(3),0);
//     console.log(4);
    
//   })()


// HOME WORK //

const user =[{
  id:1,
  name:'ram',
  age:27
  },
  {
  id:2,
  name:'nandha',
  age:56
  }
  ]

  console.log(user);

 // Adding the users using push()  
  const adduser=(adusers)=>{
  user.push(adusers); 

  }
  const adduser1={
      id:3,
      name:'jane',
      age:67
    }
  adduser(adduser1)
  
  // Getting the user obj after adding two new users (to) using adduser function" 
  console.log(user); 
  const getuser=(id)=>{
      for(var i in user){
          if(user[i].id==id){
              return user[i];
          }
      }
  }
        //or
        /*return user.find((i)=>i.id==id*/
  const getuserobj=getuser(3);
  
  // Getting the  user obj by using given id [3] (to) using getuser function

  console.log(getuserobj);
  
  //
  const edituser =(id,name,age)=>{
  for(var i in user){
      if(user[i].id==id){
          user[i].name=name;
          user[i].age=age;
      }
  }
  return user;
  }
  // The user obj is edited when the user  gives id [4] (to) using edituser function
  const editobj=edituser(3,'manddy',44);
  console.log(editobj);
  
  
  const deleteuser =(id)=>{
  for(var i in user){
      if(user[i].id==id){
          user.splice(i,1);
      }
  }
  return user;
  }
  //deleting an obj using deleteuser function using id as the reference
  const del=deleteuser(3);
  console.log(del);


// DAY 2 CLASS NOTES // //  EXTRA NOTES //

// for each loop //

// let arr=[1,2,3];
// arr.forEach((element)=>console.log(2*element));

// // to find odd or even
// const oddeven=(arr)=>{
//  arr=arr.map((element)=>{
//      if(element%2==0){
//          return "even";
//      }
//      else{
//          return "odd";
//      }
//  })
//  return arr;
// }
// // array filter
// console.log("ARRAY FILTER");
// const filtereven=(arr) =>{
//     const newarr=arr.filter((element)=>(element%2==0));
//     return newarr;
// }
// const res1=filtereven([1,2,3,4,5,6,7]);
// console.log(res1);


// Destructuring
// const arr1=[1,2,3,4,5];
// const [_,a3,b3]=arr1;
// console.log(a3);
// console.log(b3)
// console.log(c3)
// const [a1,b1]=arr1;
// console.log(a1);
// console.log(b1);
// const [a2,b2,...rest]=arr1;
// console.log(a2);
// console.log(b2);
// console.log(rest);

// object (same as dictionary in python)
// var person={
//     fn:"jack",
//     ln:"adder"
// }
// person.age=23;
// person["salary"]=50000;
// console.log(person)

// // objects
// const student ={
//     name:"ram",
//     cls: "x",
//     marks: {
//         eng:90,
//         maths:95,
//         sci:75,
//         subject:100
//     }
// }
// const sub="maths"
// console.log(student.marks.sub);
// console.log(student.marks[sub]);

// objects
// const printmarks =(obj,sub)=>{
//     return `${student.name}s` `${sub} mark is ${student.marks[sub]}`;
// }

// console.log(printmarks(student,"sci"));


// const user =[{
//     id:1,
//     name="ram",
//     age=20
// }
// ]
// const adduser = (id,obj){
    
// }
// const newuser =: 
// const obj ={
//     name:'nandha',
//     age:22,
//     height:5
// }
// const{ name, age}=obj
// console.log(age)
// const{age,name,height=5.9}=obj
// const n=name;
// console.log(n);
// console.log(height)


// const obj ={
//         name:'nandha',
//         age:22,
//         height:5
//     }
//     for(var key in obj){ 
//         console.log(key+":"+obj[key]);
//     }
//     console.log(obj.address);
//     const address1 = obj.address || {};
//     console.log(address1.state);
//     const address2 = obj.address || {};
    
//     // to reduce all these efforts from line 36 we have "?."
//     console.log(obj?.address?.state);
//     console.log(obj?.address?.state || 'TN');
//     // if left side value is undefined then it takes right side value
//     const obj123=[{
//         name:'nandha',
//         age:22,
//         height:5
//     },
//     {
//         name:'ram',
//         age:25,
//         height:6.1
//     }
//     ]
//     obj123[0].age=(obj[0].age)+2;
//     obj123[1].age=(obj[1].age)+2;
//     for (var x in obj123) {
//       obj123[x].age=obj123[x].age+2;
//     }
//     console.log(obj123);
//     const newobj=obj123.map((ele)=>{
//      return {
//          ...ele,age:ele.age+2
//      }   
//     })
//     console.log(newobj);
    
// const newobject =obj123.map((ele)=>{
//     const{name,age,height}=ele;
//     return {
//         name:name,
//         age:age+2,
//         height:height
//     }
// })
    
    // no duplicate keys 
    // each duplicate value will be updated to its older one
    // const obj1={
    //     a:1,
    //     b:2,
    //     c:3,
    //     d:4,
    //     a:5
    // }
    // console.log(obj1);
// add user,del user,get user,edit user
// edit user ==>(id,key,val)==>edit
// add another obj in user param=>(id,obj)
// del user==>param(id)==>it should del
// get user==>param(id)==>should get the obj
// const user1 =[{
// id:1,
// name:'ram',
// age:27
// },
// {
// id:2,
// name:'nandha',
// age:56
// }

// ]
// const adduser=(obj){

// }
// const getuser=(id){
//     return//obj id
// }
// const edituser =(id,key,value){

// }
// const deleteuser =(id){

// }


