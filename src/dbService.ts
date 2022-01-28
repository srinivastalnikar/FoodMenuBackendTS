import db from "./dbConfig";

const executeQuery = async (query: string) => {
    console.log(query);
    try {
        const [rows] = await db.query(query);
        console.log("QUERY_EXECUTED");
        return { success: true, data: rows as any };
    } catch (err) {
        console.log("DB ERR", err);
        return { success: false, data: "DATABASE_ERR" };
    }
};

export default executeQuery;
