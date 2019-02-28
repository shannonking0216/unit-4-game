$(".random-btn").on("click", function () {

    var game = {
        randomNumber: 0,

        start: function () {
            this.randomNumber === this.generateRandomNumber(19, 120);
            $("#random-number").text(this.randomNumber);

            //generate the buttons
            for (var i = 0; i < 4; i++) {
                var btn = $("<button>");
                btn.addClass("btn btn-light random-btn");
                btn.val(this.generateRandomNumber(1, 12));
                btn.text("crystal");
                $("#button-container").append(btn);
            }
        },
        reset: function () {
        },
        generateRandomNumber: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    };

    game.start();

    $(".random-btn").on("click", function(){
        var btnValue = parseInt($(this).val());
        totalNumber += btnValue;
        console.log(totalNumber);
        if (totalNumber === game.randomNumber) {
            alert("You Win!");
            game.start;
        } else if (totalNumber > game.randomNumber){
            alert("You Loose");
            game.start;
        }
    });

    var btnValue = $(this).val();
    var randomNumber = $("#random-number").text();
    if (btnValue === randomNumber) {
        alert("You picked the same as the random number");
    } else {
        alert("Not the random number");
    }
});
