$(document).ready(function () {
    $("#button1").on("click", button1Click);
    $(".img-small").on("click", imgClick);
    $(".img-container").hover(imgContainerShowTXT, imgContainerHideTXT)
    $("#welcomeModal").modal('show');
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
    $(this).children("img").addClass("img-small-hover");
}
function imgContainerHideTXT() {
    $(this).children(".img-caption").attr("hidden", "hidden");
    $(this).children("img").removeClass("img-small-hover");
}
function imgClick() {
    if ($(this).hasClass("rounded-circle")) {
        ($(this).removeClass("rounded-circle"));
    }
    else {
        $(this).addClass("rounded-circle");
    }
}
function button2Click() {
    var elems = $(".img-small"); //select all elements with this tag

    //apply a class to the elements to overlay a green box

    //add if statement so the button serves as a toggle
}
