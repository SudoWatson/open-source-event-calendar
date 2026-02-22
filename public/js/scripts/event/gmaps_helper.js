// Believe this is generated via pages/event.js
// That would explain why this file was a single line long.
// FYI GitHub search does not search all files. Which is why I referenced this (seemingly) generated file instead of the (seemingly) sourced event.js
// Use `grep -rnC 2 "search content"` for searching
timely.define(["jquery_timely"], function(e) {
    var t = function() {
            var e = {
                    zoom: 14,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                },
                t = new google.maps.Map(document.getElementById("osec-gmap-canvas"), e),
        
                n = new google.maps.Marker({
                    map: t
                }),
                r = new google.maps.Geocoder;
            r.geocode({
                address: document.getElementById("ai1ec-gmap-address").value
            }, function(e, r) {
                r === google.maps.GeocoderStatus.OK && (t.setCenter(e[0].geometry.location), n.setPosition(e[0].geometry.location))
            })
        },
        n = function() {
            var t = e(".ai1ec-gmap-container-hidden:first");
            e(this).remove(), t.hide(), t.removeClass("ai1ec-gmap-container-hidden"), t.fadeIn()
        };
    return {
        handle_show_map_when_clicking_on_placeholder: n,
        init_gmaps: t
    }
});
