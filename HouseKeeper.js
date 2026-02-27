function HouseKeeper(name, age, yearOfExperience, languages){
    this.name = name;
    this.age = age;
    this.yearOfExperience = yearOfExperience;
    this.languages = languages;
}

var houseKeeper1 = new HouseKeeper("Zara", 22, 5, ["French", "English"]);
console.log(houseKeeper1.name);
console.log(houseKeeper1.languages);