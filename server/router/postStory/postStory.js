import express from 'express';
import { isValidMoney, isValidStory } from '../../lib/isValid.js';
import { connection } from '../../db.js';

export const postStoryRouter = express.Router();

postStoryRouter.post('/', postStory);

async function postStory(req, res) {
    const { story, img, money } = req.body;

    const validStory = isValidStory(story);
    // const validMoney = isValidMoney(money)

    if (!validStory) {
        return res.json({
            status: 'error',
            msg: 'Istorija neatitinka numatytu taisykliu'
        })
    }

    let storyId = 0;
    try {
        const sql = 'SELECT * FROM stories WHERE story = ?;';
        const [responseData] = await connection.execute(sql, [story]);

        if (responseData.length === 1) {
            storyId = responseData[0].id
        }
    } catch (err) {
        console.log(err);

        return res.json({
            status: 'error',
            msg: 'Nepavyko sukurti naujos istorijos.'
        })

    }

    if (storyId === 0) {
        try {
            const sql = 'INSERT INTO stories (story, img, expected_sum) VALUES (?, ?, ?);';
            const [insertResponse] = await connection.execute(sql, [story, img, money]);

            if (insertResponse.affectedRows === 1) {
                storyId = insertResponse.insertId
            }
        } catch (err) {
            return res.json({
                status: 'error',
                msg: 'Nepavyko sukurti naujos istorijos.'
            })
        }
    }


    return res.json({
        status: 'success',
        data: 'Nauja istorija uzregistruota',
    });
}