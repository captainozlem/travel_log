'use strict';

const db = require('../server/db');
const {Countries} = require('../server/db/models');

async function seed() {
  await db.sync({force: true});
  console.log('db synced!');

  const country = await Promise.all([
    Countries.create({
    city: "Sarende",
    continent: "Europe",
    country: "Albania",
    latitude: 39.85,
    longitude: 20.02,
    text: "I was there with MY Star Pride in Summer,2014. "
    }),
    Countries.create({
     city: "Alger",
   continent: "Africa",
    "country": "Algeria",
    "latitude": 36.7,
    "longitude": 3.05,
    "text": "Algeria is one of my first countries I visited when I was a cadet in MV Captain Zaman, I was there in Summer, 2007 "
    }),Countries.create(
    {
    city: "New Castle",
   continent: "Oceania",
    "country": "Australia",
    "latitude": -32.93,
    "longitude": 151.78,
    "text": "I celebrated 2010 NYE in NewCastle, Australia. I was in different parts of the country with Gedenlines",
    image: 'https://res.cloudinary.com/captainozlem/image/upload/v1548638337/248051_10150208740457173_6711223_n.jpg.jpg'
  }),Countries.create(
  {
    city: "Mostar",
    continent: "Europe",
    "country": "Bosnia and Herzegovina",
    "latitude": 43.34,
    "longitude": 17.8,
    "text": "Mostar is such a beautiful town, with tasty wine and good food",
    image:'https://res.cloudinary.com/captainozlem/image/upload/v1548637986/20280380_10155523074337173_2474700737747156673_o.jpg.jpg'
  }),Countries.create(
  {
    city: "Sao Luis",
    continent: "South America",
    "country": "Brazil",
    "latitude": -20.29,
    "longitude": -40.29,
    "text": "One of the most beautiful countries in the world, looking forward to being there again",
    image: 'https://res.cloudinary.com/captainozlem/image/upload/v1548638437/254093_10150208752677173_6710768_n.jpg.jpg'
  }),Countries.create(
  {
    city: "Nessebar",
    "continent": "Europe",
    "country": "Bulgaria",
    "latitude": 42.66,
    "longitude": 27.72,
    "text": "Nessebar is a small city in Bulgarian Blacksea coast, definetely worth to visit!"
  }),Countries.create(
  {
    city: "Quebec City",
    "continent": "North America",
    "country": "Canada",
    "latitude": 46.81,
    "longitude": -71.2,
    "text": "Quebec City is the most European city in N.America, when you are walking in old town, you are feeling like you are in Europe. Good food, it can be dangerous!",
    image:'https://res.cloudinary.com/captainozlem/image/upload/v1548638007/34455666_10156361013312173_8660747538875285504_o.jpg.jpg'
  }),Countries.create(
  {
    city: "Yantai",
    "continent": "Asia",
    "country": "China",
    "latitude": 37.46,
    "longitude": 121.44,
    "text": "I have been many Chinese cities, especially in north. One of my favorite is busy port city Yantai. It is beautiful, and people are so friendly and helpful",
    image:'https://res.cloudinary.com/captainozlem/image/upload/v1548638277/403374_10150986106207173_599990181_n.jpg.jpg'
  }),Countries.create(
  {
    "city": "Bogota",
    "continent": "South America",
    "country": "Canada",
    "latitude": 4.71,
    "longitude": -74.07,
    "text": "Even if I spent only 18 hours for layover in Bogota, it was an enough time to love this country."
  }),Countries.create(
  {
    "city": "San Jose",
    "continent": "North America",
    "country": "Costa Rica",
    "latitude": 9.93,
    "longitude": -84.09,
    "text": "I spent two months in Costa Rica between February 2015 to April 2015 with MSY Wins Spirit, and I had a family reunion in July 2018, so I can easily say, I know lots of things about this beautiful country. Pura Vida!",
    image:'https://res.cloudinary.com/captainozlem/image/upload/v1548637913/11072929_10153158602212173_8614449634494751523_n.jpg.jpg'
  }),Countries.create(
  {
    "city": "Dubrovnik",
    "continent": "Europe",
    "country": "Croatia",
    "latitude": 42.65,
    "longitude": 18.09,
    "text": "I visited this beautiful country many time with MY Star Pride, but it wasn`t enough to see all the beauty during working, so I and my husband spent two weeks in Dalmatia Coast in Summer 2017. Croatia is definetely one of the most beautiful countries in the world, they have everything: Good food, history, nature,crystal clear sea....",
    image:'https://res.cloudinary.com/captainozlem/image/upload/v1548637990/20369035_10155523029397173_4308341252511133791_o.jpg.jpg'
  }),Countries.create(
  {
    "city": "Girne",
    "continent": "Europe",
    "country": "Cyprus",
    "latitude": 35.18,
    "longitude": 33.38,
    "text": "I visited this beautiful island when I was 5!"
  }),Countries.create(
  {
    "city": "Copenhagen",
    "continent": "Europe",
    "country": "Denmark",
    "latitude": 55.67,
    "longitude": 12.56,
    "text": "Happy people`s country, despite of cold, people are warm and welcoming"
  }),Countries.create(
  {
    "city": "Cairo",
    "continent": "Africa",
    "country": "Egypt",
    "latitude": 30.04,
    "longitude": 31.23,
    "text": "Defination of Exotic!"
  }),Countries.create(
  {
    "city": "Marseilles",
    "continent": "Europe",
    "country": "France",
    "latitude": 43.29,
    "longitude": 5.36,
    "text": "Marseilles is my first European port. I visited the city first time in June 2007, and couple more times between 2014-2015. It is a pure beauty and a natural port"
  }),Countries.create(
  {
    "city": "Bora Bora",
    "continent": "Oceania",
    "country": "French Polynesia",
    "latitude": -16.59,
    "longitude": -151.74,
    "text": "Bora Bora is my favorite place, if there is a paradise in somewhere, Bora Bora is the paradise!",
    image:'https://res.cloudinary.com/captainozlem/image/upload/v1548638235/10501942_10153364009127173_1406126816981439952_n.jpg.jpg'
  }),Countries.create(
  {
    "city": "Berlin",
    "continent": "Europe",
    "country": "Germany",
    "latitude": 52.52,
    "longitude": 13.4,
    "text": "Europe`s party capital",
    image:'https://res.cloudinary.com/captainozlem/image/upload/v1548638212/1900079_10152226522422173_2133405780_n.jpg.jpg'
  }),Countries.create(
  {
    "city": "Santorini",
    "continent": "Europe",
    "country": "Greece",
    "latitude": 36.39,
    "longitude": 25.46,
    "text": "Greece is our beautiful neighbor,especially the islands are just beautiful. I have been many many times with my cruise ships and besides then actually Greece is my first foreign country! I visited Athens in September 2004 when I was in high school, since then it is one of my favorite. Santorini and Rhodes are my favorite Greek islands",
    image:'https://res.cloudinary.com/captainozlem/image/upload/v1548638072/12087331_10153653017242173_1236799253941955220_o.jpg.jpg'
  }),Countries.create(
  {
    "city": "Utila",
    "continent": "North America",
    "country": "Honduras",
    "latitude": 16.09,
    "longitude": -86.92,
    "text": "Despite of dangerous main land, Honduran islands are quite safe and sound. Roatan is touristy, but Utila is a paradise of backpackers, also it is an ideal place for scuba diving!",
    image:'https://res.cloudinary.com/captainozlem/image/upload/v1548637864/26952344_10156013613617173_7306127053783838131_o.jpg.jpg'
  }),Countries.create(
  {
    "city": "Visakhapatnam",
    "continent": "Asia",
    "country": "India",
    "latitude": 17.68,
    "longitude": 83.21,
    "text": "Every city has different character, every corner is surprising you, that`s why they are saying `Incredible India",
    image:'https://res.cloudinary.com/captainozlem/image/upload/v1548638299/389080_10150986231687173_1025105648_n.jpg.jpg'
  }),Countries.create(
  {
    "city": "Venice",
    "continent": "Europe",
    "country": "Italy",
    "latitude": 45.44,
    "longitude": 12.31,
    "text": "Every corner is full of history. Venice is one of my favorite place, it is an engineering miracle",
    image:'https://res.cloudinary.com/captainozlem/image/upload/v1548638185/1518025_10153068583457173_2919552889957247457_n.jpg.jpg'
  }),Countries.create(
  {
    "city": "Aqaba",
    "continent": "Asia",
    "country": "Jordan",
    "latitude": 29.5321,
    "longitude": 35.0063,
    "text": "One of the safest countries in Middleeast, and hosting beautiful ancient city Petra. Aqaba is a perfect spot for scuba diving, half of the Dead Sea belongs to Jordan as well",
    image:'https://res.cloudinary.com/captainozlem/image/upload/v1548638115/10442373_10153013230662173_3084573297226826428_n.jpg.jpg'
  })
  ]);

  console.log(`seeded ${country.length} countries`);
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

module.exports = seed;
