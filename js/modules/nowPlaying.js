export const nowPlaying = async (query) =>{

    // let res = await fetch("http://localhost:5503/tracks")
    // let data = await res.json()
    // let song = data.items[0].data.uri
    // console.log(song)

    const url = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=tracks&offset=0&limit=1&numberOfTopResults=0`;
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
        let song = result.tracks.items[0].data.uri

        return song;
        
    } catch (error) {
        console.error(error);
    }



}