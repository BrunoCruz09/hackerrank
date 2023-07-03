"use strict";

let lonelyInt = [0, 0, 1, 2, 1];
function lonelyinteger(a) {
    let uniqueNumber = a.filter(function (value) {
        return a.indexOf(value) === a.lastIndexOf(value)
    })
    return uniqueNumber[0]
}
lonelyinteger(lonelyInt)