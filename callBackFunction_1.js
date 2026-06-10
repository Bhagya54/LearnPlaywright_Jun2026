//Call another function inside a function

function callMe(name,whenTheTableReady){
    console.log("Hello: " +name)
    whenTheTableReady();
}

function whenTheTableReady(){
    console.log("Your table is ready")
}

callMe("Tina",whenTheTableReady)


