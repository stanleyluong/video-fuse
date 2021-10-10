import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PlaylistPoster from "./PlaylistPoster";

const useStyles = makeStyles((theme) => ({
    grid: {
        rowGap: theme.spacing(1)
    }
}));

export default function Playlist(props){
    
    const classes = useStyles();
    const { handleAddVideo, handleRemoveVideo, playlist } = props

    return (
        <Grid className={classes.grid} container >
            {playlist && playlist.map((video, index)=>{
                return <PlaylistPoster 
                    key={index} 
                    video={video} 
                    handleAddVideo={handleAddVideo} 
                    handleRemoveVideo={handleRemoveVideo}/>
            })}
        </Grid>
    )
}