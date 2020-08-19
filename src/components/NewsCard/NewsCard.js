import React, { useEffect, useState, createRef } from 'react';
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import className from 'classnames';
import useStyles from './style';

const NewsCard = ( { articles: {description, publishedAt, source, title, url, urlToImage}, i , activeArticles}) => {
    const classes = useStyles();

    const [elRefs, setElRefs] = useState([]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 20);

    useEffect(() =>{
        setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    },[]);

    useEffect(() =>{
        if(i === activeArticles && elRefs[activeArticles]){
            scrollToRef(elRefs[activeArticles]);
        }
    },[i, activeArticles, elRefs])

    return (
        <Card ref={elRefs[i]} className={className(classes.card, activeArticles === i ? classes.activeCard : null )}>
            <CardActionArea href={url} traget="_blank">
                <CardMedia className={classes.media} image={urlToImage || 'https://media.pitchfork.com/photos/5c4791006250af5b8085cd2f/2:1/w_2560%2Cc_limit/GenericNewsImage-3.jpg'} />
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                    <Typography className={classes.title} gutterBotton variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="textSecondary">{ i + 1 }</Typography>
            </CardActions>
        </Card>
    )
}

export default NewsCard;
