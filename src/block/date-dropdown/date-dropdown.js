import 'jquery.maskedinput';
import 'jquery.maskedinput/src/jquery.maskedinput'
import $ from "jquery";
import "@chenfengyuan/datepicker"
import "@chenfengyuan/datepicker/src/js/datepicker"




$(document).ready(function () {
    $("#date-field1_dd1").mask("99.99.9999");
    $('[data-toggle="datepicker_dd1"]').datepicker({
        format: "dd/mm/yyyy",
        trigger: $(".date-dropdown__span-icons_dd1"),

    });
    $("#date-field1_dd2").mask("99.99.9999");
    $('[data-toggle="datepicker_dd2"]').datepicker({
        format: "dd/mm/yyyy",
        trigger: $(".date-dropdown__span-icons_dd2"),

    });
});


