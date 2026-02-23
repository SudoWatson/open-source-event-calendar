// NOTE: This file is dynamically loaded and true code

timely.define(["ai1ec_config"], function(e) {
    var t = e.language,
        n = "async!https://maps.google.com/maps/api/js?sensor=false&language=" + t;
    return function(e) {
        // Take a function e. Check that google script has been loaded
        // If google.maps exists, it's been loaded and can run e
        // Otherwise, require the google maps script and then run e
        typeof google == "object" && typeof google.maps == "object" ? e() : timely.require([n], e)
    }
});
