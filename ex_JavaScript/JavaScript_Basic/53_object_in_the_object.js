// Assign attributes to other objects____________

const AGV_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};
  
function getTempOfTmrw(avgTemperatures) {
    const { tomorrow: temOfTomorrow } = avgTemperatures;
    return temOfTomorrow;
}
  
console.log((getTempOfTmrw(AGV_TEMPERATURES)));

//___________________________________________________________________

const LOCAL_FORECAST = {
    today: {min: 72, max: 83},
    tomorrow: {min: 73.5, max: 95.4}
};

function getMinOfTmw(forecast) {
    const {tomorrow: {min: minOfTmw}} = forecast;
    return minOfTmw;
}

console.log(getMinOfTmw(LOCAL_FORECAST));


