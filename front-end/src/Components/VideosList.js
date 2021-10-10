import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Poster from "./Poster";

const useStyles = makeStyles((theme) => ({
    grid: {
        rowGap: theme.spacing(1)
    }
}));

export default function VideosList(props){
    
    const classes = useStyles();
    const { handleAddVideo, handleRemoveVideo, videos } = props

    return (
        <Grid className={classes.grid} container >
            {videos.map((video, index)=>{
                return <Poster 
                    key={index} 
                    video={video} 
                    handleAddVideo={handleAddVideo} 
                    handleRemoveVideo={handleRemoveVideo}/>
            })}
        </Grid>
    )
}