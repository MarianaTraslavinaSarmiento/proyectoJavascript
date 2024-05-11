import {MyFrame} from "./components/myFrame.js"
import {MySongsAndPlayList} from "./components/MySongsAndPlayList.js"
import { nowPlaying } from "./modules/nowPlaying.js"
import { trackList } from "./modules/trackList.js"
import { discoverNewAlbums } from "./modules/albums.js"


const searchBoxes = document.querySelectorAll('.searchBox')
let [search1, search2, search3] = searchBoxes


search2.addEventListener('keyup', async function(event){
    if(event.key== 'Enter'){
        let data = await nowPlaying(event.target.value)
    }
})


