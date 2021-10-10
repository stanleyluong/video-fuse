import { useState } from 'react';

export default function VideoPlayer(props){
    
    const url = 'https://video-fuse.s3.us-west-1.amazonaws.com/3e/12bddf92cc4f2aa7aeade5b6d35742/astronaut-in-suit-closing-container-unde_ra-positioned-on-rocket-during-take-off.flv'
    console.log(props.playlist)
    const { handleRemoveVideo, playlist } = props
    const handleOnEnd = (video) => {
        handleRemoveVideo(video)
    }
    const video = url || props.playing.source
    const handleSource = () => {
        if(playlist[0])return playlist[0].source
        else return 1
    }
    // const handlePlaylist = () => {
        
    // }
    return (
        <video width="640" height="480" src={video} controls autoPlay={true} muted onEnded={()=>{handleOnEnd(playlist[0])}}/>
    )
}