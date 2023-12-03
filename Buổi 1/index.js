// let student = [
//     {
//         name: "NVA",
//         age: 16,
//         course: ["mindX 01", "mindX 02", "mindX 03"]
//     },
//     {
//         name: "NVB",
//         age: 18,
//         course: ["mindX 01", "mindX 02", "mindX 04"]
//     },
//     {
//         name: "NVC",
//         age: 17,
//         course: ["mindX 01", "mindX 03", "mindX 04"]
//     },
//     {
//         name: "NVD",
//         age: 15,
//         course: ["mindX 01", "mindX 02", "mindX 03"]
//     }
//     ]
    
    
//     const checkAge = () => {
//      const check = Number(document.querySelector('.check').value);
//      const text = document.querySelector('.text');
//      console.log (check);
//      const dataUser = student.filter((item) =>  item.age == check)
//      console.log (dataUser);
//      text.innerHTML = "";
//      if (dataUser.length == 0 ) {
//         text.innerHTML += "Khong tim thay"
//      } else {
//         for (let item of dataUser) {
//             text.innerHTML += item.name
//         }
//      }
    
//     }
    
    
//     const checkCourse = () => {
//         const search = document.querySelector('.search').value;
//         const text1 = document.querySelector('.text1');
//         console.log(search); 
//         const dataUser = student.filter((item) =>  {
//             for (let itemA of item.course) {
//             return itemA = search
//         }
//     })
    
//      text1.innerHTML = "";
//      if (dataUser.length == 0 ) {
//         text1.innerHTML += "Khong tim thay"
//      } else {
//         for (let item of dataUser) {
//             text1.innerHTML += " " +item.name
//         }
//      }
//     }
    
    
    
    
    let arr1 = [0,2,4,6,8]
    let arr2 = [1,3,5,7]
    
    // let arr3 = arr1.filter(n=>n>3) ;
    // console.log(arr3)
    // let arr4 = arr2.filter(m=>m>3);
    // console.log(arr4);
    
    
    const merged = [...arr1,...arr2]
    // console.log (merged)
    
    // arr1.push(arr2);
    // console.log ("arr new",arr1);
    
    
    
    function compareNumbers(a, b) {
        return a - b;
    }
      
    console.log(merged.sort(compareNumbers))
    
    
    merged.sort((a, b) => b - a);
    
    console.log(merged);