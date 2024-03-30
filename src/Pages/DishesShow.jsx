import React, { useContext } from 'react';
import { FoodContext } from '../Context/foodContext';
import { useParams } from 'react-router-dom';
import FoodDisplay from '../Components/FoodDisplay/FoodDisplay';
import DescriptionBox from '../Components/Discription/Discription';
import RelatedItems from '../Components/RelatedItems/RelatedItems';

const DishesShow = () => {
    const { allProduct } = useContext(FoodContext);
    const disheId = useParams();
    // console.log(disheId.plateId.slice((disheId.plateId.indexOf("=") + 1)));
    const numberDisheId = Number(disheId.plateId.slice((disheId.plateId.indexOf("=") + 1)));
    const product = allProduct.find((e) => e.id === numberDisheId);

    return (
        <>

            <FoodDisplay dishe={product} />

            <DescriptionBox />

            <RelatedItems />

        </>
    );
};

export default DishesShow;





