
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import next_js_logo from './assets/next-js.svg'
import MainNavBar from './MainNavBar.jsx'
import CategoryBar from './CategoryBar'; 
import ButtonGroupCategories from './ButtonGroupCategories'
import ProductsCarousel from './ProductsCarousel'
// import EasyComponent from './Components/EasyComponent'
import fashion_item_1 from './assets/fashion-item-1.jpg'; 
import fashion_item_2 from './assets/fashion-item-2.jpg'; 
import fashion_item_3 from './assets/fashion-item-3.jpg'; 
import fashion_item_4 from './assets/fashion-item-4.jpg';
import fashion_item_5 from './assets/fashion-item-5.jpg';
import fashion_item_6 from './assets/fashion-item-6.jpg';
import fashion_item_7 from './assets/fashion-item-7.jpg';
import fashion_item_8 from './assets/fashion-item-8.jpg';
import fashion_item_9 from './assets/fashion-item-9.jpg';
//sports item import 
import sports_item_1 from './assets/sports-item-1.jpg';
import sports_item_2 from './assets/sports-item-2.jpg';
import sports_item_3 from './assets/sports-item-3.jpg';
import sports_item_4 from './assets/sports-item-4.jpg';
import sports_item_5 from './assets/sports-item-5.jpg';
import sports_item_6 from './assets/sports-item-6.jpg';
import sports_item_7 from './assets/sports-item-7.jpg';
import sports_item_8 from './assets/sports-item-8.jpg';

import {  Text,  Spacer } from '@nextui-org/react'; 
function App() {

// list_items : [ {title , img , price}] or null ; 
  
  
  const Fashion_list_items = [
    {
      title: "red hand purse",
      img: fashion_item_1,
      price: "1000$",
    }, 
    {
      title: "Prada",
      img: fashion_item_2,
      price: "999$",
    },
    {
      title: "Coco chanel fragrance",
      img:fashion_item_3,
      price: "1000$",
    },
    {
      title: "red hand purse",
      img: fashion_item_4,
      price: "1000$",
    },
    {
      title: "red hand purse",
      img: fashion_item_5,
      price: "1000$",
    },
    {
      title: "red hand purse",
      img: fashion_item_6,
      price: "1000$",
    },
    {
      title: "red hand purse",
      img: fashion_item_7,
      price: "1000$",
    },
    {
      title: "red hand purse",
      img: fashion_item_8,
      price: "1000$",
    },
    {
      title: "red hand purse",
      img: fashion_item_9,
      price: "1000$",
    }
  ] 
  const Sports_list_items = [
    {
      title: "red hand purse",
      img: sports_item_1,
      price: "1000$",
    },
    {
      title: "red hand purse",
      img: sports_item_2,
      price: "1000$",
    },
    {
      title: "red hand purse",
      img: sports_item_3,
      price: "1000$",
    },
    {
      title: "red hand purse",
      img: sports_item_4,
      price: "1000$",
    },
    {
      title: "red hand purse",
      img: sports_item_5,
      price: "1000$",
    },
    {
      title: "red hand purse",
      img: sports_item_6,
      price: "1000$",
    },
    {
      title: "red hand purse",
      img: sports_item_7,
      price: "1000$",
    },
    {
      title: "red hand purse",
      img: sports_item_8,
      price: "1000$",
    },
  ]

  return (
    <div className="">
      <MainNavBar />
      <Spacer y={ 2 } />
      <Text color="$gray800" size={ "$4xl" } weight="light" i
      
        css={ {
          textAlign: 'start',
        }}
      
      >Shop By categories</Text>
      <Spacer y={ 2 } />
      
      <ButtonGroupCategories />
      <Spacer y={ 2 } />
      <Text color="$gray800" size={ "$4xl" } weight="light" i
      
        css={ {
          textAlign: 'start',
        }}
      
      >Explore Our Selections</Text>
      <Spacer y={ 2 } />
      
      <CategoryBar/>
      <Spacer y={ 2 } />
      <Text color="$gray800" size={ "$4xl" } weight="light" i
              css={ {
          textAlign: 'start',
        }}
      
      >Shop Groceries</Text>
      <ProductsCarousel />
            <Text color="$gray800" size={ "$4xl" } weight="light" i
              css={ {
          textAlign: 'start',
        }}
      
      >Shop Fashion</Text>

      <ProductsCarousel  list_items={Fashion_list_items}/>
            <Text color="$gray800" size={ "$4xl" } weight="light" i
              css={ {
          textAlign: 'start',
        }}
      
      >Explore Sports like a champ</Text>

      <ProductsCarousel  list_items={Sports_list_items}/>



    </div>
  )
}

export default App
