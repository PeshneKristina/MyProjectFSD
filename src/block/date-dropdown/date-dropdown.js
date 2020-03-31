import 'jquery.maskedinput';
import 'jquery.maskedinput/src/jquery.maskedinput'
import $ from "jquery";
import "air-datepicker/dist/js/datepicker"

$(document).ready(function () {
    //$(".date-dropdown__input").mask("99.99.9999");
    let spans = $(".date-dropdown__span-icons");
    for (let i = 0; i < spans.length; i++) {
        spans[i].addEventListener('click', function (event) {
            let inp = spans[i].previousElementSibling.id;
            let $inputId = $(`#${inp}`);
            let dp = $inputId.datepicker({showEvent: 'none', format: "dd/mm/yyyy"}).data('datepicker');
            if ($inputId.hasClass("active")) {
                $inputId.removeClass("active");
                dp.hide();
            } else {
                $inputId.addClass("active");
                dp.show();
                $inputId.focus();
            }

        })
    }

});



