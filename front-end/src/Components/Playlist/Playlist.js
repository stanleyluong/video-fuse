import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import PlaylistPoster from "../PlaylistPoster/PlaylistPoster";

const useStyles = makeStyles( (theme) => ({
    grid: {
        rowGap: theme.spacing(1),
        justifyContent: 'center'
    }
}));

export default function Playlist(props) {
    
    const classes = useStyles();
    const { handleRemoveVideo, playlist, indexOfVideoPlaying } = props;

    return (
        <Grid className={classes.grid} container>
            {playlist && playlist.map( (video, index) => (
                <PlaylistPoster 
                    key={index} 
                    video={video} 
                    handleRemoveVideo={handleRemoveVideo}
                    isCurrentVideo={index === indexOfVideoPlaying}
                />
            ))}
        </Grid>
    );
};