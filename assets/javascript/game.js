$(document).ready(function() {
  //random number function
  let getRandomNumber = function(start, range) {
    let getRandom = Math.floor(Math.random() * range + start);
    while (getRandom > range) {
      getRandom = Math.floor(Math.random() * range + start);
    }
    return getRandom;
  };

  //variables
  var counter = 0;
  var wins = 0;
  var losses = 0;

  var goal = getRandomNumber(19, 120);
  $("#goal").html(goal);

  var frog = getRandomNumber(1, 12);
  var bird = getRandomNumber(1, 12);
  var otter = getRandomNumber(1, 12);
  var hippo = getRandomNumber(1, 12);

  //resets the game after an outcome is determined
  function reset() {
    counter = 0;
    $("#goal").html(goal);
    goal = getRandomNumber(19, 120);
    $("#counter").html(goal);
    frog = getRandomNumber(1, 12);
    bird = getRandomNumber(1, 12);
    otter = getRandomNumber(1, 12);
    hippo = getRandomNumber(1, 12);
  }

  //Frog Button
  $("#frog").on("click", function() {
    counter += frog;
    outcome ();
    $("#counter").html(counter);
  });

  //Bird Button
  $("#bird").on("click", function() {
    counter += bird;
    outcome ();
    $("#counter").html(counter);
  });

  //Otter Button
  $("#otter").on("click", function() {
    counter += otter;
    outcome ();
    $("#counter").html(counter);
  });

  //Hippo Button
  $("#hippo").on("click", function() {
    counter += hippo;
    outcome ();
    $("#counter").html(counter);
  });

  function outcome() {
    if (counter === goal) {
      wins++;
      $("#wins").html(wins);
      reset();
    } else if (counter > goal) {
      losses++;
      $("#losses").html(losses);
      reset();
    }
  }
});
