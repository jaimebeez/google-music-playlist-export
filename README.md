# Google Music Playlist Exporting Tool
Toolkit to allow easy exporting of playlists from Google Music to a local store

*** this project is no longer being actively maintained ***

### project overview
I wanted a simple way to retrieve my playlists from Google Play Music. Without a simple mechanism available from Google, the solution needs a script to run within the browser and a backend service to receive and store the playlist data. All data is stored in JSON, though a longer term plan for a SQLite or Mongo datastore is planned.

The solution is a mix of client-side and server-side javascript.


### setup & run
1. startup the local server 
```
yarn start
```
2. copy script from 'export_google_music_playlist.js' and insert your URL (ie: 'https://myserver.com') into the parameter.
```javascript
(function (url, xhr) {
...
})('<target domain>');
```
3. paste this script into the javascript console while viewing the selected playlist on Google Play Music.


### unit tests
Units tests can be run via: 
```
yarn test
```
