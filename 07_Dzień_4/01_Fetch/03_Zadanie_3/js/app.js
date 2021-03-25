const url = "https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=";
const urlPL = "PL";
const urlGB = "GB";
const urlUS = "US";



const getHolidays = function(){
    fetch(url+urlGB)
        .then( response => response.json())
        .then( data => {
            console.log(data);
        }
        )
        .catch ( err => console.log(err) );

}

getHolidays();



