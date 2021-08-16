// ==UserScript==
// @name         silisili净化
// @namespace    https://kymirai.github.io/MiCode/
// @version      1.0
// @author       KYMirai
// @include      *://*.silisili.in/*
// @grant        JQuery
// @compatible   MiCode
// ==/UserScript==

function modify() {
    // 禁止alert弹窗，改为Toast消息
    window.alert = text => MiCode.toast(text);

    window.ads = {};

    $('a').each((_index, element) => {
        if (/.*(visvn\.cn|ctrip\.com).*/.test($(element).attr("href"))) {
            $(element).parent().remove();
        }
    });
}

modify(); $(() => modify());
