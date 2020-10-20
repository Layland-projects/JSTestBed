$(document).ready(function () {
    $("#button1").on("click", button1Click);
    $(".img-small").on("click", imgClick);
    $(".img-container").hover(imgContainerShowTXT, imgContainerHideTXT)
});

function button1Click() {
    if ($("#img1").attr("hidden") === "hidden") {
        $("#img1").attr("hidden", null);
    }
    else {
        $("#img1").attr("hidden", "hidden");
    }
}

function imgContainerShowTXT() {
     $(this).children(".img-caption").attr("hidden", null);
}
function imgContainerHideTXT() {
    $(this).children(".img-caption").attr("hidden", "hidden");
}
function imgClick() {
    if ($(this).hasClass("rounded-circle")) {
        ($(this).removeClass("rounded-circle"));
    }
    else {
        $(this).addClass("rounded-circle");
    }
}
