import {MyFrame} from "./components/myFrame.js"
import {MySongsAndPlayList} from "./components/MySongsAndPlayList.js"
import { nowPlaying } from "./modules/nowPlaying.js"
import { trackList } from "./modules/trackList.js"
import { discoverNewAlbums } from "./modules/albums.js"


const searchBoxes = document.querySelectorAll('.searchBox')
let [search1, search2, search3] = searchBoxes


//1. 
search1.addEventListener('keyup', async function(event){
    if(event.keyCode === 13){
        console.log(event)
        
        let dataUris = await discoverNewAlbums(event.target.value)

        //Actualizar las uri de la busqueda

        let updateAlbumBox = document.querySelector('.box__album__list')
        updateAlbumBox.innerHTML = ``
        for (let idAlbum of dataUris){

            let albumComponent = document.createElement("my-songs-playlist")
            albumComponent.setAttribute ("uri", idAlbum)
            updateAlbumBox.append(albumComponent)
        }

    }
})


search2.addEventListener('keyup', async function(event){
    if(event.keyCode === 13){
        let data = await nowPlaying(event.target.value)

        //Actualizar las uri de la busqueda

        let updateSong = document.querySelector('my-frame')
        let updateSongsBox = document.querySelector('.now__playing')
        updateSong.remove()
        updateSong.setAttribute("uri", data)
        updateSongsBox.appendChild(updateSong)
    }
})

search3.addEventListener('keyup', async function(event){
    if(event.keyCode === 13){
        let dataUris = await trackList(event.target.value)

        //Actualizar las uri de la busqueda

        let updateTrackBox = document.querySelector('.box__tracks__list')
        updateTrackBox.innerHTML = ``
        for (let idTrack of dataUris){

            let trackComponent = document.createElement("my-songs-playlist")
            trackComponent.setAttribute ("uri", idTrack)
            updateTrackBox.append(trackComponent)
        }

    }
})

function generateRandom(num) {

    
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let result = "";
    for (let i = 0; i < num; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result;
}


async function firstMusic() {

    let data = await nowPlaying(generateRandom(4))

    let updateSong = document.createElement('my-frame')
    let updateSongsBox = document.querySelector('.now__playing')
    updateSong.setAttribute("uri", data)
    updateSongsBox.appendChild(updateSong)


    let dataUris = await discoverNewAlbums(generateRandom(4))
    let updateAlbumBox = document.querySelector('.box__album__list')
    updateAlbumBox.innerHTML = ``
    for (let idAlbum of dataUris){

        setTimeout(function() {

            let albumComponent = document.createElement("my-songs-playlist")
            albumComponent.setAttribute ("uri", idAlbum)
            updateAlbumBox.append(albumComponent)

        },500)

    }

    let dataUrisTracks = await trackList(generateRandom(4))

    let updateTrackBox = document.querySelector('.box__tracks__list')
    updateTrackBox.innerHTML = ``
    for (let idTrack of dataUrisTracks){

        setTimeout(function() {
            let trackComponent = document.createElement("my-songs-playlist")
            trackComponent.setAttribute ("uri", idTrack)
            updateTrackBox.append(trackComponent)
        },500)
    }



}

await firstMusic()

