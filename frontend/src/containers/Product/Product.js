import React from 'react';
import { Grid, Card, CardMedia, CardHeader, CardContent, Button, Typography, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";

const Product = () => {
    return (
        <Grid container justifyContent='center'>
            <Card sx={{ minWidth: 600, margin: '1rem' }}>
                <CardHeader
                    title="MacBook"
                    subheader="category"
                />
                <CardMedia
                    component="img"
                    height="300"
                    image='https://images.pexels.com/photos/441963/pexels-photo-441963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                    alt="album"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                        Description about product
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                        John Doe +77 77 77
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button variant="outlined" startIcon={<DeleteIcon />} color="error">
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Product;
