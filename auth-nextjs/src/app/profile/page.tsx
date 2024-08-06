"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const ProfilePage = () => {
    const router = useRouter();
    const [data, setData] = useState("nothing");

    const logout = async () => {
        try {
            await axios.get("/api/users/logout");
            toast.success("Logout Successful");
            router.push("/login");
        } catch (error: any) {
            toast.error(error.message);
        }
    };

    const getUserDetails = async () => {
        try {
            const res = await axios.get("/api/users/me");
            setData(res.data.data._id);
        } catch (error: any) {
            toast.error("Failed to fetch user details");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-6 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
                    <p className="mt-2 text-sm text-gray-600">Welcome to your profile page</p>
                </div>
                <div className="rounded-lg shadow-md bg-white p-8 space-y-6 text-center">
                    <h2 className="text-lg font-medium text-gray-800">
                        {data === "nothing" ? "No Data Available" : (
                            <Link href={`/profile/${data}`}>
                                <div className="text-indigo-600 hover:text-indigo-800">{data}</div>
                            </Link>
                        )}
                    </h2>
                    <div className="flex space-x-4 justify-center">
                        <button
                            onClick={logout}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                            Logout
                        </button>
                        <button
                            onClick={getUserDetails}
                            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Get User Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
