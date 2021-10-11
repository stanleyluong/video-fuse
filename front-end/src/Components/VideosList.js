import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Poster from "./Poster";

const useStyles = makeStyles((theme) => ({
    grid: {
        rowGap: theme.spacing(1),
        justifyContent: 'space-around'        
    }
}))

export default function VideosList(props){

    const classes = useStyles();
    const { handleAddVideo, videos, playlist } = props

    const isVideoInPlaylist = (video) => {
        for (const videoInPlaylist of playlist) {
            if (videoInPlaylist.id === video.id) {
                return true
            }
        }
        return false
    }

    return (
        <Grid className={classes.grid} container>
            {videos.map((video, index)=>{
                return (
                    <Poster
                        isVideoQueued={isVideoInPlaylist(video)}
                        key={index} 
                        video={video} 
                        handleAddVideo={handleAddVideo} 
                    />
                )
            })}
        </Grid>
    )
}