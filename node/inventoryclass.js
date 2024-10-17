const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const inventory = new Map();
function askCommand(){
    console.log("Welcome to inventory management system!");
    console.log("Available commands: add, remove, search, update, summary, exit");
    rl.question("\Enter a command: ", function(command){
        switch(command.trim().toLowerCase()){
            case 'add':
                addItemPrompt();
                break;
            case 'remove':
                removeItemPrompt();
                break;
            case 'search':
                searchItemsPrompt();
                break;
            case 'update':
                updateItemPrompt();
                break;
            case 'summary':
                printSummary();
                askCommand();
                break;
            case 'exit':
                rl.close();
                break;
            default:
                console.log('Invalid command: enter a valid choice!');
                askCommand();
                break;
        }
    });
}













































































//function to add an item
function addItemPrompt(){
    rl.question("Enter an item id: ", function(id){
        rl.question("Enter an item name: ", function(name){
            rl.question("Enter item category: ", function(category){
                rl.question("Enter item quantity: ", function(quantity){
                    addItem(id,name,category,parseInt(quantity));
                    askCommand();
                });
            });
        });
    });
}
function addItem(id,name,category,quantity){
    if(inventory.has(id)){
        console.log(`Error item with ID ${id} already exists`);
    } else {
        inventory.set(id,{name,category,quantity});
        console.log(`Item with ID ${id} added to inventory!`)
    }
}
function removeItemPrompt(){
    rl.question("Enter an id to remove: ", function(id){
        removeItem(id);
        askCommand();
    });
}
function removeItem(id){
    if(inventory.has(id)){
        inventory.delete(id);
        console.log(`Item with ID ${id} removed!`);
    } else{
        console.log(`Error: No item with ID ${id} found!`);
    }
}
function searchItemsPrompt(){
    rl.question("Enter search term: ", function(searchTerm){
        searchItems(searchTerm);
        askCommand();
    });
}
function searchItems(searchTerm){
    const results =[];
    for(const[id,item] of inventory){
        if(inventory.has(searchTerm)){
            results.push({id,...item});
        }
    }
    if(results.length>0){
        console.log('Search Results: ', results);
    } else{
        console.log('No items found!')
    }
}
function updateItemPrompt(){
    rl.question("Enter an item id: ", function(id){
        rl.question("Enter an item name: ", function(newName){
            rl.question("Enter item category: ", function(newCategory){
                 rl.question("Enter item quantity: ", function(newQuantity){
                    updateItem(id,newName,newCategory,newQuantity,parseInt(newQuantity));
                    askCommand();
                });
            });
        });
    });
}
function updateItem(id,newName,newCategory,newQuantity){
    if(inventory.has(id)){
        const item = inventory.get(id);
        item.name = newName || item.name;
        item.category = newCategory || item.category;
        item.quantity = newQuantity !== undefined ? newQuantity : item.quantity;
        inventory.set(id,item);
        console.log(`Item with ID ${id} updated!`); 
    } else{
        console.log(`Item with ID ${id} not found!`);
    }
}
function printSummary(){
    if(inventory.size>0){
        console.log('Inventory Summary:');
        for(const [id,item] of inventory){
            console.log(`ID: ${id}, Name: ${item.name}, Category: ${item.category},
                Quantity: ${item.quantity}`);
        }
    } else {
        console.log('No items found!');
    }
}
askCommand();