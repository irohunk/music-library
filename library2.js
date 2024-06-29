const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
       for (let playlistId in library.playlists) {
              let playlist = library.playlists[playlistId];
              console.log(`${playlist.id}: ${playlist.name} - ${playlist["tracks"].length} tracks`);
       }
};

printPlaylists();

console.log("------------------------------");

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
       for (let trackId in library.tracks) {
              let track = library.tracks[trackId];
              console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
       }
};

printTracks();

console.log("------------------------------");

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       let playlist = library.playlists[playlistId];
       if (playlist) {
              console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
              for (let trackId of playlist.tracks) {
                     let track = library.tracks[trackId];
                     if (track) {
                            console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
                     } else {
                            console.log(`Track ${trackId} not found in tracks`);
                     }
              }
              } else {
                     console.log(`Playlist ${playlistId} not found in playlists`);
       }
};

printPlaylist("p01");

console.log("------------------------------");


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
       // Retrieve the playlist by its ID
       const playlist = library.playlists[playlistId];
   
       // Check if the playlist exists
       if (playlist) {
           // Check if the track already exists in the playlist
           if (!playlist.tracks.includes(trackId)) {
               // Add the track to the playlist
               playlist.tracks.push(trackId);
           } else {
               console.log(`Track ${trackId} already exists in playlist ${playlistId}`);
           }
       } else {
           console.log(`Playlist ${playlistId} not found`);
       }
   
       // Log the updated playlist
       console.log(playlist);
};

   
addTrackToPlaylist("t03", "p01");

console.log("------------------------------");


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

const globalTrackId = generateUid();
// adds a track to the library
const addTrack = function(name, artist, album) {
       // let trackId = generateUid();
       let track = library.tracks;
       track[globalTrackId] = {
              id: globalTrackId,
              name: name,
              artist: artist,
              album: album,
       };
       console.log(library);
};

addTrack("Track Add Test", "RK", "Web Dev Bootcamp");

console.log("------------------------------");


// adds a playlist to the library
const addPlaylist = function(name) {
       let playlistId = generateUid();
       let playlist = library.playlists;
       playlist[playlistId] = {
              id: playlistId,
              name: name,
              tracks: ["t01", "t02", "t03", globalTrackId]
       };
       console.log(library);
};

addPlaylist("Playlist Add Test");

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}