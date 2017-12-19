
let weeks = ['Week1', 'Week2', 'Week3', 'Week4'];
let counter = 0;
let arrow_left = document.getElementById('arrow-left');
let arrow_right = document.getElementById('arrow-right');
let week = document.getElementById('week');

function setWeek(counter){
    week.innerHTML = weeks[counter];
}

function initSlider(){
    setWeek(counter);
    arrow_left.style.display = 'none';
}

function left(){
    
    counter--;
    setWeek(counter);

    if(counter === 0){
        arrow_left.style.display = 'none';
    } else if (counter === weeks.length - 2){
        arrow_right.style.display = 'block';
    }

}

function right() {

    counter++;
    setWeek(counter);

    if(counter === 1){
        arrow_left.style.display = 'block';
    } else if (counter === weeks.length - 1){
        arrow_right.style.display = 'none';
    }
}

document.getElementById('arrow-left').addEventListener('click', function(){
    left();
});

document.getElementById('arrow-right').addEventListener('click', function(){
    right();
});

initSlider();