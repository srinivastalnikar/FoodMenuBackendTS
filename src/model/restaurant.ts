const getAllDishes = (resId: number) => {
    const query = `
select dish.* from dish
inner join restaurant on dish.restaurant_id = ${resId} and dish.restaurant_id = restaurant.id
`;
    return query;
};

const getDishByName = (resId: number, name: string) => {
    const query = `
    select dish.* from dish
    inner join restaurant on dish.restaurant_id = ${resId} and dish.restaurant_id = restaurant.id
    where dish.name like "%${name}%"
    limit 10
    `;
    return query;
};

const getDishByDesc = (resId: number, desc: string) => {
    const query = `
select dish.* from dish
inner join restaurant on dish.restaurant_id = ${resId} and dish.restaurant_id = restaurant.id
where match(dish.description) against("${desc}")
limit 10
`;
    return query;
};

const getDishByCuisine = (resId: number, cuisine: string) => {
    const query = `
select dish.* from dish
inner join restaurant on dish.restaurant_id = ${resId} and dish.restaurant_id = restaurant.id
where cuisine like "${cuisine}%"
limit 10
`;
    return query;
};

const getDishByCategory = (resId: number, category: string) => {
    const query = `
select distinct(dish.id) as uniqueIds, dish.* from categories
inner join category_dish
on category_dish.categories_id = (select id where categories.name like "${category}%")
inner join dish
on category_dish.dish_id = dish.id
inner join restaurant on dish.restaurant_id = ${resId} and dish.restaurant_id = restaurant.id
limit 10
`;
    return query;
};

const addResToFav = (userId: number, resId: number) => {
    return `
        insert into fav (restaurant_id, user_id) values (${resId}, ${userId});
        `;
};

const removeResFromFav = (userId: number, resId: number) => {
    return `
        delete from fav
        where restaurant_id = ${resId} and user_id = ${userId}
        `;
};

const getResDetails = (resId: number) => {
    const query = `
    select restaurant.* from restaurant
    where id = ${resId}
    `;
    return query;
};

const getIdNameMap = (resId: number) => {
    return `
        select name from restaurant
        where id = ${resId}
        `;
};

export {
    getDishByName,
    getDishByCategory,
    getDishByDesc,
    getDishByCuisine,
    getAllDishes,
    getResDetails,
    addResToFav,
    removeResFromFav,
    getIdNameMap,
};
