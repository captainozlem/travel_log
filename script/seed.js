'use strict';

const db = require('../server/db');
const {Countries} = require('../server/db/models');

async function seed() {
  await db.sync({force: true});
  console.log('db synced!');

  const country = await Promise.all([
    Countries.create({
      name: 'Albania',
      continent: 'Europe',
      lng: 20.02,
      lat: 39.85,
      text: 'I was there with MY Star Pride in Summer,2014. ',
      image:
        'https://www.google.com/imgres?imgurl=https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/CIty_of_Saranda_Albania_2016.jpg/1200px-CIty_of_Saranda_Albania_2016.jpg&imgrefurl=https://en.wikipedia.org/wiki/Sarand%25C3%25AB&h=727&w=1200&tbnid=8NE0N3LMAIG3qM:&q=saranda+albania+coordinates&tbnh=160&tbnw=264&usg=AI4_-kTBTHK0XHMm023lIcfGkoB-hcKnuw&vet=12ahUKEwiZ68uOrPbfAhUR0KwKHWHTA0MQ_B0wAXoECAwQBw..i&docid=tS7ScemrEIKfdM&itg=1&sa=X&ved=2ahUKEwiZ68uOrPbfAhUR0KwKHWHTA0MQ_B0wAXoECAwQBw#h=727&imgdii=8NE0N3LMAIG3qM:&tbnh=160&tbnw=264&vet=12ahUKEwiZ68uOrPbfAhUR0KwKHWHTA0MQ_B0wAXoECAwQBw..i&w=1200'
    }),
    Countries.create({
      name: 'Algeria',
      continent: 'Africa',
      lng: 3.05,
      lat: 36.7,
      text:
        'Algeria is one of my first countries I visited when I was a cadet in MV Captain Zaman, I was there in Summer,2007 ',
      image:
        'https://photos.google.com/album/AF1QipNHWa6vuUM0Euwy6miG6hB16I_dPSuhsE1gSQun/photo/AF1QipM0j8LNrPmV9RtYI1FpoEA2z6UiPlpvOzYi8bFv'
    }),
    Countries.create({
      name: 'Australia',
      continent: 'Oceania',
      lng: 151.78,
      lat: -32.93,
      text:
        'I celebrated 2010 NYE in NewCastle, Australia. I was in different parts of the country with Gedenlines',
      image:
        'https://photos.google.com/album/AF1QipNHWa6vuUM0Euwy6miG6hB16I_dPSuhsE1gSQun/photo/AF1QipOZnSBRJAyAM8RzYfI9uaBlnbJchVngWx6M4SwJ'
    }),
    Countries.create({
      name: 'Bosnia and Herzegovina',
      continent: 'Europe',
      lng: 17.8,
      lat: 43.34,
      text: 'Mostar is such a beautiful town, with tasty wine and good food',
      image:
        'https://www.facebook.com/photo.php?fbid=10155523074337173&set=a.10155523201337173&type=3&theater'
    }),
    Countries.create({
      name: 'Brazil',
      continent: 'South America',
      lng: -40.29,
      lat: -20.29,
      text:
        'One of the most beautiful countries in the world, looking forward to being there again',
      image:
        'https://www.facebook.com/photo.php?fbid=10150208752677173&set=a.10150208751132173&type=3&theater'
    }),
    Countries.create({
      name: 'Bulgaria',
      continent: 'Europe',
      lng: 27.72,
      lat: 42.66,
      text:
        'Nessebar is a small city in Bulgarian Blacksea coast, definetely worth to visit!',
      image:
        'https://photos.google.com/album/AF1QipNHWa6vuUM0Euwy6miG6hB16I_dPSuhsE1gSQun/photo/AF1QipO3JuOu6ZC3vlhSPBTff0f6tQzINDHPFO-Og2DQ'
    }),
    Countries.create({
      name: 'Canada',
      continent: 'North America',
      lng: -71.2,
      lat: 46.81,
      text:
        'Quebec City is the most European city in N.America, when you are walking in old town, you are feeling like you are in Europe. Good food, it can be dangerous!',
      image:
        'https://www.facebook.com/photo.php?fbid=10156361013297173&set=a.10156361081467173&type=3&theater'
    }),
    Countries.create({
      name: 'China',
      continent: 'Asia',
      lng: 121.44,
      lat: 37.46,
      text:
        'I have been many Chinese cities, especially in north. One of my favorite is busy port city Yantai. It is beautiful, and people are so friendly and helpful',
      image:
        'https://www.facebook.com/photo.php?fbid=10150986106957173&set=a.10150986093982173&type=3&theater'
    }),
    Countries.create({
      name: 'Colombia',
      continent: 'South America',
      lng: -74.07,
      lat: 4.71,
      text:
        'Even if I spent only 18 hours for layover in Bogota, it was an enough time to love this country.',
      image:
        'https://photos.google.com/album/AF1QipNHWa6vuUM0Euwy6miG6hB16I_dPSuhsE1gSQun/photo/AF1QipOOTEzNBdp23u0zNsEjfU-iZK4oLICOP5SVMhM6'
    }),
    Countries.create({
      name: 'Costa Rica',
      continent: 'North America',
      lng: -84.09,
      lat: 9.93,
      text:
        'I spent two months in Costa Rica between February 2015 to April 2015 with MSY Wins Spirit, and I had a family reunion in July 2018, so I can easily say, I know lots of things about this beautiful country. Pura Vida!',
      image:
        'https://www.facebook.com/photo.php?fbid=10153158600522173&set=a.10153158597372173&type=3&theater'
    }),
    Countries.create({
      name: 'Croatia',
      continent: 'Europe',
      lng: 18.09,
      lat: 42.65,

      text:
        'I visited this beautiful country many time with MY Star Pride, but it wasn`t enough to see all the beauty during working, so I and my husband spent two weeks in Dalmatia Coast in Summer 2017. Croatia is definetely one of the most beautiful countries in the world, they have everything: Good food, history, nature,crystal clear sea...',
      image:
        'https://photos.google.com/album/AF1QipNHWa6vuUM0Euwy6miG6hB16I_dPSuhsE1gSQun/photo/AF1QipNaqWF302LjkKPU6-uSPYhRIBxTT0LeoprGL3K8'
    }),
    Countries.create({
      name: 'Cyprus',
      continent: 'Europe',
      lng: 33.38,
      lat: 35.18,

      image:
        'https://www.google.com/search?q=girne+coordinates&hl=en&authuser=0&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjJ2bmqwPbfAhUMr4MKHbnMDpEQ_AUIDygC&biw=1440&bih=766#imgrc=U2HFft7S5nevuM:'
    }),
    Countries.create({
      name: 'Denmark',
      continent: 'Europe',
      lng: 12.56,
      lat: 55.67,
      text:
        'Happy people`s country, despite of cold, people are warm and welcoming',
      image:
        'https://www.facebook.com/photo.php?fbid=10156037192641449&set=a.10156037243436449&type=3&theater'
    }),
    Countries.create({
      name: 'Egypt',
      continent: 'Africa',
      lng: 31.23,
      lat: 30.04,
      text: 'Defination of Exotic!',
      image:
        'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjtjaGLw_bfAhWMpoMKHaSkABgQjRx6BAgBEAU&url=https%3A%2F%2Fwww.viator.com%2Ftours%2FCairo%2FPrivate-Tour-Giza-Pyramids-Sphinx-Egyptian-Museum-Khan-el-Khalili-Bazaar%2Fd782-3124CAI01&psig=AOvVaw2FhhibvuwbwKyY9_VJCnrL&ust=1547873180083668'
    }),
    Countries.create({
      name: 'France',
      continent: 'Europe',
      lng: 5.36,
      lat: 43.29,
      text:
        'Marseilles is my first European port. I visited the city first time in June 2007, and couple more times between 2014-2015. It is a pure beauty and a natural port',
      image:
        'https://photos.google.com/album/AF1QipNHWa6vuUM0Euwy6miG6hB16I_dPSuhsE1gSQun/photo/AF1QipNyOJCCh_I5ruFQc9Kq-_Wb0QsefT8LgKVw85Wu'
    }),
    Countries.create({
      name: 'French Polynesia',
      continent: 'Oceania',
      lng: -151.74,
      lat: -16.5,
      text:
        'Bora Bora is my favorite place, if there is a paradise in somewhere, Bora Bora is the paradise!',
      image:
        'https://photos.google.com/album/AF1QipNHWa6vuUM0Euwy6miG6hB16I_dPSuhsE1gSQun/photo/AF1QipPgitaH_3mSYpacg68uizDJS2Yn8f1TyxMNkiF_'
    }),
    Countries.create({
      name: 'Germany',
      continent: 'Europe',
      lng: 13.4,
      lat: 52.52,
      text: 'Europe`s party capital',
      image:
        'https://photos.google.com/album/AF1QipNHWa6vuUM0Euwy6miG6hB16I_dPSuhsE1gSQun/photo/AF1QipO0Sl2w2-bfPFHuL9PcM7no0v9vngHwyKly3a7b'
    }),
    Countries.create({
      name: 'Greece',
      continent: 'Europe',
      lng: 25.46,
      lat: 36.39,
      text:
        'Greece is our beautiful neighbor,especially the islands are just beautiful. I have been many many times with my cruise ships and besides then actually Greece is my first foreign country! I visited Athens in September 2004 when I was in high school, since then it is one of my favorite. Santorini and Rhodes are my favorite Greek islands',
      image:
        'https://photos.google.com/album/AF1QipNHWa6vuUM0Euwy6miG6hB16I_dPSuhsE1gSQun/photo/AF1QipMcRpu93rSd60mnpUxlkQxnhpaSiX1QvnLKCjUF'
    }),
    Countries.create({
      name: 'Honduras',
      continent: 'North America',
      lng: -86.92,
      lat: 16.09,
      text:
        'Despite of dangerous main land, Honduran islands are quite safe and sound. Roatan is touristy, but Utila is a paradise of backpackers, also it is an ideal place for scuba diving!',
      image:
        'https://www.facebook.com/photo.php?fbid=10156013613617173&set=a.10156013773572173&type=3&theater'
    }),
    Countries.create({
      name: 'India',
      continent: 'Asia',
      lng: 83.21,
      lat: 17.68,
      text:
        'Every city has different character, every corner is surprising you, that`s why they are saying `Incredible India`',
      image:
        'https://www.facebook.com/photo.php?fbid=10150986231992173&set=a.10150986218307173&type=3&theater'
    }),
    Countries.create({
      name: 'Italy',
      continent: 'Europe',
      lng: 12.31,
      lat: 45.44,
      text:
        'Every corner is full of history. Venice is one of my favorite place, it is an engineering miracle',
      image:
        'https://photos.google.com/album/AF1QipNHWa6vuUM0Euwy6miG6hB16I_dPSuhsE1gSQun/photo/AF1QipONXo5KK_dGQihymu07rJvqQ_KewlTTX1kodBcR'
    }),
    Countries.create({
      name: 'Jordan',
      continent: 'Asia',
      lng: 35.44,
      lat: 30.33,
      text:
        'One of the safest countries in Middleeast, and hosting beautiful ancient city Petra. Aqaba is a perfect spot for scuba diving, half of the Dead Sea belongs to Jordan as well',
      image:
        'https://photos.google.com/album/AF1QipNHWa6vuUM0Euwy6miG6hB16I_dPSuhsE1gSQun/photo/AF1QipOAJC9tB3yxD70o-1dewGwntoLD89D0WazmTc1w'
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
