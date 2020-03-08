import $ from 'jquery';

$(document).ready(function () {
    let hiddenBox1 = $(".checkbox-list__div-list_cl1");
    let arrow1 = $(".checkbox-list__span-icons_cl1");
    arrow1.on("click", function (event) {
        if (hiddenBox1.hasClass('active')) {
            hiddenBox1.css('opacity','1');
            arrow1.css('transform', 'rotate(-180deg)');
            hiddenBox1.removeClass("active");
        } else {
            hiddenBox1.css('opacity','0');
            arrow1.css('transform', 'rotate(0deg)');
            hiddenBox1.addClass("active");
        }
    });
    let hiddenBox2 = $(".checkbox-list__div-list_cl2");
    let arrow2 = $(".checkbox-list__span-icons_cl2");
    arrow2.on("click", function (event) {
        if (hiddenBox2.hasClass('active')) {
            hiddenBox2.css('opacity','1');
            arrow2.css('transform', 'rotate(-180deg)');
            hiddenBox2.removeClass("active");
        } else {
            hiddenBox2.css('opacity','0');
            arrow2.css('transform', 'rotate(0deg)');
            hiddenBox2.addClass("active");
        }
    });

});
