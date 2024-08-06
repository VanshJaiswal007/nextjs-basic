"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const ForgotPage = () => {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        username: "",
    })

    const [buttondDisabled,setButtonDisabled] = React.useState(false)
    const [loading,setLoading] = React.useState(false);

    const onForgot = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/forgotpass",user);
         } catch (error:any) {
            toast.error(error.message);
         }finally{
            setLoading(false);
         }

    }
 
    useEffect(() => {
        if(user.email.length > 0 && user.username.length>0){
          setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
         }
     },[user])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading?"Processing...":"Enter details"}</h1>
            <hr />
            <label htmlFor="email">email</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="email"
                value={user.email} 
                onChange={(e)=>setUser({...user,email:e.target.value})}
                placeholder="email"
                />
            <label htmlFor="username">username</label>
            <input
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="username"
                type="text"
                value={user.username} 
                onChange={(e)=>setUser({...user,username:e.target.value})}
                placeholder="username"
                />
            <button onClick={onForgot} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Submit</button>
            <Link href="/login">Return to login</Link>
        </div>
    );
}

export default ForgotPage;