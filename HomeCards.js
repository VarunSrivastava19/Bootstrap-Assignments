import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState,useEffect} from "react";
import axios from 'axios';

const RESTAURANT_DB_URL = 'http://localhost:8080/api/restaurants';




const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));
  

// const cards = [1];

export default function Album() {
  const classes = useStyles();

    const [data, setData] = useState({
      restaurants:[]
    });
    useEffect(()=>{
      const fetchRestaurants = async () => {
        try{
          setData(data=>({restaurants:data.restaurants}));
          const response = await axios.get(RESTAURANT_DB_URL);
          console.log(data);
          console.log('Restaurants: ',response);
          setData({restaurants:response.data});
          console.log(data.restaurants);
        } catch(e){
          console.log(e);
          setData(data=>({restaurants:data.restaurants}));
        }
      };
      fetchRestaurants();
    },[])

      //axios get 
  return (
    <React.Fragment>
        <main>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid container spacing={4}>
                    {data.restaurants.map((restaurant) => (
                        <Grid item key={restaurant} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                                />
                                <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {(restaurant.restName)||'restaurant name'}
                                </Typography>
                                <Typography variant="p" align="left" color="textSecondary" paragraph>
                                    {(restaurant.restAddress)||'restauarant address'}
                                </Typography>
                                <Typography variant="p" align="left" color="textPrimary" paragraph>
                                    {(restaurant.restId)||'restauarant ID'}
                                </Typography>
                                <Typography variant="p" align="left" color="textSecondary" paragraph>
                                    RATING
                                </Typography>                
                                </CardContent>
                                <CardActions>
                                    {/* Button 1 : for viewing/rating past orders*/}
                                <Button size="medium" variant="contained" color="secondary">
                                    Order Now
                                </Button>
                                </CardActions>
                            </Card>
                    </Grid>
                ))}
                </Grid>
            </Container>
        </main>
    </React.Fragment>
  );
}