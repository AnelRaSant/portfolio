function hourUpdater() {
    // get current number of hours
    var currentHour = moment().hours();

    // loop over time blocks
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      // check if we've moved past this time
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdater();

  // set up interval to check if current time needs to be updated
  var interval = setInterval(hourUpdater, 15000);


   // display current day on page
   $("#currentDay").text(moment().format("dddd, MMMM Do"));
});



//UNIVERSE BACKGROUND
    function createStars(type, quantity) {
        for (let i = 0; i<quantity; i++) {
            var star = document.createElement('div');
            star.classList.add('star', `type-${type}`); 
            star.style.left = `${randomNumber(1,99)}%`;
            star.style.bottom = `${randomNumber(1,99)}%`;
            star.style.animationDuration = `${randomNumber(50,200)}s`;
            document.body.appendChild8(star);
        }
    }
    function randomNumber(min, max) {
        return Math.floor(Math.random() *max) + min;
    }
    createStars(1,100);
    createStars(2,85);
    createStars(3,70);

