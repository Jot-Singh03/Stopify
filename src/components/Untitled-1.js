// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'BQBKIQUKQ4mRBZTVyLgLk1RxU7utsFCR--23uh9CGuhF0GooViJPXJBgsWFtsDoM_3eAVZzt2rVmINVqtFxG02ymXnh4co4QxQzdJxaaBb5hx62_QXFla4mIg9_8uetYZQcbl8hyV48xlpF9c73Hf4PHIE0weyARrB24raqmFXlWEh_vh44i1vW4sqAJbviVVjNjsN5QOdgt82sPShwUzGU0lQuSlI9LLhgO3OVxEh9WY43hzIHvZ3GyWgzAnqzOubimtvSaKNst1iOdDB7bgK_IYA4MdmuG';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(https://api.spotify.com/${endpoint}, {
    headers: {
      Authorization: Bearer ${token},
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      ${name} by ${artists.map(artist => artist.name).join(', ')}
  )
);