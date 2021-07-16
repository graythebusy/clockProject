var days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
var months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"]

function updateTime() {
    var date = new Date()
    var day = date.getDay()
    var mon = months[date.getMonth()]
    var time = {
        hour:   date.getHours(),
        min:    date.getMinutes(),
        sec:    date.getSeconds()
    }

    if (time.hour < 10) {
        time.hour = "0" + time.hour
    }

    if (time.min < 10 && time.min >= 0) {
        time.min = "0" + time.min
    }

    if (time.sec < 10 && time.sec >= 0) {
        time.sec = "0" + time.sec
    }

    var timeTxt = time.hour + ":" + time.min + ":" + time.sec

    var text = day + " " + mon + " " + date.getFullYear() + " - " + days[day] + " | " + timeTxt
    document.getElementById('time').innerHTML = text;

    setAkrep(time.hour)
    setYelkovan(time.min)
    setSaniye(time.sec)
}

function setAkrep(hour) {
    var deg = (30 * hour) + 90
    deg = deg.toString()
    document.getElementById('akrep').style.transform = "rotate(" + deg + "deg)"
}

function setYelkovan(min) {
    var deg = (6 * min) + 90
    deg = deg.toString()
    document.getElementById('yelkovan').style.transform = "rotate(" + deg + "deg)"
}

function setSaniye(sec) {
    var deg = (6 * sec) + 90
    deg = deg.toString()
    document.getElementById('saniye').style.transform = "rotate(" + deg + "deg)"
}

setInterval(updateTime, 100)