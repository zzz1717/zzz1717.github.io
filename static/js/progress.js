
// let now = new Date();
// let currentYear = now.getFullYear();
// let start = new Date(currentYear, 0, 1);
// let end = new Date(currentYear, 11, 31);
// let current = now - start;
// let sum = end - start;
// let percent = current / sum;
// console.log(percent);
// console.log(start);
// console.log(now);
// console.log(end);

function calcYearProgress() {


    let now = new Date();
    let currentYear = now.getFullYear();
    let start = new Date(currentYear, 0, 1);
    let end = new Date(currentYear, 11, 31);
    let current = now - start;
    let sum = end - start;
    let percent = current / sum;
    return (percent * 100) + "%";

}

function calcCountDown() {
    let now = new Date();
    let currentYear = now.getFullYear();
    let end = new Date(currentYear + 1, 0, 1);
    let remainTime = (end - now) / 1000;
    let hour = 60 * 60;
    let minute = 60;
    let remainHour = parseInt(remainTime / hour);
    let remainMinute = parseInt((remainTime - remainHour * hour) / minute);
    let remainSecond = parseInt(remainTime - remainMinute * minute - remainHour * hour);
    return remainHour + "小时 :" + remainMinute + "分钟 :" + remainSecond + "秒";

}

function setYearProgress() {

    $(".progress-bar").css("width", calcYearProgress);
    $(".progress-bar").text(calcYearProgress);
    $("#countdown").text(calcCountDown);
}

$(document).ready(

    setInterval("setYearProgress()", 1000),
    console.log("You are such disgusting.🤑")

)





