'use client'
import React from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Route from "@/lib/route";

const Start = () =>{
    const quickStart = "curl -fsSL https://github.com/frabits/frabit/raw/main/scripts/install.sh | bash";
    return (
        <>
            <div className="w-full gap-sm-grid items-center group pb-10">
                <div className="mx-auto border-2 border-dashed border-cyan-500 rounded-2xl grid max-w-7xl rounded-3xl bg-gradient-to-r from-cyan-900 via-zinc-800 to-cyan-900 text-center items-center p-5">
                    <h2 className="text-3xl font-bold tracking-tight text-cyan-50 sm:text-4xl">Start using Frabit platform in minutes</h2>
                    <p className="mt-6 text-lg leading-8 text-cyan-50 pr-20 pl-20">
                        Install Frabit for MacOS or Linux type below command in your terminal .
                    </p>
                    <div className="p-5 flex place-self-center">
                        <div className="bg-gradient-to-r from-cyan-800 to-cyan-800 rounded-xl h-15 p-4 flex place-items-start gap-3">
                            <span className="text-cyan-50">$ {quickStart}</span>
                            <CopyToClipboard text={quickStart}>
                                <button className="w-8 h-8 rounded hover:scale-125">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#f8fafc" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                                    </svg>
                                </button>
                            </CopyToClipboard>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Start;