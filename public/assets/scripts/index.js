const APIKey = "8bebd070f80dace3c5498124f468dc36"
var response;

function weatherCall() {
    var queryURL = `https://api.openweathermap.org/data/2.5/forecast?zip=80110&appid=${APIKey}`
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then((res) => {
        if(res.cod == '200') {
            console.log('success')
            response = res
            check()
        }else{}
    })
}

function check() {
    console.log(response.list)
    hr24Check()
}

function responseFormat() {
    let obj = []
    for(const i of response.list) {
        let timeStamp = new Date(i.dt*1000)
        let loopObj = {time: new Date(i.dt*1000), temp: Math.round(tempConv(i.main.temp)) + '°f', sky: i.weather[0].description, wind: i.wind.speed}
        console.log(loopObj)
        obj.push(loopObj)
    }
    response = obj
    console.log(response)
}

function hr24Check() {
    for(var i = 0 ; i < 8; i++) {
        console.log(Math.round(tempConv(response.list[i].main.temp)) + '°f')
    }
    responseFormat()
}

function tempConv(input) {
    return (input - 273.15) * 9/5 + 32
}

weatherCall()