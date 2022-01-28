"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFavRes = exports.getCategories = exports.getPromotedRes = void 0;
const getPromotedRes = `
select restaurant.* from promoted_res
inner join restaurant
on restaurant.id = promoted_res.restaurant_id
`;
exports.getPromotedRes = getPromotedRes;
const getCategories = `
select * from categories
`;
exports.getCategories = getCategories;
const getFavRes = (userId) => {
    return `
        select restaurant.* from fav
        inner join restaurant
        on restaurant.id = fav.restaurant_id
        where fav.user_id = ${userId}
        `;
};
exports.getFavRes = getFavRes;
