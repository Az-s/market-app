import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Card, CardMedia, CardContent, Button, CardActions } from '@mui/material';
import { Link } from "react-router-dom";

const drawerWidth = 240;

const Products = () => {
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
                <List sx={{marginTop: '3.1rem'}}>
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
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Card sx={{ maxWidth: 300, margin: '1rem' }} >
                    <CardMedia
                        component="img"
                        height="200"
                        image='https://images.pexels.com/photos/441963/pexels-photo-441963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                        alt="executor"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            MacBook
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            80 000 som
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button size="small" variant="outlined" component={Link} to='/product/:id'>More info</Button>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    )
}

export default Products;
