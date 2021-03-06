const getDishDetails = (dishId: number) => {
    const query = `
    select * from dish
    where id = ${dishId}
    `;
    return query;
};

const getAddonsForDish = (dishId: number) => {
    const query = `
    select add_on.* from dish
    inner join add_on_dish on dish_id = ${dishId} and dish_id = dish.id
    inner join add_on on add_on.id = add_on_dish.add_on_id
    `;
    return query;
};

const addDishToCart = (userId: number, dishId: number, quantity: number) => {
    const query = `
    INSERT INTO order_item (quantity, user_id, dish_id) VALUES (${quantity}, ${userId}, ${dishId})
    `;
    return query;
};

const getInstancesInCart = (userId: number, dishId: number) => {
    const query = `
    select sum(quantity) as count
    from order_item
    where dish_id = ${dishId} and user_id = ${userId}
    `;
    return query;
};

const mapAddonsWithOrder = `
INSERT INTO order_item_add_on (order_item_id, add_on_id) values ?
`;

const increaseQuantityInCart = (orderId: number) => {
    return `
    UPDATE order_item 
    set quantity = quantity + 1
    where id = ${orderId}
    `;
};

export {
    getDishDetails,
    getAddonsForDish,
    addDishToCart,
    mapAddonsWithOrder,
    getInstancesInCart,
    increaseQuantityInCart,
};
