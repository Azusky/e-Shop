import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShopIcon from '@material-ui/icons/Shop';
import AddToCartButton from '../cart/AddToCart';
import { MenuCart } from '../cart/MenuCart';
import Attribute from '../attribute/Attribute';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));






export default function ProductCard({actions,id,name,description,imageUrls,attributes}) {
  const classes = useStyles();
    console.log(attributes)
  return (
     <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            $$
          </Avatar>
        }
        action={
            <MenuCart/>

        }
        title={name}
        subheader={description}
      />
      <CardMedia
        className={classes.media}
        image={imageUrls[1]}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        <ul>
                {attributes.map(attr => <li><Attribute attribute = {attr}/></li>)} {/* nu trageti atentia la asta eu in graba asta am facut :)*/}
        </ul>
        {/* {attributes.map(attr => <Attribute attribute = {attr}/>)} */}

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {actions}
      </CardActions>

    </Card>
  );
}
