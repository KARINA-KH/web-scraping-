var request = require("request"),
    cheerio = require("cheerio");

   const MILISECONDS_IN_A_DAY = 86400000;
 function formatDate (date1){ 
   // console.log(date1);
    var date = new Date(date1);
    console.log(date);
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 1).toString();

    var day = date.getDate().toString();
    console.log(`${year}-${month.length === 1 ? `0${month}` : month}-${day.length === 1 ? `0${day}` : day}`);
    return `${year}-${month.length === 1 ? `0${month}` : month}-${day.length === 1 ? `0${day}` : day}`;
}
    var day = 'yesterday';
    switch(day) {
        case 'yesterday':
           a -= MILISECONDS_IN_A_DAY; 
        break;    
        case 'today':
            a = MILISECONDS_IN_A_DAY;
        break;    
        case 'tomorrow':
            a += MILISECONDS_IN_A_DAY;  
        break;  
    }

    url = `https://ua.sinoptik.ua/%D0%BF%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0-%D0%BA%D0%B8%D1%97%D0%B2/${formatDate(Date.now() + a)}` ;

request(url, function (error, response, body) {
    if (!error) {
        var $ = cheerio.load(body);
            console.log($('#bd1 > .temperature > .max > span').text().replace('+', '').replace('°', ''));
            console.log($('#bd1 > .temperature > .min > span').text().replace('+', '').replace('°', ''));
    } else {
        console.log("Произошла ошибка: " + error);
    }
});