import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    unqueued: { 
        backgroundColor: 'white',
        padding: theme.spacing(1),
        margin:'auto',
        width: '90%',
        opacity: '50%'
    },
    queued: {
        backgroundColor: 'black',
        padding: theme.spacing(1),
        margin: 'auto',
        width: '90%'
    },
    poster: {
        width: '100%',
        cursor: 'pointer'
    }
}));

export default function Poster(props){
    const { video, handleAddVideo, handleRemoveVideo, isVideoQueued } = props
    const classes = useStyles();

    const handleClick = (video) => {
        video.queued ? handleRemoveVideo(video) : handleAddVideo(video)
    }

    return (
        <Grid item xs={1}>
                <Paper 
                    className={isVideoQueued ? classes.queued : classes.unqueued} 
                    onClick={()=>{handleClick(video)}}>
                        <img className={classes.poster} src={video.poster} alt={'video poster'}/>
                </Paper>
        </Grid>
    )
}  