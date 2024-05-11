export const nowPlaying = async (query) =>{

    let res = await fetch("http://localhost:5503/tracks")
    let data = await res.json()
    let song = data.items[0].data.uri
    console.log(song)

}