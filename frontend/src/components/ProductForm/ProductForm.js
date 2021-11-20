import React, { useState } from 'react';
import { Grid, Button, TextField, MenuItem } from '@mui/material';

const ProductForm = ({ onSubmit, categories }) => {
    const [state, setState] = useState({
        title: "",
        description: "",
        price: "",
        image: null,
        category: "",
    });

    const submitFormHandler = e => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(state).forEach(key => {
            formData.append(key, state[key]);
        });

        onSubmit(formData);
    };

    const inputChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;
        setState(prevState => {
            return { ...prevState, [name]: value };
        });
    };

    const fileChangeHandler = e => {
        const name = e.target.name;
        const file = e.target.files[0];
        setState(prevState => {
            return { ...prevState, [name]: file };
        });
    }

    return (
        <Grid
            container
            direction="column"
            spacing={2}
            component="form"
            autoComplete="off"
            onSubmit={submitFormHandler}
            sx={{ padding: '1rem 4rem' }}
        >

            <Grid item xs>
                <TextField
                    required
                    fullWidth
                    variant="outlined"
                    label="Title"
                    name="title"
                    value={state.title}
                    onChange={inputChangeHandler}
                />
            </Grid>

            <Grid item xs>
                <TextField
                    required
                    fullWidth
                    variant="outlined"
                    type="number"
                    label="Price"
                    name="price"
                    value={state.price}
                    onChange={inputChangeHandler}
                />
            </Grid>

            <Grid item xs>
                <TextField
                    required
                    fullWidth
                    multiline
                    rows={3}
                    variant="outlined"
                    label="Description"
                    name="description"
                    value={state.description}
                    onChange={inputChangeHandler}
                />
            </Grid>

            <Grid item xs>
                <TextField
                    fullWidth
                    required
                    select
                    variant="outlined"
                    label="Category"
                    name="category"
                    value={state.category}
                    onChange={inputChangeHandler}
                >
                    <MenuItem>Select a category</MenuItem>
                    {categories.map(category => (
                        <MenuItem
                            key={category._id}
                            value={category._id}
                        >
                            {category.title}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item xs>
                <TextField
                    required
                    type="file"
                    name="image"
                    onChange={fileChangeHandler}
                />
            </Grid>

            <Grid item xs>
                <Button type="submit" color="primary" variant="contained">Create</Button>
            </Grid>
        </Grid>
    )
}

export default ProductForm;
