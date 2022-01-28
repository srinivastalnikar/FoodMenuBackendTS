import db from "./dbConfig";

const executeQuery = async (query: string) => {
    console.log(query);
    try {
        const [rows] = await db.query(query);
        console.log("Query Executed");
        return { success: true, data: rows as any };
    } catch (err) {
        console.log("DB ERR", err);
        return { success: false, data: "ERROR_CONNECTING_TO_DATABASE" };
    }
};

export default executeQuery;
