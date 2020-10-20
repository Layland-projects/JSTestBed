$(document).ready(function () {
    $("#button1").on("click", button1Click);
    $(".img-small").on("click", imgClick);
    $(".img-container").hover(imgContainerShowTXT, imgContainerHideTXT);
    $("#button2").on("click", button2Click);
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
function button2Click() {
    var elems = $(".img-small");
    if (elems.attr("src") === "Content/stockImage.jpg") {
        elems.attr("src", "Content/stockImage2.jpg");
    }
    else {
        elems.attr("src", "Content/stockImage.jpg");
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
