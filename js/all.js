$(document).ready(function () {
    $(".js-favorite i").click(function (event) { 
        event.preventDefault();
        $(this).addClass("fas");
        $(this).removeClass("far");
        $(this).parent().addClass("text-accent");
    });
});
