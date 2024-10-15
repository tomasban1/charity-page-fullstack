export function cookieParser(req, res, next) {
    console.log(req.headers);
    if (!req.headers.cookie) {
        req.cookies = {};
    } else {
        req.cookies = req.headers.cookie
            .split(';')
            .map(item => item.trim().split('='))
            .reduce((total, item) => ({ ...total, [item[0]]: item[1] }), {});
    }

    next()
}