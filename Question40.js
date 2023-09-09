"use strict";
//Album
function make_album(artistName, albumTitle, NumberofTracks) {
    return {
        Artist: artistName,
        Album: albumTitle,
        NumberofTracks: NumberofTracks,
    };
}
;
console.log(make_album("Taylor Swift", "1989"));
console.log(make_album("Adele", "21"));
console.log(make_album("Michael Jackson", "Thriller")); //incomplete
