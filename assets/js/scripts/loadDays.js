let days = [
    {
        "name": "day 64",
        "free": false,
        "dish6am": {
            "name":"Bod-e-Shake",
            "done": true,
            "image": "assets/images/coffeeColored.png"
        },
        "dish9am": {
            "name": "Ham and Swiss Roll Ups",
            "done": true,
            "image": null
        },
        "dish12pm": {
            "name": "Turkey Melt",
            "done": true,
            "image": null
        },
        "dish3pm": {
            "name": "Bod-e Burn with Mozzarella and Tomato Slices",
            "done": true,
            "image": null
        },
        "dish6pm": {
            "name": "Turkey Melt",
            "done": true,
            "image": null
        },
        "gym": {
            "name":"LOW-CARB",
            "done": true,
        }
    },
    {
        "name": "day 65",
        "free": false,
        "dish6am": {
            "name":"Bod-e-Shake",
            "done": false,
            "image": "assets/images/coffeeColored.png"
        },
        "dish9am": {
            "name": "Ham and Swiss Roll Ups",
            "done": false,
            "image": null
        },
        "dish12pm": {
            "name": "Turkey Melt",
            "done": false,
            "image": null
        },
        "dish3pm": {
            "name": "Bod-e Burn with Mozzarella and Tomato Slices",
            "done": false,
            "image": null
        },
        "dish6pm": {
            "name": "Turkey Melt",
            "done": false,
            "image": null
        },
        "gym": {
            "name":"LOW-CARB",
            "done": false
        }
    },
    {
        "name": "day 66",
        "free": false,
        "dish6am": {
            "name":"Bod-e-Shake",
            "done": false,
            "image": "assets/images/coffeeColored.png"
        },
        "dish9am": {
            "name": "Grilled Steak",
            "done": false,
            "image": null
        },
        "dish12pm": {
            "name": "Bod-e-Shake",
            "done": false,
            "image": "assets/images/coffeeColored.png"
        },
        "dish3pm": {
            "name": "Bod-e Burn and Whole-Wheat English Muffin with Butter Spray",
            "done": false,
            "image": null
        },
        "dish6pm": {
            "name": "Garlic Lime Chicken (HC)",
            "done": false,
            "image": null
        },
        "gym": {
            "name":"HIGH-CARB",
            "done": false
        }
    },
    {
        "name": "day 67",
        "free": false,
        "dish6am": {
            "name":"Bod-e-Shake",
            "done": false,
            "image": "assets/images/coffeeColored.png"
        },
        "dish9am": {
            "name": "Ham and Swiss Roll Ups",
            "done": false,
            "image": null
        },
        "dish12pm": {
            "name": "Turkey Melt",
            "done": false,
            "image": null
        },
        "dish3pm": {
            "name": "Bod-e Burn with Mozzarella and Tomato Slices",
            "done": false,
            "image": null
        },
        "dish6pm": {
            "name": "Turkey Melt",
            "done": false,
            "image": null
        },
        "gym": {
            "name":"LOW-CARB",
            "done": false
        }
    },
    {
        "name": "day 68",
        "free": false,
        "dish6am": {
            "name":"Bod-e-Shake",
            "done": false,
            "image": "assets/images/coffeeColored.png"
        },
        "dish9am": {
            "name": "Ham and Swiss Roll Ups",
            "done": false,
            "image": null
        },
        "dish12pm": {
            "name": "Bod-e-Shake",
            "done": false,
            "image": "assets/images/coffeeColored.png"
        },
        "dish3pm": {
            "name": "Bod-e Burn with Mozzarella and Tomato Slices",
            "done": false,
            "image": null
        },
        "dish6pm": {
            "name": "Turkey Melt",
            "done": false,
            "image": null
        },
        "gym": {
            "name":"LOW-CARB",
            "done": false
        }
    },
    {
        "name": "day 69",
        "free": false,
        "dish6am": {
            "name":"Bod-e-Shake",
            "done": false,
            "image": "assets/images/coffeeColored.png"
        },
        "dish9am": {
            "name": "Grilled Steak (HC)",
            "done": false,
            "image": null
        },
        "dish12pm": {
            "name": "Bod-e-Shake",
            "done": false,
            "image": "assets/images/coffeeColored.png"
        },
        "dish3pm": {
            "name": "Bod-e Burn and Whole-Wheat English Muffin with Butter Spray",
            "done": false,
            "image": null
        },
        "dish6pm": {
            "name": "Garlic Lime Chicken",
            "done": false,
            "image": null
        },
        "gym": {
            "name":"HIGH-CARB",
            "done": false
        }
    },
    {
        "name": "day 70",
        "free": true
    }
];

let table = document.getElementById('desktop').getElementsByTagName('tbody')[0];
let newTR;
let newTH;
let newTD;
let newImage;

function initDaysInTable(){

    newTR = document.createElement('tr');
    newTH = document.createElement('th');

    //extra space
    newTR.appendChild(newTH);

    days.forEach(day => {
        newTH = document.createElement('th');
        newTH.className = 'day';
        newTH.innerHTML = day.name;
        newTR.appendChild(newTH);
    });

    table.appendChild(newTR);

}

function initWorkout(){

    newTR = document.createElement('tr');
    newTH = document.createElement('th');

    newTR.appendChild(newTH);

    days.forEach(day => {
        newTD = document.createElement('td');
        newTD.className = 'gym';
        if(day.gym){
            newTD.innerHTML = day.gym.name;
        } else {
            newTD.innerHTML = '';
        }
        
        newTR.appendChild(newTD);
    });

    table.appendChild(newTR);

}

function initDishes(hourPar, spanPar, dayPar){

    newTR = document.createElement('tr');
    newTH = document.createElement('th');
    newTH.className = 'time';
    newTH.innerHTML = hourPar;
    newTH.appendChild(spanPar);
    newTR.appendChild(newTH);

    days.forEach(day => {
        if(day[dayPar]){
            newTD = document.createElement('td');
            newTD.className = 'dish';
            let newh4 = document.createElement('h4');
            newh4.innerHTML = day[dayPar].name;
            newTD.appendChild(newh4);
            if(day[dayPar].image){
                newImage = document.createElement('img');
                newImage.src = day[dayPar].image;
                newTD.appendChild(newImage);
            }
        } else {
            newTD = document.createElement('td');
            newTD.className = 'free';
        }
        
        newTR.appendChild(newTD);
    });

    table.appendChild(newTR);

}

function initTable(){

    initDaysInTable();

    let newSpan = document.createElement('span');
    newSpan.innerHTML = 'AM';

    initDishes('6:00', newSpan, 'dish6am');

    newSpan = document.createElement('span');
    newSpan.innerHTML = 'AM';
    initDishes('9:00', newSpan, 'dish9am');

    newSpan = document.createElement('span');
    newSpan.innerHTML = 'PM';
    initDishes('12:00', newSpan, 'dish12pm');

    newSpan = document.createElement('span');
    newSpan.innerHTML = 'PM';
    initDishes('3:00', newSpan, 'dish3pm');

    newSpan = document.createElement('span');
    newSpan.innerHTML = 'PM';
    initDishes('6:00', newSpan, 'dish6pm');

    initWorkout();

}

initTable();