let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let daysDisplay = document.getElementById("days");
let datesDisplay = document.getElementById("dates");


const updateDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturaday"];
const updateMonth = [1,2,3,4,5,6,7,8,9,10,11,12];

const updateTime = () => {

    setInterval(() => {

        setInterval(() => {

            const currentDate = new Date();

            daysDisplay.innerText = updateDays[currentDate.getDay()];
            let datesShow = currentDate.getDate();
            let monthShow = updateMonth[currentDate.getMonth()];
            let fullYearShow = currentDate.getFullYear();

            datesDisplay.innerText = `${datesShow}-${monthShow}-${fullYearShow}`;

            let hr = currentDate.getHours();
            let min = currentDate.getMinutes();
            let sec = currentDate.getSeconds();

            let session = hr >= 12 ? "PM" : "AM";
            hr = hr % 12 || 12;

            hr = hr < 10 ? "0" + hr : hr;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;

            hours.innerText = hr;
            minutes.innerText = min;
            seconds.innerText = sec;

            document.getElementById("session").innerText = session;

        }, 1000);

    });
};
updateTime();













