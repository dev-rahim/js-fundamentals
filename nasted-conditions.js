var danisPrice = 50;
var butterBreadePrice = 20;
var toastBuiscuitPrice = 10;
// var myBudget = 100;
// var myBudget = 40;
// var myBudget = 15;
var myBudget = 5;

if ( danisPrice < myBudget ) {
    console.log( "Danis kheye Dassin jabo" );
}
else if ( butterBreadePrice < myBudget ) {
    console.log( "Ruti khabo" );
}
else if ( toastBuiscuitPrice < myBudget ) {
    console.log( "Toast khabo" );
}
else {
    console.log( "You don't have suffesient money" );
}

// nasted contitions
// var packedWelll = true;
var packedWelll = false;
myBudget += 100;
if ( danisPrice < myBudget ) {
    if ( packedWelll ) {
        console.log( "Danish khabo" );
    }
    else {
        console.log( "Danish khabona machi pore ache" );
    }
}