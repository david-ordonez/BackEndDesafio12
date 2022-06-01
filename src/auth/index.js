export function webAuth(req, res, next) {
    if(req.session.user)
        next();
    return res.status(401).redirect('/login');
}

export function apiAuth(req, res, next) {
    next();
}