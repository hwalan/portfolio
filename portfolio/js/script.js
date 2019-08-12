$(function () {

    var width = $(window).width();

    $(window).on("scroll", function () {
        var top = $(this).scrollTop();
        var bottom = $(document).height() - $(window).height();

        if (top >= bottom - 600) {
            $("#panel1").addClass("fadeInRight ").css("display", "block");
            $("#panel2").addClass("fadeInLeft ").css("display", "block");
            width_change();
        } else {
            $("#panel1").css("display", "none");
            $("#panel2").css("display", "none");
            width_change();
        }
    });

    $("#drop").on("click", function () {
        ischecked();
    });

    $(".menu li").on("click", function () {
        width = $(window).width();
        if (width < 767) {
            $(".menu").css("display", "none");
            $("#drop").prop("checked", false);
        } else {
            $(".menu").css("display", "block");
        }
    });

    $(window).resize(function () {
        width = $(window).width();
        if (width > 767) {
            $(".menu").css("display", "block");
        } else {
            $(".menu").css("display", "none");
        }
    });
});

function ischecked() {
    if ($("#drop").is(":checked")) {
        $(".menu").css("display", "block");
    } else {
        $(".menu").css("display", "none");
    }
}

function width_change() {
    var width = $(window).width();
    if (width < 767) {
        $("#panel1").removeClass("fadeInRight");
        $("#panel2").removeClass("fadeInLeft");

        $("#panel1").addClass("pulse ");
        $("#panel2").addClass("pulse ");
    }
}
