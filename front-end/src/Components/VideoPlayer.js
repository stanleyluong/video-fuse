export default function VideoPlayer(props){
    const { handleRemoveVideo, playlist } = props

    const handleOnEnd = (video) => {
        handleRemoveVideo(video)
    }

    let video = playlist[0]

    return (
        <div>
            {playlist.length > 0 && 
                <video width="640" height="480" src={video.source} controls autoPlay={true} muted onEnded={()=>handleOnEnd(video)}/>
            }
        </div>
    )
}