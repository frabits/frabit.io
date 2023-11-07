import {CloudArrowUpIcon, LockClosedIcon, ServerIcon} from "@heroicons/react/20/solid";
import Route from "@/lib/route";
import React from "react";

import Highlights from "@/components/pages/databases/mysql/highlights";
import Features from "@/components/pages/databases/mysql/features";
import Faq from "@/components/pages/databases/mysql/faq";

const Mysql = () =>{
    return (
        <div className="w-full p-8 ">
            <div className="container gap-sm-grid items-center group pt-20 grid grid-cols-2">
                <div className="col-start-1 items-center p-10">
                    <div className="">
                        <h1 className="text-cyan-50 text-4xl font-bold font-large">MySQL</h1>
                        <p className="text-cyan-50 text-20 pt-5">Version 5.7,8.0</p>
                    </div>
                    <div className="py-10">
                        <p className="text-cyan-50 text-20 pt-5">Ensure high availability for all your MySQL instances by automating deployments, both on-premise and in the cloud, following the vendors’ recommended best practices from the start.</p>
                        <p className="text-cyan-50 text-20 pt-5">Simplify replication management with seamless backup & restore, all conveniently accessible through a unified console.</p>
                    </div>
                    <div className="rounded items-center gap-6 w-30">
                        <a href={Route.CONTACTS}
                           className="rounded bg-cyan-500 hover:bg-cyan-600 grid place-items-center w-full text-cyan-50 p-3" >
                            <button>
                                <span>Request a Demo</span>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="col-start-2 rounded-3xl text-4xl items-center ">
                </div>
            </div>
            <Highlights/>
            <Features/>
            <Faq/>
        </div>
    );
};

export default Mysql;