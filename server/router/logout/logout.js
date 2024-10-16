import express from 'express';
import { connection } from '../../db.js';

export const logoutApiRouter = express.Router();

logoutApiRouter.get('/', getLogout);


logoutApiRouter.use((req, res) => {
    return res.json({
        status: 'error',
        data: 'Toks HTTP metodas api/login nepalaikomas',
    })
});

async function getLogout(req, res) {

    if (!req.cookies.loginToken) {
        return res.json({
            status: 'error',
            msg: 'Neegzistuojanciu sesiju neatjunginejame',
        });
    }

    try {
        const sql = 'DELETE FROM tokens WHERE token = ?;';
        const result = await connection.execute(sql, [req.cookies.loginToken]);



        if (result[0].affectedRows !== 1) {
            return res.json({
                status: 'error',
                msg: 'Nepavyko sukurti vartotojo sesijos, pabandykite veliau',
            });
        }
    } catch (error) {
        return res.json({
            status: 'error',
            msg: 'Del techniniu kliuciu nepavyko ivykdyti atsijungimo proceso, pabandykite veliau',
        });
    }

    const cookie = [
        'loginToken=' + req.cookies.loginToken,
        'path=/',
        'domain=localhost',
        `max-age=-1`,
        'SameSite = Lax',
        'HttpOnly',
    ]

    return res
        .set('Set-Cookie', cookie.join('; '))
        .json({
            status: 'success',
            msg: 'Atsijungta sekmingai.',
        });

}