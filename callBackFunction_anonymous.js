function callMe(name,xyz)
{
    console.log("Hello: " +name)
    xyz();
}

function tableReady(){
    console.log("You table is ready - function")
}

callMe("geeta",tableReady)

callMe("Tina",function (){
    console.log("Your table is ready - anonymous fn")
})

callMe("Raj",() => {
    console.log("Your table is ready - arrow fn")
})













