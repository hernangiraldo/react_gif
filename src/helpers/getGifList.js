const URL = 'https://api.giphy.com/v1/gifs/search?&limit=10&api_key=WCjIbpO15ii4VPDxIqQi8vu0mwiB0HrI';

export const getGifList = async (category) => {
  const response = await fetch(`${URL}&q=${encodeURI(category)}`);
  const { data } = await response.json();
  return data.map( gif => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url
    }
  });
}
