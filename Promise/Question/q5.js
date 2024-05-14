// 4. Create a promise that resolves after a random time between 1 to 5 seconds. Log "Promise resolved" when it resolves.

function check(){

    let z = new Promise((resolve,reject)=>{

        let a =function rollDice() {
            return Math.floor(Math.random() * 6) + 1;
        }

        setTimeout(()=>{

            

        },a*1000);
    })
}
