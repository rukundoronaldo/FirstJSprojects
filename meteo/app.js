//let apikey = '7e5ee149bbc62a04e29cffe6453d701e';
//site pr api https://home.openweathermap.org/;

let apifnction = function(city, apikey) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric&lang=fr`;

        fetch(url).then( reponse => reponse.json().then(data => {
        document.querySelector('#city').innerHTML = `ville : ${data.name}`;
        document.querySelector('#temp').innerHTML = `degre : ${data.main.temp} °`;
        document.querySelector('#humidity').innerHTML =`humidité : ${data.main.humidity} %`;
        document.querySelector('#wind').innerHTML =`vents : ${data.wind.speed} km/h`;
    })
    ).catch(err => console.log('erruer' + err));
};


document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;
    apifnction(ville, '7e5ee149bbc62a04e29cffe6453d701e');
});

apifnction('paris', '7e5ee149bbc62a04e29cffe6453d701e');