const asyncHandler = (requestHandler) => {
    return (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).
        catch((err) => next(err))
    }
}

export default asyncHandler
//async function 
/*const asyncHandler = (func) => async(req,res,next) => {

    try{
          await func(req,res,next)
    }catch(error){
        res.status(err.code || 500).json({
            success: false,
            message: err.message
        })
    }
}*/