export const verifyLuckyMiddleware = (req, res, next) => {
    const random_number = Math.random()
    if (random_number > 0.5) {
        //tiene suerte
        next()
    } else {
        //no tiene suerte
        res.json({
            
            message: 'no vayas a la tombola'
        
        })
    }
}