// "use client";
// import React, { useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import toast from "react-hot-toast";

// const LoginPage = () => {
//     const router = useRouter();
//     const [user, setUser] = React.useState({
//         email: "",
//         password: "",
//     })

//     const [buttondDisabled,setButtonDisabled] = React.useState(false)
//     const [loading,setLoading] = React.useState(false);

//     const onLogin = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.post("/api/users/login",user);
//             toast.success("login success")
//             router.push("/profile")
//          } catch (error:any) {
//             toast.error(error.message);
//          }finally{
//             setLoading(false);
//          }

//     }
 
//     useEffect(() => {
//         if(user.email.length > 0 && user.password.length>0){
//           setButtonDisabled(false);
//         }else{
//             setButtonDisabled(true);
//          }
//      },[user])

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen py-2">
//             <h1>{loading?"Processing...":"Login"}</h1>
//             <hr />
//             <label htmlFor="email">email</label>
//             <input
//                 className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//                 id="email"
//                 type="email"
//                 value={user.email} 
//                 onChange={(e)=>setUser({...user,email:e.target.value})}
//                 placeholder="email"
//                 />
//             <label htmlFor="password">password</label>
//             <input
//                 className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//                 id="password"
//                 type="password"
//                 value={user.password} 
//                 onChange={(e)=>setUser({...user,password:e.target.value})}
//                 placeholder="password"
//                 />
//             <button onClick={onLogin} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login here</button>
//             <Link href="/signup">Visit Signup Page</Link>
//             <Link href="/forgotpass">Forgot password</Link>
//         </div>
//     );
// }

// export default LoginPage;

"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const LoginPage = () => {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            toast.success("Login successful!");
            router.push("/profile");
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setButtonDisabled(!(user.email.length > 0 && user.password.length > 0));
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-6 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        {loading ? "Processing..." : "Sign in to your account"}
                    </h2>
                </div>
                <div className="rounded-lg shadow-md bg-white p-8 space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter your email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Enter your password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <button
                            onClick={onLogin}
                            disabled={buttonDisabled}
                            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black ${buttonDisabled ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                            Sign In
                        </button>
                    </div>
                </div>
                <div className="flex justify-between text-sm">
                    <Link href="/signup">
                        <div className="font-medium text-indigo-600 hover:text-indigo-500">Create an account</div>
                    </Link>
                    <Link href="/forgotpass">
                        <div className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
