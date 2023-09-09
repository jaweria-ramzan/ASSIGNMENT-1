//Album
function make_album(artistName:string,albumTitle:string,NumberofTracks?:number):object {
    return {
        Artist:artistName,
        Album:albumTitle,
        NumberofTracks:NumberofTracks,
    };
};
console.log(make_album("Taylor Swift","1989"));
console.log(make_album("Adele","21"));
console.log(make_album("Michael Jackson","Thriller"));//incomplete