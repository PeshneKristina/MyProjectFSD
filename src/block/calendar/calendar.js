import "air-datepicker/dist/js/datepicker"


$('.datepicker-here').datepicker({
    navTitles: {
        days: 'MM <i>yyyy</i>'
    },
    inline: true,
    range: true,
    clearButton: true,
    prevHtml:"arrow_back",
    nextHtml:"arrow_forward",
});
