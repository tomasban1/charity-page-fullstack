import express from 'express';
import { registerApiRouter } from './register/register.js';
import { loginApiRouter } from './login/login.js';
import { logoutApiRouter } from './logout/logout.js';

export const apiRouter = express.Router();

apiRouter.use('/register', registerApiRouter);
apiRouter.use('/login', loginApiRouter);
apiRouter.use('/logout', logoutApiRouter);



apiRouter.all('*', (req, res) => {
    return res.json({
        status: 'error',
        msg: 'Nurodyk konkretu api endpointa'
    });
})
