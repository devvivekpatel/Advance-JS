
// function obj(a){
//     var snakes={
//         15:5,
//         99:2,
//         56:20,
//         80:40,
//         75:15,
//     };
    
//     //ek hi me snake bhi kar aur ladder bhi aur jaruri nhi hai ki tu loop bar bar chala seedhe if k andar dl k true kar de kam ho jayega 👍👍
//     for(let key in snakes){
//       console.log(key);
//         if(key === a){
//             console.log(a);
//             console.log(key);
//             // a = snakes[key];
//             // console.log(key,'🔴🔴');
//             // console.log(snakes[key]);
//             // console.log(a ,"🔴")
//           console.log(a);
//         }
//         else{
//           console.log(a);

//         }
//     }
//     }
    
//     let score =99;
    
 
//     console.log(obj(score));
    
  

// // let obj = {
// //     5:56,
// //     45:65,
// //     79:23,
// //     89:43
// // };

// // for(let key in obj){
// //     console.log(`YOur key is : ${key} and your result is : ${obj[key]}`);
// // }




// function obj(a) {
//     var snakes = {
//         15: 5,
//         99: 2,
//         56: 20,
//         80: 40,
//         75: 15,
//     };

//     if (snakes.hasOwnProperty(a)) {
//         console.log("Oops, you landed on a snake's head at position", a);
//         console.log("Moving to position", snakes[a]);
//         return snakes[a];
//     } else {
//         console.log("You're safe at position", a);
//         return a;
//     }
// }

// let score = 75;

// console.log(obj(score));


function obj(a) {
    var snakes = {
        20: 5,
        99: 2,
        40: 10,
        80: 30,
        75: 15,
    };

    // Checking if the key exists in the object manually
    var isSnake = false;
    for (var key in snakes) {
        if (key == a) {
            isSnake = true;
            break;
        }
    }

    if (isSnake) {
        console.log("Oops, you landed on a snake's head at position", a);
        console.log("Moving to position", snakes[a]);
        return snakes[a];
    } else {
        console.log("You're safe at position", a);
        return a;
    }
}

let score = 75;

console.log(obj(score));

