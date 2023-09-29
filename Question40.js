"use strict";
;
function make_album(ArtistName, AlbumTitle, NumOfTracks) {
    const album = {
        ArtistName,
        AlbumTitle,
    };
    if (NumOfTracks) {
        album.NumOfTracks = NumOfTracks;
    }
    return album;
}
console.log(make_album("Tylor Swift", "1989", 21));
console.log(make_album("Adele", "21"));
console.log(make_album("Michael Jackson", "Thriller", 45));
