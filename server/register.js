import DetailsModel from './models/Details.js';
export async function register(req, res, next) {
    const { name, email, password } = req.body;
    const registered= await DetailsModel.find({email:email})
    if(registered.length>0)res.status(200).json({registered:true,message:'already registered'})
    else {
        try {
            const details = await DetailsModel.create({
                name:name,
                email: email,
                password: password
            });
            res.status(201).json({message:'user successfully created',email:email,name:name})
        } catch (error) {
            console.log(error);
            res.status(500).json({message:"Could not Register,try again"})
        }
    }
    
    next()
}