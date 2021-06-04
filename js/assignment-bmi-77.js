
var movieDirector = ["Gussy Seligson", "Mic Phalip", "Tawnya Scragg", "Ansley Bolles", "Paulette Fennelly"];
var genreArray = ["Action", "Comedy", "Fantasy", "Horror", "Drama", "Thriller"];
var countryArray = ["Brazil", "Canada", "China", "Korea", "Russia", "USA"];
var languageArray = ["Afrikaans", "Chinese", "English", "Italian", "Korean"];

var genreData;
var countryData;
var languageData;

let chartData = {
  chart: { type: 'column' },
  title: { text: 'HighChartdemo' },
  xAxis: { categories: ['Action', 'Comedy', 'Fantasy', 'Horror', 'Drama', 'Thriller'] },
  yAxis: { title: { text: 'Movie Title' } },
}

document.addEventListener('DOMContentLoaded', async function () {

  const url = '../Assignment1/data/movie_data.json';

  //Get the data using fetch and add it to the series
  chartData.series = await getChartData(url);

  var stat = createStatData(chartData.series);

  console.log(stat);

  /*
  var genreData = "[";

  for (var i = 0; i < genreStat.length; i++) {
    if (i != genreStat.length - 1) {
      genreData += '{"name": ' + movieDirector[i] + "," + '"data":' + " [" + genreStat[i].Action + "," + genreStat[i].Comedy + "," + genreStat[i].Fantasy + "," + genreStat[i].Horror + ","
        + genreStat[i].Drama + "," + genreStat[i].Thriller + "]},"
    }
    else {
      genreData += '{"name": ' + movieDirector[i] + "," + '"data":' + " [" + genreStat[i].Action + "," + genreStat[i].Comedy + "," + genreStat[i].Fantasy + "," + genreStat[i].Horror + ","
        + genreStat[i].Drama + "," + genreStat[i].Thriller + "]}"
    }
  }
  genreData += "]"
  console.log(genreData);
  var obj = JSON.parse(genreData);
  console.log(obj);
*/

  genreData = createGenreJSON(stat);
  countryData = createReleasedCountryJSON(stat);
  languageData = createMovieLanguageJSON(stat);

  chartData.series = languageData;
  console.log(genreData);
  printHighChart(chartData);

});


async function genreChart() {

  chartData.series = genreData;
  chartData.title = [{ "text": "Genre" }];
  chartData.xAxis = [{ "categories": genreArray }];
  chartData.yAxis = [{ "title": { "text": "Genre" } }];
  printHighChart(chartData);
}

async function countryChart() {

  chartData.series = countryData;
  chartData.title = [{ "text": "Released Country" }];
  chartData.xAxis = [{ "categories": countryArray }];
  chartData.yAxis = [{ "title": { "text": "Released Country" } }];
  printHighChart(chartData);
}

async function languageChart() {

  chartData.series = languageData;
  chartData.title = [{ "text": "Movie Language" }];
  chartData.xAxis = [{ "categories": languageArray }];
  chartData.yAxis = [{ "title": { "text": "Movie Language" } }];
  printHighChart(chartData);
}

async function changeChart(data) {

  chartData.series = data;

  printHighChart(chartData);
}

function fetchData(url) {
  fetch(url)
  return fetch(url)
    .then(response => response.json())
}

async function getChartData(url) {
  let data = await fetchData(url);
  return data;
}

async function printHighChart(chartData) {
  var myChart = Highcharts.chart('container', chartData);
}

