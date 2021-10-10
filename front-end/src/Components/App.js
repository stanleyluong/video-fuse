import { useEffect, useState } from 'react';
import './App.css';
import VideosList from './VideosList'
import VideoPlayer from './VideoPlayer'
// import Submit from './Submit'

function App() {
  const [videos, setVideos] = useState([])
  const [playlist, setPlaylist] = useState([])
  const [playing, setPlaying] = useState(null)
  // const [clicked, setClicked] = useState(false)

  // const playlistRef = useRef(playlist)
  //render the poster images
  //make thumbnail component
  //video list component renders poster image components
  //state usestate(false), if false, gray, if true, not gray,included in playlist?
  //pass videos and playlist as props to video thumbnails component
  //in video thumbnails component, loop videos, render each poster image, onclick add to playlist,conditional style, if not inside playlist, add grayed out style (opacity),
  //video player plays playlist back to back, feed video player component playlist
  //optional: merge individual videos into one
  //event listener when video has stopped playing to play 2nd video 
  // https://stackoverflow.com/questions/2741493/detect-when-an-html5-video-finishes
  //clicking video again will remove it from playlist
  //clicking a new video will add it to the end of the playlist

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch('http://localhost:3000/videos')
      const videos = await response.json()
      setVideos(videos)
    }
    fetchVideos()
  },[])

  const handleAddVideo = (video) => {
    let newPlaylist = playlist.slice()
    newPlaylist.push(video)
    setPlaylist(newPlaylist)
    if(playing===null){
      setPlaying(video)
    }
    console.log('playing',playing)
    console.log('playlist',playlist)
  }

  const handleRemoveVideo = (video) => {
    let newPlaylist = playlist.filter(v=>{
      return video!==v
    })
    setPlaylist(newPlaylist)
  }
  
  return (
    <div className="App">
        <h1>Video Fuse</h1>
        <VideosList 
          videos={videos} 
          setPlaylist={setPlaylist} 
          handleAddVideo={handleAddVideo} 
          handleRemoveVideo={handleRemoveVideo} 
          // clicked={clicked}
          // setClicked={setClicked}
          />
        {/* <Submit /> */}
        <VideoPlayer 
          playlist={playlist} 
          handleRemoveVideo={handleRemoveVideo} 
          playing={playing} />
    </div>
  );
}

export default App;
