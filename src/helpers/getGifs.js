
export const getGifs = async(category) =>{
    const url =`https://api.giphy.com/v1/gifs/search?api_key=iqfTX6owDBSG77N9mSu3b8hr82cK1ANk&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data = []} = await resp.json(); //desestructuramos y se iguala  data = [] para asegurarnos q siempre tengamos data
    //console.log(data);

    const gifs = data.map(img => {
          return{
            id: img.id,
            title:img.title,
            url: img.images.downsized_medium.url
          }
    });
    console.log(gifs);
    return gifs;
}

