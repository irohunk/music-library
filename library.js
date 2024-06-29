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
             },
  printPlaylists: function() {
       for (let playlistId in this.playlists) {
              let playlist = this.playlists[playlistId];
              console.log(`${playlist.id}: ${playlist.name} - ${playlist["tracks"].length} tracks`);
       }
  },
  printTracks: function() {
       for (let trackId in this.tracks) {
              let track = this.tracks[trackId];
              console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
              }
  },
  printPlaylist: function(playlistId) {
       let playlist = this.playlists[playlistId];
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
  },
  addTrackToPlaylist: function(trackId, playlistId) {
       // Retrieve the playlist by its ID
       const playlist = this.playlists[playlistId];
   
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
  },
  addTrack: function(name, artist, album) {
       // let trackId = generateUid();
       let track = this.tracks;
       track[globalTrackId] = {
              id: globalTrackId,
              name: name,
              artist: artist,
              album: album,
       };
       console.log(library);
  },
  addPlaylist: function(name) {
       let playlistId = generateUid();
       let playlist = this.playlists;
       playlist[playlistId] = {
              id: playlistId,
              name: name,
              tracks: ["t01", "t02", "t03", globalTrackId]
       };
       console.log(library);
  }
};

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

const globalTrackId = generateUid();

library.printPlaylists();
console.log("------------------------------");
library.printTracks();
console.log("------------------------------");
library.printPlaylist("p01");
console.log("------------------------------");
library.addTrackToPlaylist("t03", "p01");
console.log("------------------------------");
library.addTrack("Track Add Test", "RK", "Web Dev Bootcamp");
console.log("------------------------------");
library.addPlaylist("Playlist Add Test");
console.log("------------------------------");