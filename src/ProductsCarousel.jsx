import React from 'react'
import { Grid, Card, Row, Text } from '@nextui-org/react';


const ProductsCarousel = ({list_items}) => {
// list_items : [ {title , img , price}] or null ; 
    
     let list = [
    {
      title: "Orange",
      img: "/images/fruit-1.jpeg",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      img: "/images/fruit-2.jpeg",
      price: "$3.00",
    },
    {
      title: "Cherry",
      img: "/images/fruit-3.jpeg",
      price: "$10.00",
    },
    {
      title: "Lemon",
      img: "/images/fruit-4.jpeg",
      price: "$5.30",
    },
    {
      title: "Avocado",
      img: "/images/fruit-5.jpeg",
      price: "$15.70",
    },
    {
      title: "Lemon 2",
      img: "/images/fruit-6.jpeg",
      price: "$8.00",
    },
    {
      title: "Banana",
      img: "/images/fruit-7.jpeg",
      price: "$7.50",
    },
    {
      title: "Watermelon",
      img: "/images/fruit-8.jpeg",
      price: "$12.20",
    },
    ];
    let full_link = "https://nextui.org"
    if (list_items) {// splitting the control flow 
        
        console.log("aa gya tuuu ")
        list = list_items; 
        full_link = "";

    }
    console.log(full_link); 
    return (
        <Grid.Container gap={ 2 } justify="flex-start">
            { list?.map((item, index) => {
                return (<Grid xs={6} sm={3} key={index}>
          <Card isPressable isHoverable={true}>
            <Card.Body css={{ p: 0 }}>
              <Card.Image
                src={list_items?item.img:`${full_link}${item.img}`}
                objectFit="cover"
                width="100%"
                height={140}
                alt={item.title}
              />
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{item.title}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {item.price}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>)
            }, this) }
       </Grid.Container>
  )
}

export default ProductsCarousel