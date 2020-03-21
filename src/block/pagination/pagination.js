import $ from "jquery";
//import 'paginationjs/src/pagination'
import 'paginationjs'


$(document).ready(function () {
    function simpleTemplating(data) {
        let html = '<ul>';
        $.each(data, function (index, item) {
            html += '<li>' + item + '</li>';
        });
        html += '</ul>';
        return html;
    }

    $('#pagination-container').pagination({
        pageSize: 1,
        pageRange : 1 ,
        pageNumber: 1,
        showPrevious : false ,
        dataSource: [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15],
        nextText:"arrow_forward",

    });

});
