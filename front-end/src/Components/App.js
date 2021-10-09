import { useEffect, useState } from 'react';
import './App.css';
import VideosList from './VideosList'
import VideoPlayer from './VideoPlayer'
import Submit from './Submit'
const Transloadit = require('transloadit')
const transloadit = new Transloadit({
  authKey: '4ea311b8bbf84ff0a8c9d78bf7e3d0d2',
  authSecret: '265d5b2a0a40206c6a0760fa6c8f83ff38fe12db'
})
function App() {
  const [videos, setVideos] = useState([])
  const [playlist, setPlaylist] = useState([])
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
      console.log(videos)
      console.log('useffect playlist',playlist)
      setVideos(videos)
    }
    fetchVideos()
  },[])

  const handleAddVideo = (video) => {
    let newPlaylist = playlist.slice()
    newPlaylist.push(video)
    setPlaylist(newPlaylist)
  }

  const handleRemoveVideo = (video) => {
    let newPlaylist = playlist.filter(v=>{
      return video!==v
    })
    console.log('new playlist 58',newPlaylist)
    setPlaylist(newPlaylist)
  }
  
  return (
    <div className="App">
        <h1>Video Fuse</h1>
        <VideosList videos={videos} setPlaylist={setPlaylist} handleAddVideo={handleAddVideo} handleRemoveVideo={handleRemoveVideo} />
        <Submit />
        <VideoPlayer playlist={playlist} handleRemoveVideo={handleRemoveVideo}/>
    </div>
  );
}

export default App;
