const getPromotedRes = `
select restaurant.* from promoted_res
inner join restaurant
on restaurant.id = promoted_res.restaurant_id
`;

const getCategories = `
select * from categories
`;

const getFavRes = (userId: number) => {
    return `
        select restaurant.* from fav
        inner join restaurant
        on restaurant.id = fav.restaurant_id
        where fav.user_id = ${userId}
        `;
};

export { getPromotedRes, getCategories, getFavRes };
