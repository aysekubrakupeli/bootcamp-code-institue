var profile = "I am a web developer developing in html css and javascript";
var stops = ["i", "am", "a", "and"];
var newProfile = [];

var profileWords = profile.split(" ");

for (var i = 0; i < profileWords.length; i++) {
    if(stops.indexOf(profileWords[i].toLowerCase()) == -1) {
        newProfile.push(profileWords[i]);
    }
}

console.log(newProfile);

