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
import Grid from "@material-ui/core/Grid";
import SvG4 from "../../images/service1.jpg";
import {Itemcontainer,HeadContainer,Wrapper,HeadMessage ,Img,ServiceSec} from "./ServiceElements"
import SvG5 from "../../images/svg5.svg";
import img from '../../images/serviceBack.jpg';
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Service() {
  const classes = useStyles();
  return (
    <>

    <Container style={{background:{img}}}>
    <HeadContainer >

    <HeadMessage>Here are the<br /> services we offer</HeadMessage>
    <Img src={SvG5} ></Img>
    </HeadContainer>

    </Container>
    <ServiceSec>
      <Container  >
      <Itemcontainer>
          <Card className={classes.root} style={{height:"350px" ,marginTop:"10px"}}>
            <CardActionArea>
              <CardMedia
                style={{ height: "150px" }}
                className={classes.media}
                image={SvG4}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>

          <Card className={classes.root} style={{height:"350px" ,marginTop:"10px"}}>
            <CardActionArea>
              <CardMedia
                style={{ height: "150px" }}
                className={classes.media}
                image={SvG4}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
             
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>


          <Card className={classes.root} style={{height:"350px" ,marginTop:"10px"}}>
            <CardActionArea>
              <CardMedia
                style={{ height: "150px" }}
                className={classes.media}
                image={SvG4}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>

            </Card>
            <Card className={classes.root} style={{height:"350px" ,marginTop:"10px"}}>
            <CardActionArea>
              <CardMedia
                style={{ height: "150px" }}
                className={classes.media}
                image={SvG4}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
             
            </CardActions>
          
          </Card>


          <Card className={classes.root} style={{height:"350px" ,marginTop:"10px"}}>
            <CardActionArea>
              <CardMedia
                style={{ height: "150px" }}
                className={classes.media}
                image={SvG4}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
             
            </CardActions>
          
          </Card>



          <Card className={classes.root} style={{height:"350px" ,marginTop:"10px"}}>
            <CardActionArea>
              <CardMedia
                style={{ height: "150px" }}
                className={classes.media}
                image={SvG4}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
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
