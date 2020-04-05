import $ from "jquery";

$(document).ready(function () {
    $('.textfield__span').click(function () {
        let form = document.forms.header;
        let elem = form.elements[0];
        form.submit();
        alert("Email: '" + elem.value + "' принят");
    });

});