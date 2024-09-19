# WebVTT Streaming with Node.js

This project demonstrates dynamic WebVTT subtitle streaming using Node.js, where subtitles are modified in real-time and streamed alongside a video.

## Features

- **Dynamic Subtitles**: Modify and stream WebVTT subtitles in real-time.
- **Efficient**: Subtitles are separate from video, reducing video size and making updates easy.
- **Flexible**: Ideal for translation, user-specific captions, or multi-language support.

## Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/byteshiva/webvtt-streaming.git
    cd webvtt-streaming
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Add your video**:
    - Place `friday.mp4` in the `public/` folder.
    - Add a `subtitles.vtt` file in the project root.

4. **Start the server**:
    ```bash
    node server.js
    ```

5. **Visit the app**: Open `http://localhost:3000`.

## Project Structure

```bash
webvtt-streaming/
├── public/          # Contains video files
├── index.html       # Frontend
├── server.js        # Node.js server
├── subtitles.vtt    # WebVTT subtitle file
└── README.md
```

## License

Licensed under the Apache-2.0 License.

