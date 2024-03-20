
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Input from './Input';

export default function Products() {
  const Productss =[
    {
      "ProductName" : "Laptop1",
      "Price":12234,
      "rating":4.7,
      "discount":63,
      "availabaility":"yes"
    },
    {
      "ProductName" : "Laptop2",
      "Price":12234,
      "rating":4.7,
      "discount":63,
      "availabaility":"yes"
    },
    {
      "ProductName" : "Laptop3",
      "Price":12234,
      "rating":4.7,
      "discount":63,
      "availabaility":"yes"
    },
    {
      "ProductName" : "Laptop4",
      "Price":12234,
      "rating":4.7,
      "discount":63,
      "availabaility":"yes"
    },
    {
      "ProductName" : "Laptop5",
      "Price":12234,
      "rating":4.7,
      "discount":63,
      "availabaility":"yes"
    },
    
  ]

  

  return (
    <>
      <Input/>
      {Productss.map((product) => (
        <Card class="bg-slate-500 " key={product.id} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image="./assets/pexels-craig-dennis-205421.jpg"
            title="Product 1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.ProductName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: {product.Price}
              <br/>
              Rating: {product.rating}
              <br/>
              Discount: {product.discount}
              <br/>
              Availability: {product.availabaility}
            </Typography>
          </CardContent>
          <CardActions className="text-center">
            <Button size="small">View</Button>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
      ))}
      <br />
    </>
  );
}