const readline=require('readline');
const rl= createinterface({
    input:Process.stdin,
    output:process.stdout
}

);
const inventory=new Map()
console.log("welcome to inventory")
console.log("enter:add, remove , summary, search,update,exit")
console.log("enter any command",function(command){
    switch(command.trim().Tolowercase){
        case 'add':
        additemprompt();
        break;
        case 'update':
        updateitemprompt()
        break;
        case 'remove':
            removeitemprompt();
            break;
        case 'searchitem':
            searchitemprompt();
            break;
            case 'summary':
                printsummary();
                askcommand()
                break;
                case 'exit':
                    rl.close()
                    break;
                    default:
                        console.log("enter the correct command")
                        askcommand()
                        break;

    }


})
function additemprompt(){
    console('enter the item id', function(id){
        console.log("enter the item name",function(name){
            console.log("enter the item catagory",function(catagory){
                console.log("enter the item  quantity",function(quantity){
                    addditem(id,name,catagory,parseIntquantity)

                })

            })
        })

    })
}
function addditem(id,name,catagory,quantity){
    if(inventory.has(id)){
        console.log(`alreday exisit`)
        
    }
    else{
        inventory.set(id,{name,catagory,quantity})
        console.log(`added ${id}`)
    }
        

}
function removeitemprompt(){
    rl.question('enter the remove',function(id){
        removeitem(id)
        askcommand();
    })
}
function removeItem(){
    if(inventory.has(id)){
        inventory.delete(id)
        console.log(`removed`)
    }
        else {
            console.log(`id is invalid`)

        }
       

        }
        function searchItemPrompt(){
            rl.question(`enter searchterm`,function (searchterm){
                saerchitem(searchterm)
                askcommand();

            })



        
    
}
function searchitem(searchterm){
    const results=[];
    for([id,item] of inventory){
    if(inventory.has(searchterm)){
        results.push(id,...item)
    }
}
if(results.length>=0){
    console.log(`is found`,results)
}
else{
    console.log("not found ")
}

    

}