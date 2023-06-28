function timeConversion(s) {
    //Write your code here
    let splitTime = s.split(':')
    let hours = parseInt(splitTime[0])
    let minutes = splitTime[1]
    let seconds = splitTime[2].slice(0,2)
    let time = splitTime[2].slice(2,4)

    if (time === 'PM' && hours !== 12) {
        hours+=12
    } else if (time === 'AM' && hours === 12) {
        hours = '00'
    } else if (hours < 10) {
        hours = '0' + hours.toString()
    } else {
        hours = hours.toString()
    }

    console.log([hours, minutes, seconds].join(':'));
}

timeConversion('12:40:22AM')