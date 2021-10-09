// import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Poster from "./Poster";
const useStyles = makeStyles((theme) => ({
    grid: {
        rowGap: theme.spacing(1)
    }
}));

export default function VideosList(props){
    // const posters = []
    const classes = useStyles();
    const { handleAddVideo, handleRemoveVideo } = props
    // useEffect(()=>{
    //     console.log('props',props)
    // })



    return (

            <Grid className={classes.grid} container >
                {props.videos.map((video, index)=>{
                    return <Poster key={index} video={video} handleAddVideo={handleAddVideo} handleRemoveVideo={handleRemoveVideo} />
                })}
            </Grid>
   
    )
}