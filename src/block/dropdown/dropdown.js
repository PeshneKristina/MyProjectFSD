import "item-quantity-dropdown/lib/item-quantity-dropdown.min"

import $ from 'jquery';

$(document).ready(() => {/**/
   let defaultDropDownOptions = {setSelectionText: (itemCount, totalItems) => {
            if (totalItems > 0) {
                $(".iqdropdown .iqdropdown-menu-buttons .iqdropdown-clear").css("display", "flex");
                if (totalItems > 1) {
                    if (totalItems > 4) {
                        if (totalItems > 20) {
                            if (totalItems % 10 > 0) {
                                if (totalItems % 10 > 1) {
                                    if (totalItems % 10 > 4) {
                                        return totalItems + 'гостей'
                                    } else {
                                        return totalItems + 'гостя';
                                    }
                                } else {
                                    return totalItems + ' гость';
                                }
                            } else {
                                return totalItems + ' гостей';
                            }
                        } else {
                            return totalItems + ' гостей';
                        }
                    } else {
                        return totalItems + ' гостя';
                    }
                } else {
                    return totalItems + " гость";
                }
            } else {
                $(".iqdropdown .iqdropdown-menu-buttons .iqdropdown-clear").css("display", "none");
                return 'Сколько гостей';

            }
        }};
   initDropdown($(".default .iqdropdown"), defaultDropDownOptions);

    $(".iqdropdown .iqdropdown-item-controls button.button-decrement").text("-");
    $(".iqdropdown .iqdropdown-item-controls button.button-increment").text("+");
    $('.iqdropdown').off('click');
    let spans = document.getElementsByClassName("iqdropdown__span-icons");

    for (let i = 0; i < spans.length; i++) {
        spans[i].addEventListener('click', function (event) {
            let menu = spans[i].nextSibling.nextSibling.id;
            let $menuId = $(`#${menu}`);
            if ($menuId.hasClass("active")) {
                $menuId.removeClass("active");
                $menuId.hide();
            } else {
                $menuId.addClass("active");
                $menuId.show();
                $menuId.focus();
            }

        })
    }
    /*let clearButtons = document.getElementsByClassName("iqdropdown-clear");*/
    /*for (let i = 0; i < clearButtons.length; i++) {
        clearButtons[i].addEventListener('click', function (event) {
            let clearButton = clearButtons[i].id;
            let $clearButtonId = $(`#${clearButton}`);
            let items = $clearButtonId.parents(".iqdropdown-menu")[0].getElementsByClassName("iqdropdown-menu-option");
            for (let j = 0; j < items.length; j++) {
                let counter = items[j].querySelector(".counter");
                counter.innerHTML = "0";
            }
            //$('')
            let content = $clearButtonId.parents(".iqdropdown")[0].children[0];
            $clearButtonId.css("display", "none");
        })
    }*/
    $(".iqdropdown-clear").click(function (event) {
        initDropdown($(this).closest(".iqdropdown"), defaultDropDownOptions);
        /*let counters = $(this).closest(".iqdropdown-menu").find(".counter");
        console.log(counters);
        counters.text("0");
        $(this).css("display", "none");*/

    });

    function initDropdown(elem, options) {
        $('.default .iqdropdown').iqDropdown(options);
    }

    $('.iqdropdown2 .iqdropdown').iqDropdown({
        setSelectionText: (itemCount, totalItems) => {
            let bedroom = "";
            let bed = "";
            if (totalItems > 0) {
                $(".iqdropdown .iqdropdown-menu-buttons .iqdropdown-clear").css("display", "flex");
                if (itemCount["item1"] > 1) {
                    if (itemCount["item1"] > 4) {
                        if (itemCount["item1"] > 20) {
                            if (itemCount["item1"] % 10 > 0) {
                                if (itemCount["item1"] % 10 > 1) {
                                    if (itemCount["item1"] % 10 > 4) {
                                        bedroom = itemCount["item1"] + 'спален'
                                    } else {
                                        bedroom = itemCount["item1"] + 'спальни';
                                    }
                                } else {
                                    bedroom = itemCount["item1"] + ' спальня';
                                }
                            } else {
                                bedroom = itemCount["item1"] + ' спален';
                            }
                        } else {
                            bedroom = itemCount["item1"] + ' спален';
                        }
                    } else {

                        bedroom = itemCount["item1"] + ' спальни';
                    }
                } else {
                    bedroom = itemCount["item1"] + " спален";
                }
                if (itemCount["item2"] > 1) {
                    if (itemCount["item2"] > 4) {
                        if (itemCount["item2"] > 20) {
                            if (itemCount["item2"] % 10 > 0) {
                                if (itemCount["item2"] % 10 > 1) {
                                    if (itemCount["item2"] % 10 > 4) {
                                        bed = itemCount["item2"] + 'кроватей'
                                    } else {
                                        bed = itemCount["item2"] + 'кровати';
                                    }
                                } else {
                                    bed = itemCount["item2"] + ' кровать';
                                }
                            } else {
                                bed = itemCount["item2"] + ' кроватей';
                            }
                        } else {
                            bed = itemCount["item2"] + ' кроватей';
                        }
                    } else {

                        bed = itemCount["item2"] + ' кровати';
                    }
                } else {
                    bed = itemCount["item2"] + " кроватей";
                }
                return bedroom + ", " + bed + "..."
            } else {
                $(".iqdropdown .iqdropdown-menu-buttons .iqdropdown-clear").css("display", "none");
                return '0 спален, 0 кроватей...';

            }


        }
    })
});

