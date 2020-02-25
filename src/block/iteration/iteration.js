/*
class EventIter {
    constructor(parentContainer) {
        this.parentContainer = parentContainer;
        this.eventPlus = null;
        this.eventMinus = null;
    }

    plus() {
        let content = event.currentTarget.previousSibling.previousSibling;
        let text = String(parseInt(content.innerText) + 1);
        content.innerText = text;

        this.eventPlus(); // вызываем событие
        if (text !== '0') {
            content.previousSibling.previousSibling.disabled = false;
        }
    }


    min() {
        let content = event.currentTarget.nextSibling.nextSibling;
        let text = String(parseInt(content.innerText) - 1);
        content.innerText = text;
        this.eventMinus(); // вызываем событие
        if (text === '0') {
            event.currentTarget.disabled = true;
        }
    }

    handlerPlus(handler) {
        this.eventPlus = handler;
    }

    handlerMinus(handler) {
        this.eventMinus = handler;
    }
}



class Iteration {

    constructor(container) {
        this.container = container;
        this.iteration();
        this.eventIter;
    }
    iteration() {
        var buttonsPlus = this.container.querySelectorAll('.iteration__button-plus');
        var buttonsMinus = this.container.querySelectorAll('.iteration__button-minus');
        let parent = buttonsMinus[0].parentNode.parentNode;
        this.eventIter = new EventIter(parent);
        buttonsPlus = [].slice.call(buttonsPlus);
        buttonsPlus.forEach(element => {
            element.addEventListener("click", this.eventIter.plus.bind(this.eventIter));
        });
        buttonsMinus = [].slice.call(buttonsMinus);
        buttonsMinus.forEach(element => {
            element.addEventListener("click", this.eventIter.min.bind(this.eventIter));
        });
    }
}


export { Iteration };*/

import $ from "jquery";

$(document).ready(function () {
    $(".iteration__button-plus").on("click", function (event) {
        let number = $(".iteration__div-num").val();
        number = Number(number) + 1;
        $(".iteration__div-num").val(number);
    });
    $(".iteration__button-minus").on("click", function (event) {
            let number = $(".iteration__div-num").val();
            if (Number(number) > 0) {
                number = Number(number) - 1;
                $(".iteration__div-num").val(number);

            }
        }
    );

});