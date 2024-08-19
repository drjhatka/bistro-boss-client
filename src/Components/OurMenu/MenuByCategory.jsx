import React from 'react';
import Card from './Card';
import MenuCard from '../Shared/MenuCard';

const MenuByCategory = ({ menuData }) => {
    return (
        <div>
            <div>
                <Card text={menuData[0].category.toUpperCase()} image={menuData[0].image} transparent={true}
                    subtext={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eos earum incidunt, corporis deleniti magnam! Eveniet, delectus. Hic delectus dolores voluptatem autem ad eaque aut enim harum necessitatibus repudiandae. Nesciunt!'}>
                </Card>
            </div>
            <div className='grid md:grid-cols-2 mb-4 gap-4'>
                {
                    menuData.map((menu, index) => {
                        return <div key={'MenuCard-' + index}>
                            <MenuCard image={menu.image} title={menu.name} price={menu.price} details={menu.recipe}></MenuCard>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default MenuByCategory;