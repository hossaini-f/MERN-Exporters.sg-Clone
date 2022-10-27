import jwt, { decode } from 'jsonwebtoken';

const Auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;
        
        let deocodedData;
        if(token && isCustomAuth){
            deocodedData = jwt.verify(token, 'medicinesworldwebtokens');
            req.userId = deocodedData?.id;
        }else{
            deocodedData = jwt.decode(token);
            req.userId = deocodedData?.sub;
        }
        
        next();

    } catch (error) {
        console.log(error);
    }
}
export default Auth;