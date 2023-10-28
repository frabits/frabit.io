import Route from "@/lib/route";
import React from "react";

const Join = () => {
    return (
        <>
        <div className="py-14">
            <div className="mx-auto grid max-w-7xl rounded-3xl bg-gradient-to-r from-cyan-900 via-zinc-800 to-cyan-900 text-center items-center p-5">
                <h2 className="text-3xl font-bold tracking-tight text-cyan-50 sm:text-4xl">Join our Team</h2>
                <p className="mt-6 text-lg leading-8 text-cyan-50 pr-20 pl-20">
                    We are always on the lookout for passionate and talented individuals. If you are excited about the prospect of working on cutting-edge technology and shaping the future of orchestration, we would love to hear from you
                </p>
                <div className="p-5 place-self-center">
                    <a href={Route.CAREERS}
                       className="pr-8 pl-8 h-10 w-30 rounded bg-cyan-500 hover:bg-cyan-600 grid place-items-center text-cyan-50" >
                        <button>
                            <span>Join us</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
};

export default Join;
