$(document).ready(function () {
    $(".js-favorite").click(function (event) { 
        event.preventDefault();
        $(this).addClass("fas");
        $(this).removeClass("far");
    });
});
