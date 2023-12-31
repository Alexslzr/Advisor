import React from 'react'
import useStyles from './styles'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import Phone from '@material-ui/icons/Phone'
import Rating from '@material-ui/lab/Rating'
import { FaInstagram } from "react-icons/fa";
import { GrSchedule } from "react-icons/gr";


const PlaceDetails = ({place, selected, refProp}) => {
  const classes = useStyles()

  if(selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start'})

  return (
    <Card elevation={6}>
      <CardMedia 
        style={{height: 350}}
        image={place.photo? place.photo: 'https://lh5.googleusercontent.com/p/AF1QipNkXCB7m-KraBOusMb3bTbD0nq33zY0_tAtTtZJ=w408-h306-k-no'}
        title={place.name}/>
      <CardContent>
          <Typography gutterBottom variant='h5'>{place.name}</Typography>
       {/*  <Box display='flex' justifyContent='space-between'>
              <Typography variant='subtitle1'>Price</Typography>
              <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
          </Box>*/} 
          <Box display='flex' justifyContent='space-between'>
              <Rating size='small' value={Number(place.rating)} readOnly/>
              <Typography gutterBottom variant='subtitle1'>out of {place.num_reviews} reviews</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between'>
              <Typography variant='subtitle1'>Ranking</Typography>
              <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
          </Box>
          {place?.awards?.map((award)=>(
            <Box my={1} display='flex' justifyContent='space-between' alignItems='center'>
              <img src={award.images.small} alt={award.display_name}/>
              <Typography variant='subtitle2' color='textSecondary'>{award.display_name}</Typography>
            </Box>
          ))}
          {place?.cuisine?.map(({name})=>(
            <Chip key={name} size='small' label={name} className={classes.chip} />
          ))}
          {place?.address && (
            <Typography variant='subtitle2' color='textSecondary' className={classes.subtitle} gutterBottom>
              <LocationOnIcon />{place.address}
            </Typography>
          )}
           {place?.phone && (
            <Typography variant='subtitle2' color='textSecondary' className={classes.spacing} gutterBottom>
              <Phone />{place.phone}
            </Typography>
          )}
          <CardActions>
            <Button size='small' color='primary' onClick={()=> window.open(place.web_url, '_blank')}>
                <GrSchedule />Agenda
            </Button>
            <Button size='small' color='primary' onClick={()=> window.open(place.website, '_blank')}>
               <FaInstagram /> Instagram
            </Button>
          </CardActions>
      </CardContent>
    </Card>
  )
}

export default PlaceDetails
