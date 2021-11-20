import React from 'react';
import Typography from '@mui/material/Typography';
import ProductForm from '../../components/ProductForm/ProductForm';
import { useDispatch } from "react-redux";

const NewProduct = ({history}) => {
    const dispatch = useDispatch();

    // const onSubmit = async messageData => {
    //     await dispatch(createMessage(messageData));
    //     history.replace('/');
    // };

    return (
        <>
            <Typography variant="h4" sx={{ margin: '1rem 0' }}>New message</Typography>
            <ProductForm
                onSubmit={onSubmit}
            />
        </>
    )
}

export default NewProduct;
