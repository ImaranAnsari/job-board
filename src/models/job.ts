
import conn from "../database/database";

export const insert = async (jobData: any) => {
    try {
        let query = "INSERT INTO `job` (`title`, `company`, `location`, `salary`, `description`) VALUES (?, ?, ?, ?, ?)";

        let result = await conn.execute(query, [jobData.title, jobData.company, jobData.location, jobData.salary, jobData.description]);
        return result[0];
    } catch (error) {
        console.log(error);
    }
}

export const get = async () => {

    let result: any;
    try {
        let query = "SELECT * FROM `job` WHERE  isActive = 1 AND isDeleted = 0";
        let result: any = await conn.execute(query);
        const retData = result[0];
        return retData
    } catch (error) {
        console.log(error);
    }
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
