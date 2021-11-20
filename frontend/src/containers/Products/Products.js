import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Card, CardMedia, CardContent, Button, CardActions, Grid } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Spinner from '../../components/UI/Spinner/Spinner';
import { fetchProducts } from '../../store/actions/productsActions';

const drawerWidth = 240;

const Products = ({ match }) => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const categories = useSelector(state => state.categories.categories);
    const fetchLoading = useSelector(state => state.products.fetchLoading);

    useEffect(() => {
        dispatch(fetchProducts(match.params.id));
    }, [dispatch, match.params.id]);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        All products
                    </Typography>
                </Toolbar>
            </Box>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                {categories ? categories.map(item =>
                    <NavLink to={"/category/" + item._id}
                        key={item._id}
                    >
                        <List>
                            <ListItem button >
                                <ListItemText primary={item.title} />
                            </ListItem>
                        </List>
                    </NavLink>
                ) : null}

                <List sx={{ marginTop: '3.1rem' }}>
                    <ListItem button >
                        <ListItemText primary='All items' />
                    </ListItem>
                </List>
                <List>
                    <ListItem button >
                        <ListItemText primary='Laptops' />
                    </ListItem>
                </List>
                <List>
                    <ListItem button >
                        <ListItemText primary='Tablets' />
                    </ListItem>
                </List>
                <List>
                    <ListItem button >
                        <ListItemText primary='Smartphones' />
                    </ListItem>
                </List>
            </Drawer>
            {
                fetchLoading ? (
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item>
                            <Spinner />
                        </Grid>
                    </Grid>
                ) :
                    products.map(product => (
                        <Box
                            component="main"
                            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                            key={product._id}
                        >
                            <Toolbar />
                            <Card sx={{ maxWidth: 300, margin: '1rem' }} >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.image}
                                    alt="no img"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.price}som
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button size="small" variant="outlined" component={Link} to={'/product/' + product._id}>More info</Button>
                                </CardActions>
                            </Card>
                        </Box>
                    ))
            }
        </Box>
    )
}

export default Products;
