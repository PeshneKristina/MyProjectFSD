import $ from 'jquery';

$(document).ready(function () {
    let colors = document.querySelectorAll(".color");
    let color_length = colors.length;
    for (let i = 1; i < color_length + 1; i++) {
        let color_id = 'color' + i;
        let color_img = $(`#${color_id} .color__content-color`).text();
        let opacity = $(`#${color_id} .color__content-color`).attr("id");
        $(`#${color_id} .color__img`).css('background', `${color_img}`);
        $(`#${color_id} .color__img`).css('opacity', `${opacity}`);
    }


});