
import conn from "../database/database";

export const insert = async (jobData: any) => {
    let id = 0;
    try {
        let query = "INSERT INTO `job` (`title`, `company`, `location`, `salary`, `description`) VALUES (?, ?, ?, ?, ?)";

        //execute 
        let result = await conn.execute(query, [jobData.title, jobData.company, jobData.location, jobData.salary, jobData.description]);
        console.log('result.result', result);
        // const id=result[0]
        // id = result[0].insertId;
        return result[0];
    } catch (error) {
        console.log(error);
    }
    return id;
}

export const get = async () => {

    let result: any;
    try {
        let query = "SELECT * FROM `job` WHERE  isActive = 1 AND isDeleted = 0";
        let result: any = await conn.execute(query);
        console.log('result', result);
        const retData = result[0];
        return retData
    } catch (error) {
        console.log(error);
    }
    // return retData;
}


export const update = async (userData: any) => {

    try {
        let query = "UPDATE `job` SET title = ?, company = ?, location = ?,salary = ?, description = ? WHERE id=?";
        await conn.execute(query, [userData.title, userData.company, userData.location, userData.salary, userData.description, userData.id]);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}
export const jobDelete = async (id: any) => {

    try {
        let query = "UPDATE `job` SET isDeleted = 1 WHERE id=?";
        await conn.execute(query, [id]);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

// module.exports.delete = async (userData) => {

//     try {
//         let query = "DELETE FROM `users` WHERE id=?";
//         await conn.execute(query, [userData.id]);
//         return true;
//     } catch (error) {
//         console.log(error);
//         return false;
//     }
// }
