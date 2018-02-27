$(document).on("keypress", function (e) {
    if (e.key === "]") {
        Window.open(edumate.html);
    }
});

function hideForEdumate() {
    $("#checklist").hide();
    $(".checklist-hidden").show();
}