/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function() {
    'use strict';

    var data;

    var validItems = [
        'browser-name',
        'browser-platform-version',
        'browser-version',
        'device-sku',
        'device-dpi',
        'device-logical-processors',
        'device-max-touch-points',
        'device-pixel-height',
        'device-pixel-width',
        'device-role',
        'os-architecture',
        'os-build',
        'os-language',
        'os-manufacturer',
        'os-mode',
        'os-sku'
    ];

    try {
        var dataObject = JSON.parse(window.external.getHostEnvironmentValue(validItems));
        data= JSON.stringify(dataObject, undefined, 4);
    } catch (e) {
        data = e;
    }

    document.getElementById('output').innerHTML = data;
})();
