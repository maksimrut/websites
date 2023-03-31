$(function () {

    var header = $("#header");
    var scrollOffset = $(window).scrollTop();

    // Fixed Header
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {    
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);

    });

    function checkScroll(scrollOffset) {
        var introH = $("#intro").innerHeight();

        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            (header.removeClass("fixed"));
        } 
    }

    // Menu nav toggle
    $("#menu__button").on("click", function (event) {
        event.preventDefault();

        $("#menu__toggle").toggleClass("active");
        $(this).toggleClass("active");

    });

    // Collapse
    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this);
        var blockId = $this.data("collapse");

        $(blockId).slideToggle();
        $(this).toggleClass("active");
    });

});
