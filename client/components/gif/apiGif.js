let url = "https://api.giphy.com/v1/gifs/search";
let apiKey = "3DWe9ROnNRLhz81G3K8Qws84wDi9VkGm";

export const obtenerApi = async (category) => {
  const rex = await fetch(`${url}?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`);
  const result = await rex.json();

  const gif = result.data.map((ev) => {
    return {
      id: ev.id,
      title: ev.title,
      url: ev.images.downsized_medium.url,
    };
  });

  return gif
};
