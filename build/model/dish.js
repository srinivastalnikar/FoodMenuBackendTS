"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.increaseQuantityInCart = exports.getInstancesInCart = exports.mapAddonsWithOrder = exports.addDishToCart = exports.getAddonsForDish = exports.getDishDetails = void 0;
const getDishDetails = (dishId) => {
    const query = `
    select * from dish
    where id = ${dishId}
    `;
    return query;
};
exports.getDishDetails = getDishDetails;
const getAddonsForDish = (dishId) => {
    const query = `
    select add_on.* from dish
    inner join add_on_dish on dish_id = ${dishId} and dish_id = dish.id
    inner join add_on on add_on.id = add_on_dish.add_on_id
    `;
    return query;
};
exports.getAddonsForDish = getAddonsForDish;
const addDishToCart = (userId, dishId, quantity) => {
    const query = `
    INSERT INTO order_item (quantity, user_id, dish_id) VALUES (${quantity}, ${userId}, ${dishId})
    `;
    return query;
};
exports.addDishToCart = addDishToCart;
const getInstancesInCart = (userId, dishId) => {
    const query = `
    select sum(quantity) as count
    from order_item
    where dish_id = ${dishId} and user_id = ${userId}
    `;
    return query;
};
exports.getInstancesInCart = getInstancesInCart;
const mapAddonsWithOrder = `
INSERT INTO order_item_add_on (order_item_id, add_on_id) values ?
`;
exports.mapAddonsWithOrder = mapAddonsWithOrder;
const increaseQuantityInCart = (orderId) => {
    return `
    UPDATE order_item 
    set quantity = quantity + 1
    where id = ${orderId}
    `;
};
exports.increaseQuantityInCart = increaseQuantityInCart;
