Promise.all([d3.json("https://unpkg.com/world-atlas@1.1.4/world/110m.json"), d3.json("https://pkgstore.datahub.io/dde12c20f3ab8a8303957b9169f6e3a1/data/ghi_data_json/data/047d793c9c5368cc855d50308cbe3662/ghi_data_json.json")
])
  .then(values => createMap(values));

function createMap(values){
    drawMap(values[0]);
    showHungerLevels(values[1]);
}

function drawMap(data){
    console.log(data);
}
function showHungerLevels(data){
    console.log(data);
}
