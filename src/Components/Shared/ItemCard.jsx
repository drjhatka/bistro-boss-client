import React from 'react';

const ItemCard = ({menu}) => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="">
                    <img
                        src={menu.image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{menu.name}</h2>
                    <p>{menu.recipe.slice(0,50)}....</p>
                    <div className="card-actions">
                        <button className="btn btn-primary bg-yellow-800 font-semibold">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;