import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './style';
const currDate = new Date().getDate();
const currYear = new Date().getFullYear();
const currDay = new Date(). toLocaleDateString('en-US',{ weekday: 'long'}).toUpperCase();
const currMonth = new Date(). toLocaleDateString('en-US',{ month: 'long'}).toUpperCase();

const infoCards = [
    { color: '#00838f', title: 'Latest News',info:'Get news from every source around the world...', text: 'Give me the latest news or latest news' },
    { color: '#1565c0', title: 'News by Category', info: 'Business, Entertainment, General, Health, Science, Sports, Technology...', text: 'Bring me latest sports news or Entertainment news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Conoravirus, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5 or something from Bollywood' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, The Times of India,The Hindu BBC News, Time, IGN, ABC News...', text: 'Give me the news from CNN or news from The Hindu' },
  ];
const infoCards2 = [
    { color: '#00838f', title: 'To Open: Open article 2 '},
    { color: '#1565c0', title: 'To GoBack: Go Back '},
    { color: '#1565c0', title: 'To Read more: Say sure '},
    { color: '#1565c0', title: 'To Stop: Tap on button '}
  ];

const NewsCards = ({ articles , activeArticles}) => {
    const classes = useStyles();

    if(!articles.length){
        return(
        <div>
            <Grow in>
                <Grid>
                    <p className={classes.currentDay}>{currDay}     |    {currMonth}     {currDate},    {currYear}</p>
                    <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                    {infoCards.map((infoCards) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCards}>
                            <div className={classes.card}>
                                <Typography variant="h5" className={classes.title}>{infoCards.title}</Typography>
                                <Typography variant="h6" className={classes.info}>{infoCards.info}</Typography>
                                <Typography variant="h6" className={classes.text}>Try saying: <br /> <i>{infoCards.text}</i></Typography>
                            </div>

                        </Grid>
                    ))}
                    </Grid>
                </Grid>
            </Grow>
        </div>
        )
    }

    return (
        <div>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                    {infoCards2.map((infoCards2) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCards2}>
                            <div className={classes.card2}>
                                <Typography variant="h5" className={classes.title2}>{infoCards2.title}</Typography>
                            </div>

                        </Grid>
                    ))}
            </Grid>
        
        <Grow in>
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                    {articles.map((articles,i) => (
                        <Grid item xs={12} sm={6} md={4} lg={4} style={{ display: 'flex'}}>
                             <NewsCard articles={ articles } activeArticles = { activeArticles } i={i} /> 
                       </Grid>
                    ))}

            </Grid>
        
        </Grow>
        </div>
    )
}

export default NewsCards;
