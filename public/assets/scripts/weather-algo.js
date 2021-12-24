function scoring(arr) {
    // score based on different variables
    for(const i of arr){
        let score = 0
        let timeScore = timeCheck(i.time)
        let tempScore = tempCheck(i.temp)
        let skyScore = skyCheck(i.sky)
        let windScore = windCheck(i.wind)
    }
}

function timeCheck(time) {
    let score = 0
    console.log(time.getHours())
    if(time.getHours() > 8 && time.getHours() < 20) {
        score = score + 1
    }
    if(time.getHours() > 11 && time.getHours() < 17) {
        score = score + 2
    }
    return score
}

function tempCheck(temp) {
    let score = 0
    // console.log(temp)
    return score
}

function skyCheck(sky) {
    let score = 0
    let skyArr = []
    return score
}

function windCheck(wind) {
    let score = 0
    return score
}