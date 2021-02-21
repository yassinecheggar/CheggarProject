import React from "react";
import { Container } from "../../globalStyles";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import mystyle from "react-awesome-slider/dist/styles.css?raw";
import CustomModal from '../Modal/CustomModal'

import {
  Itemcontainer,
  HeadContainer,
  Wrapper,
  HeadMessage,
  Img,
  ServiceSec,
  ItemsTitle
} from "./ServiceElements";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function slider() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={5000}
      bullets={false}
      organicArrows={false}
      className="slider"
      style={mystyle}
    >
      <div data-src="image/serviceBack.jpg"></div>
      <div data-src="image/slider_formation_2.jpg"></div>
      
    </AutoplaySlider>
  );
}


function Service() {
  const classes = useStyles();
  return (
    <>
      
        <HeadContainer>
        {slider()}
        </HeadContainer>
        
      
      <ServiceSec>
        <Container>
          <ItemsTitle>NOS FORMATIONS</ItemsTitle>
          <Itemcontainer>
            <Card
              className={classes.root}
              style={{ height: "350px", marginTop: "10px" }}
            >
              <CardActionArea>
                <CardMedia
                  style={{ height: "150px" }}
                  className={classes.media}
                  image='image/Form1.jpg'
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Automatisme - Régulation
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
               
              <CustomModal />


              </CardActions>
            </Card>

            <Card
              className={classes.root}
              style={{ height: "350px", marginTop: "10px" }}
            >
              <CardActionArea>
              <CardMedia
                  style={{ height: "150px" }}
                  className={classes.media}
                  image='image/Form2.jpg'
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Electromécanique
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>

            <Card
              className={classes.root}
              style={{ height: "350px", marginTop: "10px" }}
            >
              <CardActionArea>
                <CardMedia
                  style={{ height: "150px" }}
                  className={classes.media}
                  image='image/Form3.jpg'
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Pneumatique - Hydraulique
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                Froid - Thermique
                </Button>
              </CardActions>
            </Card>
            <Card
              className={classes.root}
              style={{ height: "350px", marginTop: "10px" }}
            >
              <CardActionArea>
                <CardMedia
                  style={{ height: "150px" }}
                  className={classes.media}
                  image='image/Form4.jpg'
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Qualité - Sécurité
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>

            <Card
              className={classes.root}
              style={{ height: "350px", marginTop: "10px" }}
            >
              <CardActionArea>
                <CardMedia
                  style={{ height: "150px" }}
                  className={classes.media}
                  image='image/Form5.jpg'
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Electricité - Electronique
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>

            <Card
              className={classes.root}
              style={{ height: "350px", marginTop: "10px" }}
            >
              <CardActionArea>
                <CardMedia
                  style={{ height: "150px" }}
                  className={classes.media}
                  image='image/Form6.jpg'
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Froid - Thermique
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
              </CardActions>
            </Card>
          </Itemcontainer>
        </Container>
      </ServiceSec>
    </>
  );
}

export default Service;
