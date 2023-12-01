class Item {

    constructor() {

        this.name = "";
        
        this.strength = 0;
    
        this.intelligence = 0;
    
        this.charisma = 0;
    
        this.healthPoint = 0;
    
        this.magicPoint = 0;
    
        this.energyPoint = 0;

        this.expendable = true;

        this.price = 0; // unit: Gold
        
        this.probability = 0.0;

    }

}

let apple_0 = new Item;
    

apple_0.name = "apple";
apple_0.strength = 0;
apple_0.intelligence = 0;
apple_0.charisma = 0;
apple_0.healthPoint = 10;
apple_0.magicPoint = 3;
apple_0.energyPoint = 5;
apple_0.expendable = true;
apple_0.price = 30;
apple_0.probability = 0.30;


let chicken_1 = new Item;


chicken_1.name = "chicken=";
chicken_1.strength = 2;
chicken_1.intelligence = 0;
chicken_1.charisma = 0;
chicken_1.healthPoint = 10;
chicken_1.magicPoint = 0;
chicken_1.energyPoint = 7;
chicken_1.expendable = true;
chicken_1.price = 50;
chicken_1.probability = 0.25;


let medicine_2 = new Item;

medicine_2.name = "medicine";
medicine_2.strength = 0;
medicine_2.intelligence = 0;
medicine_2.charisma = 0;
medicine_2.healthPoint = 15;
medicine_2.magicPoint = 0;
medicine_2.energyPoint = 15;
medicine_2.expendable = true;
medicine_2.price = 100;
medicine_2.probability = 0.20;


let short_sword_3 = new Item;


short_sword_3.name = "short sword";
short_sword_3.strength = 20;
short_sword_3.intelligence = 0;
short_sword_3.charisma = 0;
short_sword_3.healthPoint = 0;
short_sword_3.magicPoint = 0;
short_sword_3.energyPoint = 0;
short_sword_3.expendable = false;
short_sword_3.price = 300;
short_sword_3.probability = 0.15;


let long_sword_4 = new Item;

long_sword_4.name = "long sword";
long_sword_4.strength = 40;
long_sword_4.intelligence = 0;
long_sword_4.charisma = 0;
long_sword_4.healthPoint = 0;
long_sword_4.magicPoint = 0;
long_sword_4.energyPoint = 0;
long_sword_4.expendable = false;
long_sword_4.price = 600;
long_sword_4.probability = 0.10;


let broadsword_5 = new Item;

broadsword_5.name = "broadsword";
broadsword_5.strength = 80;
broadsword_5.intelligence = 0;
broadsword_5.charisma = 0;
broadsword_5.healthPoint = 0;
broadsword_5.magicPoint = 0;
broadsword_5.energyPoint = 0;
broadsword_5.expendable = false;
broadsword_5.price = 1000;
broadsword_5.probability = 0.05;

let leather_armor_6 = new Item;

leather_armor_6.name = "leather armor";
leather_armor_6.strength = 0;
leather_armor_6.intelligence = 0;
leather_armor_6.charisma = 0;
leather_armor_6.healthPoint = 0;
leather_armor_6.magicPoint = 0;
leather_armor_6.energyPoint = 20;
leather_armor_6.expendable = false;
leather_armor_6.price = 300;
leather_armor_6.probability = 0.15;

let chain_armor_7 = new Item;

chain_armor_7.name = "chain armor";
chain_armor_7.strength = 0;
chain_armor_7.intelligence = 0;
chain_armor_7.charisma = 0;
chain_armor_7.healthPoint = 0;
chain_armor_7.magicPoint = 0;
chain_armor_7.energyPoint = 40;
chain_armor_7.expendable = false;
chain_armor_7.price = 600;
chain_armor_7.probability = 0.10;

let plate_armor_8 = new Item;

plate_armor_8.name = "plate armor";
plate_armor_8.strength = 0;
plate_armor_8.intelligence = 0;
plate_armor_8.charisma = 0;
plate_armor_8.healthPoint = 0;
plate_armor_8.magicPoint = 0;
plate_armor_8.energyPoint = 80;
plate_armor_8.expendable = false;
plate_armor_8.price = 1000;
plate_armor_8.probability = 0.05;


let items = [];

items.push(apple_0);
items.push(chicken_1);
items.push(medicine_2);
items.push(short_sword_3);
items.push(long_sword_4);
items.push(broadsword_5);
items.push(leather_armor_6);
items.push(chain_armor_7);
items.push(plate_armor_8);
