$(document).ready(function() {
  const toolConverter = function() {
    //CURRENCY FROM, TO, AMOUNT
    let from = $("#currFrom").val();
    let to = $("#currTo").val();
    let amount = $("#amount").val();

    console.log(from, to, amount);

    const qureryURL = `https://data.fixer.io/api/convert?from=${from}&to=${to}&amount=${amount}&access_key=`;
    const API_KEY = "60113b7efb8e8df0fd07aa52ee66d1fd";

    console.log(`${qureryURL}${API_KEY}`);

    $.ajax({
      url: `${qureryURL}${API_KEY}`,
      method: "GET"
    })
      .then(function(response) {
        console.log(response);
        $("#result").val(response.result.toFixed(2));
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  $("#convert").on("click", function(event) {
    event.preventDefault();
    //run the converter
    toolConverter();
  });
});

var granimInstance = new Granim({
  element: "#canvas-basic",
  direction: "left-right",
  isPausedWhenNotInView: true,
  states: {
    "default-state": {
      gradients: [
        ["#ff9966", "#ff5e62"],
        ["#00F260", "#0575E6"],
        ["#e1eec3", "#f05053"]
      ]
    }
  }
});
