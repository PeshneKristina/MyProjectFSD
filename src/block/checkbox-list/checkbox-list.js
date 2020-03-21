import $ from 'jquery';

$(document).ready(function () {
    let hiddenBox1 = $(".checkbox-list__div-list_cl1");
    hiddenBox1.hide();
    let arrow1 = $(".checkbox-list__span-icons_cl1");
    arrow1.css('transform', 'rotate(0deg)');
    arrow1.on("click", function () {
        if (hiddenBox1.hasClass('active')) {
            arrow1.css('transform', 'rotate(0deg)');
            hiddenBox1.hide();
            hiddenBox1.removeClass("active");
        } else {
            arrow1.css('transform', 'rotate(-180deg)');
            hiddenBox1.show();
            hiddenBox1.addClass("active");
        }
    });
    let hiddenBox2 = $(".checkbox-list__div-list_cl2");
    hiddenBox2.hide();
    let arrow2 = $(".checkbox-list__span-icons_cl2");
    arrow2.css('transform', 'rotate(0deg)');
    arrow2.on("click", function () {
        arrow2.css('transform', 'rotate(0deg)');
        if (hiddenBox2.hasClass('active')) {
            hiddenBox2.hide();
            hiddenBox2.removeClass("active");
        } else {
            arrow2.css('transform', 'rotate(-180deg)');
            hiddenBox2.show();
            hiddenBox2.addClass("active");
        }
    });

});
