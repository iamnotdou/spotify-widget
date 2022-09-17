function iosdefault(track) {
  return `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    role="img"
    width="200"
    height="200"
  >
  <title xmlns="http://www.w3.org/2000/svg" id="cardTitle">Now playing on Spotify</title>
    <foreignObject width="200" height="200">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        .widget {
          width: 200px;
          aspect-ratio: 1/1;
          border-radius: 1rem;
          background-color: #0f0f0f;
          background-image: linear-gradient(0deg, black, rgb(22, 22, 22));
          color: rgb(96, 96, 96);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px;
         position: relative;
          font-size: 0.5rem;
        }
        .widget img {
          width: 90px;
          height: 90px;
        }
        .widget_text {
          display:flex;
         flex-direction:column;
          gap:5px;
        }
        .widget_text_name {
          color: white;
          font-size:1rem;
        }
        .widget_text_artist{
          font-size:0.8rem;
          font-weight:500

        }
     .spotify_svg{
      width:24px;
      height:24px;
      position:absolute;
      right:24px;
      top:24px;
     }
      </style>
      <div class="widget" xmlns="http://www.w3.org/1999/xhtml">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 168" class="spotify_svg">
      <path fill="#1ED760" d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809.64-5.609-1.12-6.249-3.93-.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35-1.04-3.453.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"/>
    </svg>
        <img src="data:image/jpeg;base64,${track.img}"/>
        <div class="widget_text" >
          <h1 class="widget_text_name">${track.name.split("(")[0]}</h1>
          <h1 class="widget_text_artist">${track.artist.split(";")[0]}</h1>
        </div>
      </div>
    </foreignObject>
  </svg>`;
}

function spotifyDefault(track) {
  return `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    role="img"
    width="200"
    height="200"
  >
    <title xmlns="http://www.w3.org/2000/svg" id="cardTitle">
      Now playing on Spotify
    </title>
    <foreignObject width="200" height="200">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
            sans-serif;
        }
        .widget {
          width: 200px;
          aspect-ratio: 1/1;
          border-radius: 1rem;
          background-color: #1e1e1e;
          display: flex;
          flex-direction: column;
          padding: 24px;
          position: relative;
          font-size: 0.5rem;
          justify-content: flex-end;
          gap: 10px;
        }
        .widget img {
          width: 90px;
          height: 90px;
        }
        .widget_text {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .container {
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .widget_text_name {
          color: white;
          color: #01d856;
          font-size: 1rem;
          font-weight: 600;
        }
        .widget_text_artist {
          font-size: 0.8rem;
          font-weight: 500;
          color: white;
        }
        .spotify_svg {
          width: 24px;
          height: 24px;
          position: absolute;
          right: 24px;
          top: 24px;
        }

        .loader2 {
          width: 50px;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        .line {
          width: 2px;
          height: 10px;
          background: #ffffff;
          border-radius: 1rem;
        }
        .line:nth-child(1) {
          animation: waveAnim 0.5s 0.3s infinite;
        }
        .line:nth-child(2) {
          animation: waveAnim 0.4s infinite;
        }
        .line:nth-child(3) {
          animation: waveAnim 0.8s 0.3s infinite;
        }
        .line:nth-child(4) {
          animation: waveAnim 0.9s 0.5s infinite;
        }
        .line:nth-child(5) {
          animation: waveAnim 0.9s 0.8s infinite;
        }
        .line:nth-child(6) {
          animation: waveAnim 0.7s infinite;
        }
        .line:nth-child(7) {
          animation: waveAnim 0.3s 0.3s infinite;
        }
        .line:nth-child(8) {
          animation: waveAnim 0.4s 0.9s infinite;
        }
        .line:nth-child(9) {
          animation: waveAnim 0.4s infinite;
        }
        .line:nth-child(10) {
          animation: waveAnim 0.5s 0.3s infinite;
        }
        .line:nth-child(11) {
          animation: waveAnim 0.8s 0.3s infinite;
        }
        .line:nth-child(12) {
          animation: waveAnim 0.4s infinite;
        }
        @keyframes waveAnim {
          0% {
            height: 10px;
          }
          50% {
            height: 30px;
          }
          100% {
            height: 10px;
          }
        }
      </style>

      <div xmlns="http://www.w3.org/1999/xhtml" class="widget">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 168 168"
          class="spotify_svg"
        >
          <path
            fill="#1ED760"
            d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809.64-5.609-1.12-6.249-3.93-.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35-1.04-3.453.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
          />
        </svg>
        <div class="container">
          <div class="loader2">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
        <div class="widget_text">
          <h1 class="widget_text_name">${track.name}</h1>
          <h1 class="widget_text_artist">${track.artist}</h1>
        </div>
      </div>
    </foreignObject>
  </svg>
    `;
}
function spotifyColored(track) {
  return `
      <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      role="img"
      width="200"
      height="200"
    >
      <title xmlns="http://www.w3.org/2000/svg" id="cardTitle">
        Now playing on Spotify
      </title>
      <foreignObject width="200" height="200">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
          }
          .widget {
            width: 200px;
            aspect-ratio: 1/1;
            border-radius: 1rem;
            display: flex;
            flex-direction: column;
            padding: 24px;
            position: relative;
            font-size: 0.5rem;
            justify-content: flex-end;
            background-color: #01d856;

            gap: 10px;
          }
          .widget img {
            width: 90px;
            height: 90px;
          }
          .widget_text {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }
          .container {
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .widget_text_name {
            color: white;

            font-size: 1rem;
            font-weight: 600;
          }
          .widget_text_artist {
            font-size: 0.8rem;
            font-weight: 500;
            color: white;
            color: #1e1e1e;

          }
          .spotify_svg {
            width: 24px;
            height: 24px;
            position: absolute;
            right: 24px;
            top: 24px;
          }

          .loader2 {
            width: 50px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
          }
          .line {
            width: 2px;
            height: 10px;
            background: #ffffff;
            border-radius: 1rem;
          }
          .line:nth-child(1) {
            animation: waveAnim 0.5s 0.3s infinite;
          }
          .line:nth-child(2) {
            animation: waveAnim 0.4s infinite;
          }
          .line:nth-child(3) {
            animation: waveAnim 0.8s 0.3s infinite;
          }
          .line:nth-child(4) {
            animation: waveAnim 0.9s 0.5s infinite;
          }
          .line:nth-child(5) {
            animation: waveAnim 0.9s 0.8s infinite;
          }
          .line:nth-child(6) {
            animation: waveAnim 0.7s infinite;
          }
          .line:nth-child(7) {
            animation: waveAnim 0.3s 0.3s infinite;
          }
          .line:nth-child(8) {
            animation: waveAnim 0.4s 0.9s infinite;
          }
          .line:nth-child(9) {
            animation: waveAnim 0.4s infinite;
          }
          .line:nth-child(10) {
            animation: waveAnim 0.5s 0.3s infinite;
          }
          .line:nth-child(11) {
            animation: waveAnim 0.8s 0.3s infinite;
          }
          .line:nth-child(12) {
            animation: waveAnim 0.4s infinite;
          }
          @keyframes waveAnim {
            0% {
              height: 10px;
            }
            50% {
              height: 30px;
            }
            100% {
              height: 10px;
            }
          }
        </style>

        <div xmlns="http://www.w3.org/1999/xhtml" class="widget">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 168 168"
            class="spotify_svg"
          >
            <path
              fill="#000"
              d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809.64-5.609-1.12-6.249-3.93-.643-2.81 1.11-5.61 3.926-6.25 31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35-1.04-3.453.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739z"
            />
          </svg>
          <div class="container">
            <div class="loader2">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
          <div class="widget_text">
            <h1 class="widget_text_name">${track.name}</h1>
            <h1 class="widget_text_artist">${track.artist}</h1>
          </div>
        </div>
      </foreignObject>
    </svg>
      `;
}

