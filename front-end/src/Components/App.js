import { useEffect, useState } from 'react';
import './App.css';
import VideosList from './VideosList'
import VideoPlayer from './VideoPlayer'

function App() {
  
  const [videos, setVideos] = useState([])
  const [playlist, setPlaylist] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch('http://localhost:3000/videos')
      const videos = await response.json()
      videos.forEach(video=>{
        video.queued = false
      })
      setVideos(videos)
    }
    fetchVideos()
  },[])

  const handleAddVideo = (video) => {
    let newVideo = {
      id: video.id,
      source: video.source,
      poster: video.poster,
      queued: true
    }
    let newPlaylist = playlist.slice()
    newPlaylist.push(newVideo)
    setPlaylist(newPlaylist)
    let index = videos.indexOf(video)
    let newVideos = videos.slice()
    newVideos.splice(index,1,newVideo)
    setVideos(newVideos)
  }

  const handleRemoveVideo = (video) => {
    let newPlaylist = playlist.filter(v=>{
      return video!==v
    })
    setPlaylist(newPlaylist)
    let newVideos = videos.slice()
    let index = videos.indexOf(video)
    let newVideo = {
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
    </div>
  );
}

export default App;
