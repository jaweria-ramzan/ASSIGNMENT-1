//Album
interface Album{
    ArtistName:string,
    AlbumTitle:string|unknown,
    NumOfTracks?:number,
};
function make_album(ArtistName:string,
    AlbumTitle:string|unknown,
    NumOfTracks?:number,):Album {
    const album:Album={
       ArtistName,
       AlbumTitle, 
    };
    if(NumOfTracks){album.NumOfTracks=NumOfTracks;}
    return album
}
console.log(make_album("Tylor Swift","1989",21));
console.log(make_album("Adele","21"));
console.log(make_album("Michael Jackson","Thriller",45));
