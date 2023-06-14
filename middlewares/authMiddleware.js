import Users from "../modals/UsersModal.js";
import encrypt from "encryptjs";



export const registrationCheck= async (req, res, next) => {   
    try {
        const { name, email, password, pin, role } = req.body;

        if (!name) return res.send("Name is required - middleware");
        if (!email) return res.send("Email is requierd - middleware");
        if (!password) return res.send("Password is requierd - middleware");
        if (!pin) return res.send("Pin is requierd - middleware");
        if (!role) return res.send("Role is requierd - middleware");


        if (password.length < 8) {
            return res.send("Password length is less than 8 !")
        }
        const response = await Users.find({ email: email }).exec();
        console.log(response, "response")
        if (response.length) {
            return res.send("Email already exist or You are already resgistered!");
        }
        next();

    } catch (error) {
        return res.send(error)
    }
}



export const SellerMiddleware = async (req, res, next) => {
    try {
        const { id, pin} = req.body;
        if (!id) return res.send("id is required - middleware");
        if (!pin) return res.send("Pin is required - middleware");

        var secretkey = 'ios';

        const response = await Users.find({ _id : id }).exec();
        console.log(response, "response here");

        var decipherPin = encrypt.decrypt(response[0].pin, secretkey, 256);
        console.log("Deciphered Pin is : " + decipherPin);

        if (decipherPin === pin) {  

            if(response[0].role == "seller" || response[0].role == "admin"){
                next();
            }else{
                return res.send("You are not allowed to add products.")
            }
            

        } else {
            return res.send("Incorrect pin - middleware");
        }


    } catch (error) {
        res.send(error)
    }
}