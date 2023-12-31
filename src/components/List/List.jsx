 import React, {useState, useEffect, createRef} from 'react'
import { CircularProgress, Grid, Typography, MenuItem, FormControl, Select, InputLabel, Card } from '@material-ui/core'
import PlaceDetails from '../PlaceDetails/PlaceDetails'
import useStyles from './styles'
import { useStateContext } from '../../contexts/contextProvider'

const List = ({places}) => {
  const classes = useStyles()
  const {childClicked, loading, rating, type, setType, setRating } = useStateContext()
  const [elRefs, setElRefs] = useState([])


  useEffect(()=>{
      setElRefs((refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));
  },[places])
  
  return (
    <div className={classes.container}>
      <Typography variant='h4'>Barber</Typography>
      {loading? (
        <div className={classes.loading}>
          <CircularProgress size='5rem'/>
        </div>
      ):(
        <>
          <FormControl className={classes.formControl}>
              <InputLabel>Type</InputLabel>
              <Select value={type}  onChange={(e)=>setType(e.target.value)}>
                  <MenuItem value='barber'>Barbers</MenuItem>
                  <MenuItem value='beauty-salon'>Beauty Salon</MenuItem>
                  <MenuItem value='nail-salon'>Nails Salon</MenuItem>
              </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
              <InputLabel>Rating</InputLabel>
              <Select value={rating}  onChange={(e)=>setRating(e.target.value)}>
                  <MenuItem value={0}>All</MenuItem>
                  <MenuItem value={3}>Above 3.0</MenuItem>
                  <MenuItem value={4}>Above 4.0</MenuItem>
                  <MenuItem value={4.5}>Above 4.5</MenuItem>
              </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
              {places?.map((place, i)=>(
                <Grid ref={elRefs[i]} item key={i} xs={12}>
                  <PlaceDetails place={place}
                  selected={Number(childClicked)===i}
                  refProp={elRefs[i]}/>
                </Grid>
              ))}
          </Grid>
      </>
      )}
      
    </div>
  )
}

export default List
