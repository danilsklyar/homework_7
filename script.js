let info = document.querySelector('.container')
let btn = document.querySelector('button');


btn.addEventListener('click', (show) => {
    info.classList.add('show');
    let inputCity = document.querySelector('input').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=40b1ce88669a163c1e3766f1ba6b2f07`)
        .then(function (response) {
            return response.json()
        })
        .then(function (result) {
            console.log(result)
            document.querySelector('.degrees').innerHTML = Math.round(result.main.temp) - 273 + '&deg;С';
            document.querySelector('.feels').innerHTML = Math.round(result.main.feels_like) - 273 + '&deg;С';
            document.querySelector('.cloudiness').textContent = result.weather[0]['main'];
            document.querySelector('.cloudiness-info').textContent = result.weather[0]['description'];
            document.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${result.weather[0]['icon']}@2x.png" width="50px" height="50px" alt=""></img>`
        });
})

