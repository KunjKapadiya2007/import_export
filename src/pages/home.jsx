import React from 'react'
import Slider from '../component/home/slider'
import GlobalFood from '../component/home/globalFood'
import PopularProducts from '../component/home/popularProducts'
import Farmproducts from '../component/home/farmproducts'
import Healthylife from '../component/home/healthylife'
import FreshVegetables from '../component/home/freshVegetables'
import Clients from "../component/home/Clients";

const Home = () => {
  return (
    <div>
        <Slider />
        <GlobalFood />
        <PopularProducts />
        <Farmproducts />
        <Healthylife />
        <FreshVegetables />
        <Clients/>
    </div>
  )
}

export default Home