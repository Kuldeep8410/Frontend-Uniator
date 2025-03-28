import { useContext, useState } from "react"
import { AppContext } from "../ContextApi/FisrtContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";


function ForgetPassword () {
    const [email2, setEmail] = useState ("");
    const {AllGetReq, loading} = useContext(AppContext);


    async function ForgetPass (){
       const response = await AllGetReq ("forgetpass-check", {email : email2})
       const data = response.json();

       const navigate = useNavigate();

       if(!data){
        console.log("error response data not fetched")
        return ;
       }
       if(data.success){
        toast.success("Hello Bro Otp For reset send");
        navigate('/new-password');

       }
       

    }


    return (
        <div>
            <h1>
                Reset Your PassWord
            </h1>
            <div>
               <input
               placeholder="enter your email"
               type="text",
               name = "email",
               value = {email2.email}
               onChange= ( (e) => ({event.target.value}))
               />
            </div>
            <button onClick={ForgetPass}>
                {loading ? ("Reseting.....") : ("forget password")}
            </button>
            <ToastContainer />
        </div>
    )
}