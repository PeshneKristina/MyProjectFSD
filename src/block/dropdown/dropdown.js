import "./../iteration/iteration.js";
import "item-quantity-dropdown/lib/item-quantity-dropdown.min"
//import "item-quantity-dropdown"

import {Iteration} from "./../iteration/iteration.js"
//import $ from "jquery";


/*
class Counter {
    constructor(dropdown__divText, buttonClear, numberDivArr) {
        this.dropdown__divText = dropdown__divText;
        this.numberDivArr = numberDivArr;
        this.buttonClear = buttonClear;
        this.count = 0;
        this._addHandler();
    }

    counterPlus() {
        this.count = this.count + 1;
        this._equal();
    }

    counterMinus() {
        this.count = this.count - 1;
        this._equal();
    }

    resetValues() {
        this.numberDivArr.forEach(element => {
            element.innerText = '0';
            element.previousSibling.previousSibling.disabled = true;
            this.dropdown__divText.innerText = 'Сколько гостей';
            this.count = 0;
            this.buttonClear.innerText = '';
        });
    }

    _addHandler() {
        this.numberDivArr = [].slice.call(this.numberDivArr);
        this.buttonClear.addEventListener('click', this.resetValues.bind(this));
    }

    _equal() {
        if (this.count > 0) {
            this.buttonClear.innerText = "Очистить";
            if (this.count > 1) {
                if (this.count > 4) {
                    if (this.count > 20) {
                        if (this.count % 10 > 0) {
                            if (this.count % 10 > 1) {
                                if (this.count % 10 > 4) {
                                    this.dropdown__divText.innerText = String(this.count) + ' гостей'
                                } else {
                                    this.dropdown__divText.innerText = String(this.count) + ' гостя';
                                }
                            } else {
                                this.dropdown__divText.innerText = String(this.count) + ' гость';
                            }
                        } else {
                            this.dropdown__divText.innerText = String(this.count) + ' гостей';
                        }
                    } else {
                        this.dropdown__divText.innerText = String(this.count) + ' гостей';
                    }
                } else {
                    this.dropdown__divText.innerText = String(this.count) + ' гостя';
                }
            } else {
                this.dropdown__divText.innerText = String(this.count) + " гость";
            }
        } else {
            this.dropdown__divText.innerText = 'Сколько гостей';
            this.buttonClear.innerText = ""
        }
    }
}


function dropdown() {
    let dropdown = document.querySelectorAll('.dropdown');
    dropdown = [].slice.call(dropdown);

    dropdown.forEach(element => {
        let iteration = new Iteration(element);
        let ev = iteration.eventIter;    // объект класса с событием
        let divClear = element.querySelector('.dropdown__div-clear');
        let number_div = element.querySelectorAll('.iteration__div-num');
        let dropdown__divText = element.querySelector('.dropdown__div-text');
        let counter = new Counter(dropdown__divText, divClear,number_div);
        ev.handlerPlus(counter.counterPlus.bind(counter));
        ev.handlerMinus(counter.counterMinus.bind(counter));
        let content = element.querySelector('.dropdown__div-content');
        content.addEventListener("click", show);
    });
}

function show() {
    if (event.currentTarget.nextSibling.nextSibling.style.display === "none" || event.currentTarget.nextSibling.nextSibling.style.display === '')
        event.currentTarget.nextSibling.nextSibling.style.display = "block";
    else
        event.currentTarget.nextSibling.nextSibling.style.display = "none";

}

dropdown();
*/

import $ from 'jquery';
/*
$(document).ready(function () {
    var hiddenBox = $(".dropdown__div-items");
    $(".dropdown__div-icon").on("click", function (event) {

        if (hiddenBox.hasClass('active')) {
            hiddenBox.hide();
            hiddenBox.removeClass("active");
            $(".dropdown__div-content").css('border-radius','4px');
        } else {
            hiddenBox.show();
            hiddenBox.addClass("active");
            $(".dropdown__div-content").css('border-radius', '4px 4px 0 0 ');

        }
    });

});*/

$(document).ready(() => {
    $('.iqdropdown').iqDropdown({ });
});



