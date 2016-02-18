var songs = [
  { title: 'Imagine', artist: 'John Lennon', difficulty: 3 },
  { title: 'Hey, Soul Sister', artist: 'Train', difficulty: 5.3 },
  { title: 'Call Me Maybe', artist: 'Carly Rae Jepsen', difficulty: 2.5 },
  { title: 'Hotel California', artist: 'The Eagles', difficulty: 3.9 },
  { title: 'Blackbird', artist: 'The Beatles', difficulty: 2.8 },
  { title: 'Valerie', artist: 'Amy Winehouse', difficulty: 3.8 },
  { title: 'Say Something', artist: 'A Great Big World', difficulty: 4.3 },
  { title: 'Fix You', artist: 'Coldplay', difficulty: 2.2 },
  { title: 'Royals', artist: 'Lorde', difficulty: 4.3 }
].sort(function(a, b){
  return a.difficulty - b.difficulty;
});
// module.exports = songs;

var easy = [];
var medium = [];
var hard = [];

for (var i = 0; i < songs.length; i++) {
  var title = songs[i]['title'];
  var artist = songs[i]['artist'];
  var difficulty = songs[i]['difficulty'];
  var whole = (title+" by "+ artist + " ["+difficulty+"]");
  if(difficulty < 3){
    console.log(whole.america);
  } else if(difficulty < 4){
    console.log(whole.magenta);
  } else{
    console.log(whole.blue);
  }
};

// module.exports = {
//   easy: easy
// }



// var easy = songs.filter(function (el) {
//   return el.difficulty < 3;
// });

// var easySongs = [];

// for(i=0;i<easy.length;i++){
//   title = easy[i]['title'];
//   artist = easy[i]['artist'];
//   difficulty = easy[i]['difficulty'];
//   easySongs.push('"'+title+'" '+artist+', '+difficulty);
// }
// // console.log(easySongs);

// var medium = songs.filter( function (el) {
//   return 3 <= el.difficulty && el.difficulty < 4;
// });

// var mediumSongs = [];

// for(i=0;i<medium.length;i++){
//   title = medium[i]['title'];
//   artist = medium[i]['artist'];
//   difficulty = medium[i]['difficulty'];
//   mediumSongs.push('"'+title+'" '+artist+', '+difficulty);
// }

// var hard = songs.filter( function (el) {
//   return el.difficulty >= 4;
// });

// var hardSongs = [];

// for(i=0;i<hard.length;i++){
//   title = hard[i]['title'];
//   artist = hard[i]['artist'];
//   difficulty = hard[i]['difficulty'];
//   hardSongs.push('"'+title+'" '+artist+', '+difficulty);
// }

// module.exports = {
//   easySongs: easySongs,
//   mediumSongs: mediumSongs,
//   hardSongs: hardSongs
// };
// console.log(medium);
// console.log(hard);

// var easy = songs.filter(
//   function (obj){
//     return 'difficulty' < 3;
//   });

// console.log(easy);