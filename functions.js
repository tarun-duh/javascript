// function inbox(value){
// console.log("total message recieved are " + value );
// }
// function chat(){
//     instagram = 20;
//     whatsapp = 10;
//     total = instagram + whatsapp;
//     inbox(total);
// }
// chat()
function max(value1,value2){
    if(value1>value2){
        console.log(value1);
    }else{
        console.log(value2);
    }
}
function receiver()
{
    let num = prompt("give a value");
    let num2 = prompt("give another value");
    max(parseInt(num) ,parseInt(num2));

}
receiver()
// let inbox = max(10,20);
// console.log(inbox);