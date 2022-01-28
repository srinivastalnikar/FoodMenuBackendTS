const getAllItemsInCart = (userId: number) => {
    return `
    select order_item.id as order_id, order_item.*, dish.* from order_item
	inner join dish on order_item.dish_id = dish.id
	where user_id = ${userId}
`;
};

const getOrderItemDetail = (userId: number, orderItemId: number) => {
    return `
        select order_item.id as order_id, order_item.*, dish.* from order_item
    	inner join dish on order_item.dish_id = dish.id
    	where user_id = ${userId} and order_item.id = ${orderItemId}
        `;
};

const getAddonsForOrderItem = (orderItemId: number) => {
    return `
        select add_on.* from add_on
        inner join order_item_add_on on order_item_add_on.add_on_id = add_on.id
        inner join order_item on order_item.id = order_item_add_on.order_item_id
        where order_item.id = ${orderItemId}
        `;
};

const deleteItemFromCart = (orderId: number, userId: number) => {
    return `
        delete from order_item
        where id = ${orderId} and user_id = ${userId}
        `;
};

const decreaseQuantityInCart = (orderId: number) => {
    return `
        update order_item
        set quantity = quantity - 1
        where id = ${orderId}
        `;
};

const checkOutCartItems = (userId: number) => {
    return `
        delete from order_item where user_id = ${userId}
        `;
};

export {
    getAllItemsInCart,
    getOrderItemDetail,
    checkOutCartItems,
    deleteItemFromCart,
    getAddonsForOrderItem,
    decreaseQuantityInCart,
};