function createStatData(data) {
  var statData = [];

  var directorGenreStat1 = [];
  var directorGenreStat2 = [];
  var directorGenreStat3 = [];
  var directorGenreStat4 = [];
  var directorGenreStat5 = [];

  var directorCountryStat1 = [];
  var directorCountryStat2 = [];
  var directorCountryStat3 = [];
  var directorCountryStat4 = [];
  var directorCountryStat5 = [];

  var directorLanguageStat1 = [];
  var directorLanguageStat2 = [];
  var directorLanguageStat3 = [];
  var directorLanguageStat4 = [];
  var directorLanguageStat5 = [];


  chartData.series.forEach((data) => {

    if (data.movieDirector == movieDirector[0]) {

      (directorGenreStat1[data.genre] ? directorGenreStat1[data.genre]++ :
        directorGenreStat1[data.genre] = 1);

      (directorCountryStat1[data.releasedCountry] ? directorCountryStat1[data.releasedCountry]++ :
        directorCountryStat1[data.releasedCountry] = 1);

      (directorLanguageStat1[data.movieLanguage] ? directorLanguageStat1[data.movieLanguage]++ :
        directorLanguageStat1[data.movieLanguage] = 1);

    }
    if (data.movieDirector == movieDirector[1]) {
      (directorGenreStat2[data.genre] ? directorGenreStat2[data.genre]++ :
        directorGenreStat2[data.genre] = 1);

      (directorCountryStat2[data.releasedCountry] ? directorCountryStat2[data.releasedCountry]++ :
        directorCountryStat2[data.releasedCountry] = 1);

      (directorLanguageStat2[data.movieLanguage] ? directorLanguageStat2[data.movieLanguage]++ :
        directorLanguageStat2[data.movieLanguage] = 1);
    }
    if (data.movieDirector == movieDirector[2]) {
      (directorGenreStat3[data.genre] ? directorGenreStat3[data.genre]++ :
        directorGenreStat3[data.genre] = 1);

      (directorCountryStat3[data.releasedCountry] ? directorCountryStat3[data.releasedCountry]++ :
        directorCountryStat3[data.releasedCountry] = 1);

      (directorLanguageStat3[data.movieLanguage] ? directorLanguageStat3[data.movieLanguage]++ :
        directorLanguageStat3[data.movieLanguage] = 1);
    }
    if (data.movieDirector == movieDirector[3]) {
      (directorGenreStat4[data.genre] ? directorGenreStat4[data.genre]++ :
        directorGenreStat4[data.genre] = 1);

      (directorCountryStat4[data.releasedCountry] ? directorCountryStat4[data.releasedCountry]++ :
        directorCountryStat4[data.releasedCountry] = 1);

      (directorLanguageStat4[data.movieLanguage] ? directorLanguageStat4[data.movieLanguage]++ :
        directorLanguageStat4[data.movieLanguage] = 1);
    }
    if (data.movieDirector == movieDirector[4]) {
      (directorGenreStat5[data.genre] ? directorGenreStat5[data.genre]++ :
        directorGenreStat5[data.genre] = 1);


      (directorCountryStat5[data.releasedCountry] ? directorCountryStat5[data.releasedCountry]++ :
        directorCountryStat5[data.releasedCountry] = 1);

      (directorLanguageStat5[data.movieLanguage] ? directorLanguageStat5[data.movieLanguage]++ :
        directorLanguageStat5[data.movieLanguage] = 1);

    }
    statData[0] = directorGenreStat1;
    statData[1] = directorGenreStat2;
    statData[2] = directorGenreStat3;
    statData[3] = directorGenreStat4;
    statData[4] = directorGenreStat5;

    statData[5] = directorCountryStat1;
    statData[6] = directorCountryStat2;
    statData[7] = directorCountryStat3;
    statData[8] = directorCountryStat4;
    statData[9] = directorCountryStat5;

    statData[10] = directorLanguageStat1;
    statData[11] = directorLanguageStat2;
    statData[12] = directorLanguageStat3;
    statData[13] = directorLanguageStat4;
    statData[14] = directorLanguageStat5;

  })
  return statData;
}

function createGenreJSON(stat) {

  var genreData = [
    { "name": movieDirector[0], "data": [stat[0].Action, stat[0].Comedy, stat[0].Fantasy, stat[0].Horror, stat[0].Drama, stat[0].Thriller] },
    { "name": movieDirector[1], "data": [stat[1].Action, stat[1].Comedy, stat[1].Fantasy, stat[1].Horror, stat[1].Drama, stat[1].Thriller] },
    { "name": movieDirector[2], "data": [stat[2].Action, stat[2].Comedy, stat[2].Fantasy, stat[2].Horror, stat[2].Drama, stat[2].Thriller] },
    { "name": movieDirector[3], "data": [stat[3].Action, stat[3].Comedy, stat[3].Fantasy, stat[3].Horror, stat[3].Drama, stat[3].Thriller] },
    { "name": movieDirector[4], "data": [stat[4].Action, stat[4].Comedy, stat[4].Fantasy, stat[4].Horror, stat[4].Drama, stat[4].Thriller] }];

  return genreData;
}

function createReleasedCountryJSON(stat) {
  var countryJSON = [
    { "name": movieDirector[0], "data": [stat[5].Brazil, stat[5].Canada, stat[5].China, stat[5].Korea, stat[5].Russia, stat[5].USA] },
    { "name": movieDirector[1], "data": [stat[6].Brazil, stat[6].Canada, stat[6].China, stat[6].Korea, stat[6].Russia, stat[6].USA] },
    { "name": movieDirector[2], "data": [stat[7].Brazil, stat[7].Canada, stat[7].China, stat[7].Korea, stat[7].Russia, stat[7].USA] },
    { "name": movieDirector[3], "data": [stat[8].Brazil, stat[8].Canada, stat[8].China, stat[8].Korea, stat[8].Russia, stat[8].USA] },
    { "name": movieDirector[4], "data": [stat[9].Brazil, stat[9].Canada, stat[9].China, stat[9].Korea, stat[9].Russia, stat[9].USA] }];

  return countryJSON;
}

function createMovieLanguageJSON(stat) {
  var languageJSON = [
    { "name": movieDirector[0], "data": [stat[10].Afrikaans, stat[10].Chinese, stat[10].English, stat[10].Italian, stat[10].Korean] },
    { "name": movieDirector[1], "data": [stat[11].Afrikaans, stat[11].Chinese, stat[11].English, stat[11].Italian, stat[11].Korean] },
    { "name": movieDirector[2], "data": [stat[12].Afrikaans, stat[12].Chinese, stat[12].English, stat[12].Italian, stat[12].Korean] },
    { "name": movieDirector[3], "data": [stat[13].Afrikaans, stat[13].Chinese, stat[13].English, stat[13].Italian, stat[13].Korean] },
    { "name": movieDirector[4], "data": [stat[14].Afrikaans, stat[14].Chinese, stat[14].English, stat[14].Italian, stat[14].Korean] }];

  return languageJSON;
}