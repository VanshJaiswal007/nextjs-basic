"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function VerifyEmailPage() {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {
        try {
            await axios.post("/api/users/verifyemail", { token });
            setVerified(true);
        } catch (error: any) {
            setError(true);
        }
    };

    useEffect(() => {
        const urlToken = new URLSearchParams(window.location.search).get("token");
        setToken(urlToken || "");
    }, []);

    useEffect(() => {
        if (token.length > 0) {
            verifyUserEmail();
        }
    }, [token]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-6 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900">Verify Your Email</h1>
                </div>
                <div className="rounded-lg shadow-md bg-white p-8 space-y-6 text-center">
                    <h2 className={`p-2 ${token ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"} rounded-md`}>
                        {token ? `Token: ${token}` : "No token found"}
                    </h2>
                    
                    {verified && (
                        <div>
                            <h2 className="text-2xl font-medium text-green-600">Email Verified Successfully</h2>
                            <Link href="/login">
                                <div className="text-indigo-600 hover:text-indigo-800">Go to Login</div>
                            </Link>
                        </div>
                    )}
                    
                    {error && (
                        <div>
                            <h2 className="text-2xl font-medium text-red-600">Verification Failed</h2>
                            <p className="mt-2 text-sm text-gray-600">Please check the token and try again.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
