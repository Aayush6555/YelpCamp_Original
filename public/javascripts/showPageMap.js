
if (campground.geometry && campground.geometry.coordinates) {
    maptilersdk.config.apiKey = maptilerApiKey;

    const map = new maptilersdk.Map({
        container: 'map', // ID from your show.ejs div
        style: maptilersdk.MapStyle.BRIGHT, // Map style
        center: campground.geometry.coordinates, // [lng, lat]
        zoom: 10
    });

    new maptilersdk.Marker()
        .setLngLat(campground.geometry.coordinates)
        .setPopup(
            new maptilersdk.Popup({ offset: 25 })
                .setHTML(`<h3>${campground.title}</h3><p>${campground.location}</p>`)
        )
        .addTo(map);

} else {
    console.error("Campground has no geometry:", campground);
    // Optionally display a message in the UI
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        mapContainer.innerHTML = `<p class="text-muted">No map data available for this campground.</p>`;
    }
}








// maptilersdk.config.apiKey = maptilerApiKey;

// const map = new maptilersdk.Map({
//     container: 'map',
//     style: maptilersdk.MapStyle.BRIGHT,
//     center: campground.geometry.coordinates, // starting position [lng, lat]
//     zoom: 10 // starting zoom
// });

// new maptilersdk.Marker()
//     .setLngLat(campground.geometry.coordinates)
//     .setPopup(
//         new maptilersdk.Popup({ offset: 25 })
//             .setHTML(
//                 `<h3>${campground.title}</h3><p>${campground.location}</p>`
//             )
//     )
//     .addTo(map)