import React from 'react'
import { GenericView, GenericImage, GenericText, GenericTouchableOpacity } from '../assets/css/index'

// Props tipini tanımlayalım
interface ProductCardProps {
    title: string;
    price: number;
    imageSource: string;
    onPress: () => void;
};

const ProductCard: React.FC<ProductCardProps> = (props) => {
    return (
        <GenericTouchableOpacity onPress={props.onPress}>
            {/* <GenericImage source={props.imageSource} /> */}
            <GenericView>
                <GenericText>{props.title}</GenericText>
                <GenericText>{props.price}</GenericText>
            </GenericView>
        </GenericTouchableOpacity>
    );
};

export default ProductCard;