import $ from "jquery";

$(document).ready(function () {
    /*let input = $('#like-button-1');
    $('#like-button-1').change(function () {
        if ($('#like-button-1').prop('checked')) {
            $('#span1').html("3");
        }
        if (!$('#like-button-1').prop('checked')) {
            $('#span1').html("2");
        }
    });*/

    let inputs = document.getElementsByClassName("like-button__input");
    for (let i = 0; i < inputs.length; i++) {
        let $inputId = $(`#${inputs[i].id}`);
        $inputId.change(function () {
            let spanId = inputs[i].nextElementSibling.children[0].id;
            let spanContent = inputs[i].nextElementSibling.children[0].textContent;
            let currentValueSpan = Number(spanContent);
            if ($inputId.prop('checked')) {
                currentValueSpan = currentValueSpan +1;
                $(`#${spanId}`).html(`${currentValueSpan}`);
            } else{
                currentValueSpan = currentValueSpan -1;
                $(`#${spanId}`).html(`${currentValueSpan}`);
            }

        })
    }


});
