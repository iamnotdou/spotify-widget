const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();
const app = express();
const { iosdefault, spotifyColored, spotifyDefault } = require("./templates");
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = 8080;
app.get("/", (req, res) => {
  res.send("hello world");
});
var track = {};
const currentTrack = {};

const getAccessToken = async () => {
  var config = {
    method: "post",
    headers: {
      Authorization:
        "Basic " +
        btoa(process.env.CLIENT_ID + ":" + process.env.CLIENT_SECRET),
    },
    data: "grant_type=refresh_token&refresh_token=AQDMQNMbcROf4v36P-udjuzo2bNDtD169_yzJGW-56cwv2qvnbXilR2_qDpHytdz3HfPbJxHx_8-WDSRLR6foP4fQ8dWt5e6lbl9y0MbKU_XF5GJNMjpe1bzCCC4SKVpzmk",
  };
  const { data } = await axios(
    "https://accounts.spotify.com/api/token",
    config
  );
  return data;
};

function getBase64(url) {
  return axios
    .get(url, {
      responseType: "arraybuffer",
    })
    .then((response) => {
      return Buffer.from(response.data, "binary").toString("base64");
    });
}
async function getCurrentSong(token) {
  const { data } = await axios(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  return data;
}

const getData = async () => {
  const { data } = await axios.get(
    "https://api.lanyard.rest/v1/users/1017034605708185651"
  );
  currentTrack.on = data.data.listening_to_spotify ? true : false;
  if (currentTrack.on) {
    currentTrack.name = data.data.spotify.song;
    currentTrack.artist = data.data.spotify.artist;
    currentTrack.img = data.data.spotify.album_art_url;
  }
  return currentTrack;
};

app.get("/style1", async (req, res) => {
  const data = await getAccessToken();
  const song = await getCurrentSong(data.access_token);
  track.name = song.item.name || "Day 'N' Night";
  track.artist = song.item.artists[0].name || "Kid Cudi";
  track.img =
    (await getBase64(song.item.album.images[0].url)) ||
    (await getBase64(
      "https://i.scdn.co/image/ab67616d0000b273713f297a7bdc1d48971062b2"
    ));

  res.header("Pragma", "no-cache");
  res.header("Content-Type", "image/svg+xml");
  res.header("Expires", "0");
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.send(spotifyDefault(track));
});
app.get("/style2", async (req, res) => {
  const data = await getAccessToken();
  const song = await getCurrentSong(data.access_token);
  track.name = song.item.name || "Day 'N' Night";
  track.artist = song.item.artists[0].name || "Kid Cudi";
  track.img =
    (await getBase64(song.item.album.images[0].url)) ||
    (await getBase64(
      "https://i.scdn.co/image/ab67616d0000b273713f297a7bdc1d48971062b2"
    ));

  res.header("Pragma", "no-cache");
  res.header("Content-Type", "image/svg+xml");
  res.header("Expires", "0");
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.send(iosdefault(track));
});
try {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT} `);
  });
} catch (err) {
  console.error(err.message);
}
