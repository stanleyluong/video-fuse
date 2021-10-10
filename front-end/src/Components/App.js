import { useEffect, useState } from 'react';
import './App.css';
import VideosList from './VideosList'
import VideoPlayer from './VideoPlayer'
import Playlist from './Playlist';
function App() {

  const [videos, setVideos] = useState([])
  const [remainingVideos, setRemainingVideos] = useState([])
  const [playlist, setPlaylist] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch('http://localhost:3000/videos')
      const videos = await response.json()
      videos.forEach(video=>{
        video.queued = false
      })
      const eightVideos = videos.splice(0,8)
      console.log(eightVideos)
      console.log(videos)
      setVideos(eightVideos)
      setRemainingVideos(videos)
    }
    fetchVideos()
  },[])

  const handleAddVideo = (video) => {
   const newVideo = {
      id: video.id,
      source: video.source,
      poster: video.poster,
      queued: true
    }
   const newPlaylist = playlist.slice()
    newPlaylist.push(newVideo)
    setPlaylist(newPlaylist)
   const index = videos.indexOf(video)
   const newVideos = videos.slice()
    newVideos.splice(index,1,newVideo)
    setVideos(newVideos)
  }

  const handleRemoveVideo = (video) => {
   const newPlaylist = playlist.filter(videosRemaining=>{
      return videosRemaining!==video
    })
    setPlaylist(newPlaylist)
   const newVideos = videos.slice()
   const index = videos.indexOf(video)
   const newVideo = {
      id: video.id,
      source: video.source,
      poster: video.poster,
      queued: false
    }
    newVideos.splice(index,1,newVideo)
    setVideos(newVideos)
  }
  
  return (
    <div className="App">
        <h1>Video Fuse</h1>
        <VideosList 
          videos={videos} 
          handleAddVideo={handleAddVideo} 
          handleRemoveVideo={handleRemoveVideo} 
          />
        <VideoPlayer 
          playlist={playlist} 
          handleRemoveVideo={handleRemoveVideo} 
          />
          <Playlist 
            playlist={playlist}
          />
    </div>
  );
}

export default App;