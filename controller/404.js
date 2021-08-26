exports.get404 = (req, res, next) => {
    res.status(404).render('404page', { docTitle: '404 Not found' ,path: undefined})
}