export const discoverNewAlbums = async (query) =>{

    let res = await fetch("http://localhost:5502/albums")
    let allAlbums = await res.json()
    let dataUpdate = []

    for (let album of allAlbums.items){
        dataUpdate.push(album.data.uri)
    }

    console.log(dataUpdate)
    return dataUpdate

}  