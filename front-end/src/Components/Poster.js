import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {Grid} from "@material-ui/core";
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    posterUnclicked: {
        backgroundColor: 'white',
        padding: theme.spacing(1),
        margin:'auto',
        width: '90%',
        opacity: '50%'
    },
    posterClicked: {
        backgroundColor: 'black',
        padding: theme.spacing(1),
        margin: 'auto',
        width: '90%'
    },
    poster: {
        width: '100%'
    }
}));

export default function Poster(props){
    // console.log('props',props)
    const { video, handleAddVideo, handleRemoveVideo } = props
    const [clicked, setClicked] = useState(false)
    const classes = useStyles();
    const handleClick = (video) => {
        // console.log('line 32 video',video)
        setClicked(!clicked)
        clicked ? handleRemoveVideo(video) : handleAddVideo(video)
    }
    return (
        <Grid item xs={3}>
                <Paper className={clicked ? classes.posterClicked : classes.posterUnclicked} onClick={()=>{handleClick(video)}}>
                    <img className={classes.poster} src={video.poster} alt={'video poster'}/>
                </Paper>
        </Grid>
    )
}  