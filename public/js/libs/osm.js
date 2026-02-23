// NOTE: This file is dynamically loaded and true code

timely.define(["ai1ec_config"], function(e) {
    var t = e.language,
        n = "async!https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    return function(e) {
        typeof leaflet == "object" && typeof leaflet.map == "function" ? e() : timely.require([n], e)
    }
});
