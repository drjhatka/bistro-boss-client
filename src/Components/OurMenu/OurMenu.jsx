import React, { useContext } from 'react';
import Card from './Card';
import SectionTitle from '../Shared/SectionTitle';
import { DataContext } from '../Providers/DataProvider';
import MenuCard from '../Shared/MenuCard';
import SectionButton from '../Shared/SectionButton';
import MenuByCategory from './MenuByCategory';

const OurMenu = () => {
    const { menuData } = useContext(DataContext)
    const dessertData = menuData.filter((menu) => menu.category == 'dessert').slice(0,6)
    const saladData = menuData.filter((menu) => menu.category == 'salad').slice(0,6)
    const soupData = menuData.filter((menu) => menu.category == 'soup').slice(0,6)
    const pizzaData = menuData.filter((menu) => menu.category == 'pizza').slice(0,6)
    console.log('Des-> ',dessertData)
    return (
        <div className='max-w-[80%] mx-auto'>
            <div>
                <Card text={'Our Menu'} subtext={'Would you like to try'} transparent={true} image={'assets/home/chef-service.jpg'}></Card>
            </div>
            <div>
                <SectionTitle heading={"Today's Offer"} subheading={'Dont Miss'}></SectionTitle>
            </div>
            <div className='grid md:grid-cols-2 mb-4 gap-4'>
                {
                    menuData.slice(0, 6).map((menu, index) => {
                        return <MenuCard key={'MenuCard-' + index} image={menu.image} title={menu.name} price={menu.price} details={menu.recipe}></MenuCard>
                    })
                }
            </div>
            <div className='flex justify-center py-3'>
                <SectionButton text={'Order your favorite food'} ></SectionButton>
            </div>
            <MenuByCategory menuData={dessertData} ></MenuByCategory>
            <MenuByCategory menuData={saladData} ></MenuByCategory>
            <MenuByCategory menuData={soupData} ></MenuByCategory>
            <MenuByCategory menuData={pizzaData} ></MenuByCategory>
        </div>

    );
};

export default OurMenu;