import "./../iteration/iteration.js";
import "item-quantity-dropdown/lib/item-quantity-dropdown.min"

import $ from 'jquery';

$(document).ready(() => {/**/
    $('.default .iqdropdown').iqDropdown({
        setSelectionText: (itemCount, totalItems) => {
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
        }
    });
    $(".iqdropdown .iqdropdown-item-controls button.button-decrement").text("-");
    $(".iqdropdown .iqdropdown-item-controls button.button-increment").text("+");


    /* (function ($) {
         /!*const defaults = {
             maxItems: Infinity,
             minItems: 0,
             selectionText: 'item',
             textPlural: 'items',
             controls: {
                 position: 'right',
                 displayCls: 'iqdropdown-content',
                 controlsCls: 'iqdropdown-item-controls',
                 counterCls: 'counter',
             },
             items: {},
             onChange: () => {
             },
             beforeDecrement: () => true,
             beforeIncrement: () => true,
             setSelectionText(itemCount, totalItems) {
                 const usePlural = totalItems !== 1 && this.textPlural.length > 0;
                 const text = usePlural ? this.textPlural : this.selectionText;
                 return `${totalItems} ${text}`;
             },
         };
    *!/
         $.fn.iqDropdown = function (options) {
             this.each(function () {
                 const $this = $(this);
                 const $selection = $this.find('p.iqdropdown-selection').last();
                 const $menu = $this.find('div.iqdropdown-menu');
                 const $items = $menu.find('div.iqdropdown-menu-option');
                 const $clearButton = $this.find('.iqdropdown-menu-buttons .iqdropdown-clear');
                 const dataAttrOptions = {
                     selectionText: $selection.data('selection-text'),
                     textPlural: $selection.data('text-plural'),
                 };
                 const settings = $.extend(true, {}, defaults, dataAttrOptions, options);
                 const itemCount = {};
                 let totalItems = 0;

                 function updateDisplay() {
                     $selection.html(settings.setSelectionText(itemCount, totalItems));
                 }


                 function addControls(id, $item) {
                     const $controls = $('<div />').addClass(settings.controls.controlsCls);
                     const $decrementButton = $(`
           <button class="button-decrement">
             <i class="icon-decrement"></i>
           </button>
         `);
                     const $incrementButton = $(`
           <button class="button-increment">
             <i class="icon-decrement icon-increment"></i>
           </button>
         `);
                     const $counter = $(`<span>${itemCount[id]}</span>`).addClass(settings.controls.counterCls);

                     $item.children('div').addClass(settings.controls.displayCls);
                     $controls.append($decrementButton, $counter, $incrementButton);

                     if (settings.controls.position === 'right') {
                         $item.append($controls);
                     } else {
                         $item.prepend($controls);
                     }

                     $decrementButton.click((event) => {
                         const {items, minItems, beforeDecrement, onChange} = settings;
                         const allowClick = beforeDecrement(id, itemCount);

                         if (allowClick && totalItems > minItems && itemCount[id] > items[id].minCount) {
                             itemCount[id] -= 1;
                             totalItems -= 1;
                             $counter.html(itemCount[id]);
                             updateDisplay();
                             onChange(id, itemCount[id], totalItems);
                         }

                         event.preventDefault();
                     });

                     $incrementButton.click((event) => {
                         const {items, maxItems, beforeIncrement, onChange} = settings;
                         const allowClick = beforeIncrement(id, itemCount);

                         if (allowClick && totalItems < maxItems && itemCount[id] < items[id].maxCount) {
                             itemCount[id] += 1;
                             totalItems += 1;
                             $counter.html(itemCount[id]);
                             updateDisplay();
                             onChange(id, itemCount[id], totalItems);
                         }

                         event.preventDefault();
                     });

                     $item.click(event => event.stopPropagation());

                     return $item;
                 }


                 $clearButton.click(()=>{
                     totalItems=0;
                     $clearButton.css("display:","none");
                 });

                 $this.click(() => {
                     return 0;
                 });

                 $items.each(function () {
                     const $item = $(this);
                     const id = $item.data('id');
                     const defaultCount = Number($item.data('defaultcount') || '0');

                     itemCount[id] = defaultCount;
                     totalItems += defaultCount;
                     setItemSettings(id, $item);
                     addControls(id, $item);
                 });

                 updateDisplay();
             });

             return this;
         };
     }(jQuery));*/

    $('.iqdropdown2 .iqdropdown').iqDropdown({
        setSelectionText: (itemCount, totalItems) => {
            let bedroom="";
            let bed = "";
            if (totalItems > 0) {
                $(".iqdropdown .iqdropdown-menu-buttons .iqdropdown-clear").css("display", "flex");
                if (itemCount["item1"] > 1) {
                    if (itemCount["item1"] > 4) {
                        if (itemCount["item1"] > 20) {
                            if (itemCount["item1"] % 10 > 0) {
                                if (itemCount["item1"] % 10 > 1) {
                                    if (itemCount["item1"] % 10 > 4) {
                                        bedroom =itemCount["item1"] + 'спален'
                                    } else {
                                        bedroom =itemCount["item1"] + 'спальни';
                                    }
                                } else {
                                    bedroom =itemCount["item1"]+ ' спальня';
                                }
                            } else {
                                bedroom =itemCount["item1"] + ' спален';
                            }
                        } else {
                            bedroom =itemCount["item1"] + ' спален';
                        }
                    } else {

                        bedroom =itemCount["item1"] + ' спальни';
                    }
                } else {
                    bedroom =itemCount["item1"] + " спален";
                }
                if (itemCount["item2"] > 1) {
                    if (itemCount["item2"] > 4) {
                        if (itemCount["item2"] > 20) {
                            if (itemCount["item2"] % 10 > 0) {
                                if (itemCount["item2"] % 10 > 1) {
                                    if (itemCount["item2"] % 10 > 4) {
                                        bed =itemCount["item2"] + 'кроватей'
                                    } else {
                                        bed =itemCount["item2"] + 'кровати';
                                    }
                                } else {
                                    bed =itemCount["item2"]+ ' кровать';
                                }
                            } else {
                                bed =itemCount["item2"] + ' кроватей';
                            }
                        } else {
                            bed =itemCount["item2"] + ' кроватей';
                        }
                    } else {

                        bed =itemCount["item2"] + ' кровати';
                    }
                } else {
                    bed =itemCount["item2"] + " кроватей";
                }
                return bedroom + ", " + bed + "..."
            } else {
                $(".iqdropdown .iqdropdown-menu-buttons .iqdropdown-clear").css("display", "none");
                return '0 спален, 0 кроватей...';

            }


        }
    })
});