function square(track) {
  return `
  
  <svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  role="img"
  width="200"
  height="200"
>
  <title xmlns="http://www.w3.org/2000/svg" id="cardTitle">
    Now playing on Spotify
  </title>
  <foreignObject width="200" height="200">
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
          sans-serif;
      }
      .widget {
        width: 200px;
        height: 200px;
        border-radius: 1rem;
        display: flex;
        align-items: flex-end;
        position: relative;
        overflow: hidden;
        font-size: 0.5rem;
        color: white;
      }
      .widget img {
        width: 200px;
        height: 200px;
      }
      .widget:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background: linear-gradient(0deg, black, transparent);
      }
      .widget_text {
        display: flex;
        flex-direction: column;
        gap: 5px;
        padding: 1rem;
        position: absolute;
        z-index: 20000;
      }
      .widget_text_name {
        font-size: 1.05rem;
      }
      .widget_text_artist {
        font-size: 1.1rem;
        color: #c5c5c5;
        font-weight: 400;
      }
      .spotify_svg {
        width: 24px;
        height: 24px;
        position: absolute;
        right: 24px;
        top: 24px;
      }
    </style>
    <div xmlns="http://www.w3.org/1999/xhtml" class="widget">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 168 168"
        class="spotify_svg"
      >
      </svg>
      <img src="data:image/jpeg;base64,${track.img}"/>
      <div class="widget_text">
        <h1 class="widget_text_name">${track.name}</h1>
        <h1 class="widget_text_artist">${track.artist}</h1>
      </div>
    </div>
  </foreignObject>
</svg>
  `;
}
module.exports = {
  iosdefault,
  spotifyDefault,
  spotifyColored,
  square,
};
