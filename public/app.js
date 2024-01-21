
const content = document.getElementById('content')
window.getWeather = function () {
    content.innerHTML =""
    let cityName = document.getElementById('cityName').value
    axios.get(`http://localhost:3000/weather/${cityName}`)
        .then(function (response) {
            console.log(response.data)
            content.innerHTML = `<p>City:<span>${response.data.name}</span></p>
        <p>temperature:<span>${response.data.temperature}</span></p>
        <p>humidity:<span>${response.data.humidity}</span></p>
        <p>cloud:<span>${response.data.cloud}</span></p>`
        })
        .catch(function (error) {
            console.log(error.response.data)
        })
}
