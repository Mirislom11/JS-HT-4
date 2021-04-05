// На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
// каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]   (через метод map)


// let arr = [1,2,3,5,8,9,10];

// let arrAy = arr.map((item, index) => {
//     console.log("Digit =" + item );
//     if(index%2==0){
//         console.log("odd:" + true);
//     }else{
//         console.log("odd:" + false);
//     }
// })

// ******************************************************************


// Вам даеться массив пользователей и вам нужно   сумировать возраст всех пользователей и найти среднее арифметическое значение (метод reduce)


//  const arr = [
//      { 
//      name: "Вася", 
//      age: 25 
//      },
//      { 
//      name: "Петя", 
//      age: 30 
//      },
//      { 
//      name: "Маша", 
//      age: 29 
//      }
//  ]

// let newArray = arr.map(function(item, index){
//     return item.age
// })

// console.log(newArray);

// let result = newArray.reduce((prev,  item, index) => {
//  return item + prev;
// })

// console.log(result/newArray.length);

// *******************************************************************************



// вам дается массив пользователей и вам должны возвращатся объекты который будет иметь ключ fullname который будет равен имени  и фамилии пользователя , и также будет возвращаться  id пользователя (метод map)

//  let users = [

//      { 
//      name: "Вася", 
//      surname: "Пупкин", 
//      id: 1 
//      },     { 
//      name: "Петя", 
//      surname: "Иванов", 
//      id: 2 
//      },
//      { 
//      name: "Маша", 
//      surname: "Петрова", 
//      id: 3 
//      }
//  ];

//   let resultOne = users.map(function(item, index, array){
//       return ` fullname = ${item.fullName = item.name + item.surname}  id = ${item.id}`
//   })


//   console.log(resultOne );


// ***********************************************************************************


// Отсортируйте массив так чтобы вначале распологались наименьшие массивы (размер массива определяется его длиной )
// let arr  = [
//     [14 ,45],
//     [1],
//     ['a', 'c', 'd']
// ];

// arr.sort((prev, next) => prev.length-next.length);
// console.log(arr);


//  Есть массив объектов 

//  let arr  = [
//      {
//          cpu: 'Intel',
//          info: {
//              cores:2,
//              cache:3
//         }
//      },
//      {
//          cpu: 'Intel',
//          info: {
//              cores:4,
//              cache:4
//          }
//      },
//     {
//          cpu: 'Amd',
//          info: {
//              cores:1,
//              cache:1
//          }
//      },
//      {
//          cpu: 'Intel',
//          info: {
//              cores:3,
//              cache:2
//          }
//      },
//      {
//          cpu: 'Amd',
//          info: {
//              cores:4,
//             cache:2
//          }
//      },

//  ];

// // // Отсортировать их по возрастающему количеству ядер (cores)
// let newArray = arr.sort((prev, next) => {
//   return  prev.info.cores - next.info.cores
// })
 

//  console.log(newArray);

