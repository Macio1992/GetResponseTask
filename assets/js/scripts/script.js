function myFunction(){
    var heightB = document.getElementById('dropbutton').offsetHeight;
    document.getElementById('menu').style.top = heightB+"px";
    document.getElementById('menu').classList.toggle('show');
}

window.onclick = function(event) {
    if(!event.target.matches('#dropbutton')){
        var dropdowns = document.getElementsByClassName('dropdown-content');
        var i;

        for(i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}

function setFreeDay() {

    let width = document.getElementsByClassName('free')[0].offsetWidth;

    let heightFree = 0;
    Array.from(document.getElementsByClassName('free')).forEach(e => {
        heightFree = heightFree + e.scrollHeight;
    });

    Array.from(document.getElementsByClassName('free')).forEach(e => {
        e.style.position = 'absolute';
        e.style.padding = '0px';
        e.style.width = width + 'px';
    });

    document.getElementsByClassName('free')[0].style.height = heightFree+10 + 'px';
    document.getElementsByClassName('free')[0].style.backgroundImage = 'url(assets/images/free.png)';
    document.getElementsByClassName('free')[0].style.backgroundRepeat = 'no-repeat';
    document.getElementsByClassName('free')[0].style.backgroundPosition = "50% 50%";
}

setFreeDay();