import { useState, useEffect, useRef } from "react";

export default function VideoPlayer(props) {
    const { playlist, indexOfVideoPlaying, setIndexOfVideoPlaying } = props;
    const [shouldAutoPlay, setShouldAutoPlay] = useState(false);
    const videoElement = useRef(null);

    useEffect( () => {
        if (playlist.length >= 2) {
            setShouldAutoPlay(true);
            if (videoElement && videoElement.current) {
                videoElement.current.play();
            };
        };
        if (playlist.length === 0) {
            setShouldAutoPlay(false);
        };
    }, [playlist]);

    const handleOnEnd = () => {
        // increment index by 1, or reset back to 0 if at end of playlist
        const nextIndex = (indexOfVideoPlaying + 1) % playlist.length;
        setIndexOfVideoPlaying(nextIndex);
    };

    const currentVideo = playlist[indexOfVideoPlaying];

    if (!currentVideo) {
        return null;
    };

    return (
        <div>
            {playlist.length > 0 && 
                <video
                    key={indexOfVideoPlaying}
                    width="480"
                    height="360"
                    src={currentVideo.source}
                    autoPlay={shouldAutoPlay}
                    muted
                    onEnded={handleOnEnd}
                    ref={videoElement}
                    id="foobar"
                />
            }
        </div>
    );
};