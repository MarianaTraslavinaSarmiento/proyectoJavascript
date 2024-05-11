export const trackList = async (query) =>{

    let res = await fetch("http://localhost:5501/tracks")
    let data = await res.json()
    let dataUpdate = []

    for (let song of data.items){
        dataUpdate.push(song.data.uri)
    }

    console.log(dataUpdate)
    return dataUpdate

}  