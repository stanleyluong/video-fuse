import { useEffect, useState } from 'react';
import './App.css';
import VideosList from './VideosList';
import VideoPlayer from './VideoPlayer';
import Playlist from './Playlist';
function App() {

    const [videos, setVideos] = useState([]);
    const [playlist, setPlaylist] = useState([]);
    const [indexOfVideoPlaying, setIndexOfVideoPlaying] = useState(0);

    useEffect(() => {
        const fetchVideos = async () => {
            const response = await fetch('http://localhost:3000/videos');
            const videos = await response.json();

            // this number comes from project requirements
            const numVideosToUse = 8;
            setVideos(videos.slice(0, numVideosToUse));
        }
        fetchVideos();
    },[]);

    useEffect(() => {
        // reset index back to 0 when playlist changes
        // to prevent a bug when removing the last video in playlist while it's being played
        setIndexOfVideoPlaying(0);
    }, [playlist]);

    const handleAddVideo = (videoToAdd) => {
        const nextPlaylist = [...playlist, videoToAdd];
        setPlaylist(nextPlaylist);
    }

    const handleRemoveVideo = (videoToRemove) => {
        const indexOfVideoToRemove = playlist.findIndex(video => videoToRemove.id === video.id)
        const nextPlaylist = [...playlist]

        if (indexOfVideoToRemove > -1) {
        nextPlaylist.splice(indexOfVideoToRemove, 1)
        }

        setPlaylist(nextPlaylist);
    }

    return (
        <div className="App">
            <h1>Video Fuse</h1>
            <p>Click on videos to add to list</p>
            <VideosList 
            videos={videos} 
            playlist={playlist}
            handleAddVideo={handleAddVideo} 
            />
            <VideoPlayer 
            playlist={playlist} 
            indexOfVideoPlaying={indexOfVideoPlaying}
            setIndexOfVideoPlaying={setIndexOfVideoPlaying}
            />
            <Playlist 
            playlist={playlist}
            handleRemoveVideo={handleRemoveVideo}
            indexOfVideoPlaying={indexOfVideoPlaying}
            />
        </div>
    );
}

export default App;