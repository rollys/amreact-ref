import React, { Component } from "react";

class Video extends Component {
  constructor() {
    super();
    this.myVideo = React.createRef();
  }

  render() {
    return (
      <div>
        <video ref={this.myVideo} width="400" height="350" controls>
          <source
            src="https://ftp.fau.de/CCC/30C3/mp4-hd/30c3-5406-en-Drones_h264-hd.mp4"
            type="video/mp4"
          />
        </video>
        <div>
          <button
            onClick={() => {
              this.myVideo.current.play();
            }}
          >
            Play
          </button>
          <button
            onClick={() => {
              this.myVideo.current.pause();
            }}
          >
            Pause
          </button>
        </div>
      </div>
    );
  }
}

export default Video;
