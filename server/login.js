import DetailsModel from './models/Details.js';

export async function login(req, res, next) {
    const { email, password } = req.body;

    try {
        const userDetails = await DetailsModel.find({ email: email, password: password });
        if(userDetails.length >0){
            console.log('logged in ')
            console.log(userDetails); 
        }
        else console.log('not registered')
    } catch (error) {
        console.log(error);
    }
    next()
}
