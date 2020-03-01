import $ from 'jquery';

$(document).ready(function () {
    let hiddenBox = $(".checkbox-list__div-list");
    $(".checkbox-list__span-icons").on("click", function (event) {
        if (hiddenBox.hasClass('active')) {
            hiddenBox.css('opacity','1');
            $(".checkbox-list__span-icons").css('transform', 'rotate(-180deg)');
            hiddenBox.removeClass("active");
        } else {
            hiddenBox.css('opacity','0');
            $(".checkbox-list__span-icons").css('transform', 'rotate(0deg)');
            hiddenBox.addClass("active");
        }
    });

});
