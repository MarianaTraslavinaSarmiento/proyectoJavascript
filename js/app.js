import {MyFrame} from "./components/myFrame.js"
import {MySongsAndPlayList} from "./components/MySongsAndPlayList.js"
import { nowPlaying } from "./modules/nowPlaying.js"
import { trackList } from "./modules/trackList.js"
import { discoverNewAlbums } from "./modules/albums.js"


nowPlaying()
trackList()
discoverNewAlbums()

