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
    });

    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onForgot = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/forgotpass", user);
            toast.success("If an account with that email exists, you'll receive a password reset email.");
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        setButtonDisabled(!(user.email.length > 0 && user.username.length > 0));
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-6 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        {loading ? "Processing..." : "Reset Your Password"}
                    </h2>
                </div>
                <div className="rounded-lg shadow-md bg-white p-8 space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
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
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  text-black"
                            placeholder="Enter your username"
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                        />
                    </div>
                    <div>
                        <button
                            onClick={onForgot}
                            disabled={buttonDisabled}
                            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black ${buttonDisabled ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <div className="flex justify-center text-sm">
                    <Link href="/login">
                        <div className="font-medium text-black hover:text-indigo-500">Return to login</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPage;
