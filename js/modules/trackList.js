export const trackList = async (query) =>{


    // let res = await fetch("http://localhost:5501/tracks")
    // let data = await res.json()
    // let dataUpdate = []

    // for (let song of data.items){
    //     dataUpdate.push(song.data.uri)
    // }

    // console.log(dataUpdate)
    // return dataUpdate

    const url = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=tracks&offset=0&limit=9&numberOfTopResults=0`;
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6b6bcb8cd3mshc3b688124c1c5cep128b1ejsn2eccd5e02437',
            'x-rapidapi-host': 'spotify23.p.rapidapi.com',
            'Content-Type': 'application/json'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        let uris = []

        for(let track of result.tracks.items){
            uris.push(track.data.uri)   
        }
   
        return uris;
        
        
    } catch (error) {
        console.error(error);
    }    


}  