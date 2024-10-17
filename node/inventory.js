const readline=require('readline');
const rl=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const inventory= new Map();
function askCommand(){
    console.log("welcome to inventory management system");
    console.log("Available commands   ,add,remove,search ,update,summary,exit" );
    rl.question("\enter a command:",function(command){

        switch(command.trim().toLowerCase()){

case 'add':
    addItemPrompt()
    break;
    case 'remove':
        removeItemPrompt()
        break;

    
 case 'search' :
            searchItemPrompt()
            break;
            case   'update':
                updateItemPrompt()
                break;
                case 'summary':
                    printSummary()
                    askCommand();
                    case 'exit':
                        rl.close();
                        break;
                        default:
                            console.log('inalid command: enter a valid choice!')
                            askCommand();
                            break;
    
            }
           


    });
}
// function to add an item
function addItemPrompt(){
    rl.question("Enter an Item id:",function(id){
        rl.question("enter the item name:",function(name){

            rl.question("enter the item category:",function(category){
                rl.question("enter the item quantity", function(quantity){
                    addItem(id,name,category,parseInt(quantity))
                })


            })
        })
    })
}
function addItem(id,name,category,quantity){
    if(inventory.has(id)){
        console.log(`Error item with ${id} already exists`)
    }
    else{
        inventory.set(id(name,category,quantity))
        console.log(`item with Id ${id} added to the inventory`)
    }
}
function removeItemPrompt(){
    rl.question("enter the id to remove",function(id){
        removeItem(id);
        askCommand();


    })
}
function removeItem(id){
    if(inventory.has(id)){
        inventory.delete(id);
        console.log(` item with id ${id} removed`)
    }
    else{
        
        console.log(` error no item with Id ${id} in the inventory`)
    }
}
function searchItemPrompt(){
    rl.question("Enter the search item:",function(searchTerm){
        searchItems(searchTerm)
        askCommand();

    })
}
function searchItems(){
    const results=[];
    for(const [id,item] of inventory)
    {
        if(id.includes(searchTerm)|| item.name.includes(searchTerm)|| item.category.includes(seaserchTerm)){
            results.push(id,...item);
    }}

if(results.lenngth>0){
    console.log("search results",results);
}
else{
    console.log("no item found")
}}
function addItemPrompt(){
    rl.question("Enter an Item id:",function(id){
        rl.question("enter the item name:",function(newName){

            rl.question("enter the item category:",function(newCategory){
                rl.question("enter the item quantity", function(newQuantity){
                    updateItem(id,newName,newCategory,parseInt(newQuantity)  )  
                    askCommand();
                })


            })
        })
    })
}
function updateItem(id,newName,newCategory,newQuantity){
    if(inventory.has(id)){
        const item= inventory.get(id);
        item.name=newName || item.name;
        item.category=newCategory||item.category;
        item.quantity=newQuantity !==undefined ?newQuantity :item.quantity;
        inventory.set(id,item);
        console.log(`item with id ${id}  updated `);

    }
    else{
        console.log(`item with id ${id} not  found`);
    }
}
 function printSummary(){
    if(inventory.size>0){
        console.log("inventory summary:")
        for(const[id,item] of inventory){
            console.log(`id:${id},Name:${item.name},category:${item.category},quantity: ${item.quantity}`)
        }

    }
    else{
        console.log("no items found")
    }
 }
 askCommand();