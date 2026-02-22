// Figure out how to call this.
// This might need to be put into event.js?
timely.define(["jquery_timely"], function ($) {

    function init_leaflet() {
        var mapEl = document.getElementById("osec-osm-canvas");
        if (!mapEl) return;

        // var latlng = mapEl.dataset.latlng;
        // if (!latlng) return;

        // var parts = latlng.split(",");
        // var lat = parseFloat(parts[0]);
        // var lng = parseFloat(parts[1]);
        let lat = 5.0;
        let lng = 5.0;

        var map = L.map(mapEl).setView([lat, lng], 14);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors"
        }).addTo(map);

        L.marker([lat, lng]).addTo(map);
    }

    function handle_show_map_when_clicking_on_placeholder() {
        var container = $(".ai1ec-gmap-container-hidden:first");
        $(this).remove();
        container.hide();
        container.removeClass("ai1ec-gmap-container-hidden");
        container.fadeIn();

        init_leaflet();
    }

    return {
        handle_show_map_when_clicking_on_placeholder,
        init_osm: init_leaflet
    };
});
