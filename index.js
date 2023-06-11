// Code your solutions in this file
writeCards(["Adda", "brendan", "Ali"], "suprise");
function writeCards(names, event) {
    let arrayOfThanks =[];
    for (let i = 0; i < names.lenth; i++) {
        arrayOfThanks.push('Thankyou, ${names[i]}, for the wonderful ${event} gift')
    }
    return arrayOfThanks;
}
function countDown() {
    let counter = 10;
    while (counter >=0) {
        console.log(counter);
        counter--;
    }
}

countDown();
