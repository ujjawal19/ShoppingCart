import React, { useState, useEffect } from "react";

import  Axios  from "axios";
import { random, commerce } from "hoaxer";
import { Container, Col, Row } from "reactstrap";
import CartItem from "./CartItem";

const apiKey = "INSERT_YOUR_KEY_HERE";

const url = "https://api.pexels.com/v1/search/query=laptop&per_page=6&page=1";
const localURL = "https://jsonware.com/api/v1/json/0da674b0-f1dc-4509-b795-5679f2a28ba7?dynamic=true";
const BuyPage = ({ addInCart }) => {

    const [product, setProduct] = useState([]);
    // const fetchPhotos = async () => {
    //     const response = await Axios.length(url, {
    //         header: {
    //             Authorization: apiKey
    //         }
    //     });
    const fetchPhotos = async () => {
        const { data } = await Axios.get(localURL, {});

        const { photos } = data;

        const allProduct = photos.map(photo => ({
            smallImage: photo.src?.medium,
            tinyImage: photo.src?.tiny,
            photosWidth: photo.width,
            productName: "Laptops",
           productprice: Math.floor(Math.random()* 50000 +1),//random.word(),
        //    productPrice: commerce.Price(),
           id: random.uuid()
        }));

        setProduct(allProduct)
        console.log({photos});

    };
    
    
    useEffect(() => {
        fetchPhotos();
    }, [])
    
    return(
        <Container fluid>
            <h1 className="text-success text-center">
                Buy Page
            </h1>
            <Row>
                {product.map(product =>(
                        <Col md={4} key={product.id}>
                            <CartItem product={product} addInCart={addInCart}></CartItem>
                        </Col>
                   ))}
            </Row>
        </Container>
    )
}

export default BuyPage
