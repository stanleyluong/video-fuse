import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    transparent: { 
        backgroundColor: 'white',
        margin:'auto',
        width: '90%',
        opacity: '50%'
    },
    poster: {
        width: '100%',
        cursor: 'pointer'
    }
}));

export default function PlaylistPoster(props) {
    const { video, handleRemoveVideo, isCurrentVideo } = props;
    const classes = useStyles();

    return (
        <Grid item xs={1}>
                <Paper 
                    className={isCurrentVideo ? "" : classes.transparent} 
                    onClick={()=>{handleRemoveVideo(video)}}>
                        <img 
                            className={classes.poster} 
                            src={video.poster} 
                            alt={'video poster'}
                        />
                </Paper>
        </Grid>
    );
}; 