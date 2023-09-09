import Image from "next/image";

import { ChevronDownIcon, PhoneIcon, PlayCircleIcon,ChevronRightIcon } from '@heroicons/react/20/solid'
import Route from '@/lib/route';
import React from "react";

const Slug = () =>{
    return (
        <>
            <div className="container gap-sm-grid items-center group pt-20 grid grid-cols-2">
                <div className="col-start-1 items-center p-20">
                <div className="pb-10">
                    <h1 className="text-cyan-50 text-4xl font-bold font-large">Frabit Platform</h1>
                    <p className="text-cyan-50 text-2xl pt-5">The next-gen database automatic platform</p>
                </div>
                <div className="flex flex-col rounded items-center pr-20 gap-6 w-full md:flex-row">
                    <a href={Route.CLOUD}
                       target="_blank"
                       className="rounded bg-cyan-500 hover:bg-cyan-600 grid place-items-center w-full text-cyan-50 p-3" >
                        <button>
                            <span>Start free trial</span>
                        </button>
                    </a>
                    <a href={Route.QUICK}
                       className="rounded grid place-items-center border-2 border-double border-cyan-500 hover:border-cyan-600 rounded-lg w-full text-cyan-50 p-3">
                        <button>
                            <span >Quick start</span>
                        </button>
                    </a>
                </div>
            </div>
                <div className="col-start-2 rounded-3xl text-4xl items-center ">
                <Image
                    src='/images/page/main/illustration.svg'
                    alt=""
                    width={20}
                    height={20}
                    className="dark:bg-slate-800 p-3 md:w-full sm:-mt-2.5"
                />
            </div>
            </div>
            <div className="w-full ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 150" stroke-width="1.5" stroke="currentColor" className="w-full">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M-35 0L693.808 86.1145C714.198 88.5237 734.801 88.5093 755.187 86.0717L1475 0V360H-35V0Z" fill="#06b6d4"/>
                </svg>
                <div className="bg-cyan-500 text-center text-base w-full h-20">
                    <p className="mb-4 text-3xl text-cyan-50">Project status: beta</p>
                </div>
            </div>
        </>
    );
};

export default Slug;