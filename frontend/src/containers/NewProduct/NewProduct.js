import React , {useEffect} from 'react';
import Typography from '@mui/material/Typography';
import ProductForm from '../../components/ProductForm/ProductForm';
import {useDispatch, useSelector} from "react-redux";
import {createProduct} from "../../store/actions/productsActions";
import {fetchCategories} from "../../store/actions/categoriesActions";

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
