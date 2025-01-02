import React from 'react'
import Slider from '../component/home/slider'
import GlobalFood from '../component/home/globalFood'
import PopularProducts from '../component/home/popularProducts'
import Farmproducts from '../component/home/farmproducts'
import Healthylife from '../component/home/healthylife'
import FreshVegetables from '../component/home/freshVegetables'

const Home = () => {
  return (
    <div>
        <Slider />
        <GlobalFood />
        <PopularProducts />
        <Farmproducts />
        <Healthylife />
        <FreshVegetables />
    </div>
  )
}

export default Home