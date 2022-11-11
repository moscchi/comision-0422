const auth = (req, res, next) => {
    
    if (req.session?.user === 'numen' && req.session?.admin) {
      return next()
    }
    return res.status(401).json({message: 'error de autorización!'})
   }
module.exports = auth;   