const APIKey = "8bebd070f80dace3c5498124f468dc36"

function weatherCall() {
    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?zip=80110&appid=${APIKey}`
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then((res) => {
        if(res.cod == '200') {
            console.log('success')
            response = res
            responseFormat()
        }else{}
    })
}

function responseFormat() {
    let obj = []
    for(const i of response.list) {
        let timeStamp = new Date(i.dt*1000)
        let loopObj = {time: new Date(i.dt*1000), temp: Math.round(tempConv(i.main.temp)), sky: i.weather[0].description, wind: i.wind.speed}
        obj.push(loopObj)
    }
    scoring(obj)
}

function tempConv(input) {
    return (input - 273.15) * 9/5 + 32
}

weatherCall()

//rate poolability and hottubability for 24 hrs and for 5 day span

//what makes ze pool perfect?
// low wind
// clear sky
// sun is up
// best temp

// what makes hot tub perfect?
// cooler temps
// day or night