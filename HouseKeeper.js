function HouseKeeper(name, age, yearOfExperience, languages){
    this.name = name;
    this.age = age;
    this.yearOfExperience = yearOfExperience;
    this.languages = languages;

    this.houseKeeping = function() {
        alert("May I clean your room?")
        entersRoom();
        cleansRoom();
        exitsRoom();
    }
}

// these function have to be outside the object constructor function

entersRoom = function (){
        alert("*Housekeeping has entered the room*")
    }

cleansRoom = function (){
        alert("I finished cleaning your room!")
    }

exitsRoom = function (){
        alert("*Housekeeping has left the room*")
    }

var houseKeeper1 = new HouseKeeper("Zara", 22, 5, ["French", "English"]);
console.log(houseKeeper1.name);
console.log(houseKeeper1.languages);
console.log(houseKeeper1.houseKeeping());