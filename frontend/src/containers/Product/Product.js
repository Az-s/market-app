import React, { useEffect } from 'react';
import { Grid, Card, CardMedia, CardHeader, CardContent, Button, Typography, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, deleteProduct } from '../../store/actions/productsActions';

const Product = ({ match, history }) => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.products.product);

    useEffect(() => {
        dispatch(fetchProduct(match.params.id));
    }, [dispatch, match.params.id]);

    const deleteItem = async (id) => {
        try {
            await dispatch(deleteProduct(id));
        } finally {
            history.push('/');
        }
    };

    return product && (
        <Grid container justifyContent='center' key={product._id}>
            <Card sx={{ minWidth: 600, margin: '1rem' }}>
                <CardHeader
                    title={product.title}
                    subheader={product.category}
                />
                <CardMedia
                    component="img"
                    height="300"
                    image={product.image}
                    alt="album"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                        {product.description}
                    </Typography>
                </CardContent>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                        {product.username} {' '} {product.phone}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button
                        variant="outlined"
                        startIcon={<DeleteIcon />}
                        color="error"
                        onClick={() => deleteItem(product._id)}
                    >
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Product;
