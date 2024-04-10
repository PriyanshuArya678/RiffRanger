import DetailsModel from './models/Details.js';

export async function login(req, res, next) {
    const { email, password } = req.body;

    try {
        const userDetails = await DetailsModel.find({ email: email, password: password });
        if(userDetails.length >0){
            console.log('logged in')
            res.status(200).json({success:true,message:'successfully logged in',name:userDetails[0].name})
        }
        else {
            console.log('not registered')
            res.status(200).json({success:false,message:'incorrect email or password'})
        }
    } catch (error) {
        console.log(error);
    }
    next()
}
