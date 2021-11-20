import React from 'react';
import Typography from '@mui/material/Typography';
import ProductForm from '../../components/ProductForm/ProductForm';
import { useDispatch } from "react-redux";

const NewProduct = ({history}) => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.categories.categories);

    useEffect(() => {
        dispatch(fetchCategories());
      }, [dispatch]);

    const onSubmit = async productData => {
        await dispatch(createProduct(productData));
        history.replace('/');
    };

    return (
        <>
            <Typography variant="h4" sx={{ margin: '1rem 0' }}>New product</Typography>
            <ProductForm
                onSubmit={onSubmit}
                categories={categories}
            />
        </>
    )
}

export default NewProduct;
