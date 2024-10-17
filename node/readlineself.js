const  readline=require("readline")
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout


})
console.log("welcome to interface using readline")
function ask(){
    rl.question(`what is your name`, function(name){
        console.log(`hello ${name}`)
        lang();
    })}
    function lang(){
        rl.question(`what is your language`,function(language){
            console.log(`that was great choice ${language}`)
        })
    }
    ask();

  