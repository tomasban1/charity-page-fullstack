import express from 'express';
import { isValidMoney, isValidStory } from '../../lib/isValid';
import { connection } from '../../db';

export const postStoryRouter = express.Router();

postStoryRouter.post('/', postStory);

async function postStory(req, res) {
    const { story, img, money } = req.body;

    const validStory = isValidStory(story);
    const validMoney = isValidMoney(money)

    if (!validStory || !validMoney) {
        return res.json({
            status: error,
            msg: 'Istorija neatitinka numatytu taisykliu'
        })
    }

    let storyId = 0;
    try {
        const sql = 'SELECT * FROM stories WHERE story = ? AND img = ? AND money = ?;';
        const [responseData] = connection.execute(sql, [story, img, money]);

        if (responseData.length === 1) {
            storyId = responseData[0].id
        }
    } catch (err) {
        return res.json({
            status: 'error',
            msg: 'Nepavyko sukurti naujos istorijos.'
        })

    }

    if (storyId === 0) {
        try {
            const sql = 'INSERT INTO stories (story, img, money) VALUES (?, ?, ?);';
            const [insertResponse] = connection.execute(sql, [story, img, money]);

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