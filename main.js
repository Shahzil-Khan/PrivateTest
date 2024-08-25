function dates() {
    var x = new Date("Apr 12 2017 1:30:00");
    var y = new Date();
    let seconds = Math.abs(x - y)/1000;

    var day = seconds / (24 * 3600);

    hh = seconds % (24 * 3600);
    var hour = hh / 3600;
  
    hh %= 3600;
    var minutes = hh / 60 ;
  
    hh %= 60;
    var rseconds = hh;

    document.getElementById('days').innerHTML = parseInt(day);
    document.getElementById('hours').innerHTML = parseInt(hour);
    document.getElementById('minutes').innerHTML = parseInt(minutes);
    document.getElementById('seconds').innerHTML = parseInt(rseconds);
}

setInterval(dates, 1000);

function updateTimeDisplays() {
    var startDate = new Date("Apr 12 2017 01:30:00");
    var currentDate = new Date();

    // Calculate the difference in milliseconds
    var diffMilliseconds = currentDate - startDate;

    // Convert milliseconds to total seconds
    var diffSeconds = Math.floor(diffMilliseconds / 1000);

    // Calculate total hours, minutes, and seconds
    var totalHours = Math.floor(diffSeconds / 3600);
    var remainingSecondsAfterHours = diffSeconds % 3600;
    var totalMinutes = Math.floor(remainingSecondsAfterHours / 60);
    var totalSeconds = remainingSecondsAfterHours % 60;

    // Update HTML elements
    document.getElementById('total-hours').innerHTML = totalHours;
    document.getElementById('total-minutes').innerHTML = totalMinutes;
    document.getElementById('total-seconds').innerHTML = totalSeconds;
}

// Call the function initially and then every second to update
updateTimeDisplays();
setInterval(updateTimeDisplays, 1000);



function cardSelected(selectedCard) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card === selectedCard) {
            card.classList.remove('fade-out');
            card.classList.add('show');
        } else {
            card.classList.add('fade-out'); 
            card.classList.remove('show');
        }
    });
}

