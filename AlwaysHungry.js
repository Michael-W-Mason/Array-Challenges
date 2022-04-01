function alwaysHungry(arr) {
    let isFood = false;
    for(i of arr){
        if(i == "food"){
            isFood = true;
            console.log("yummy");
        }
    }
    if(!isFood){
        console.log("I'm hungry");
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
