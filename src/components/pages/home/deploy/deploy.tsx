import Image from "next/image";
import Route from '@/lib/route';
import React from "react";
import {CloudArrowUpIcon, LockClosedIcon, ServerIcon} from "@heroicons/react/20/solid";

const deploy_method = [
    {
        name: 'Frabit-community',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
        href: Route.DOWNLOADS,
        tips: "Download now",
        recommended: false
    },
    {
        name: 'Frabit-enterprise',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
        href: Route.CONTACTS,
        tips: "Request a demo",
        recommended: true
    },
    {
        name: 'Frabit-cloud',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
        href: Route.CLOUD_SIGNIN,
        tips: "Create free account",
        recommended: false
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Deploy = () =>{
    return (
        <>
            <div className="w-full gap-sm-grid items-center group pt-20 ">
                <div className="p-10 text-center flex flex-col items-center">
                    <h1 className="text-cyan-50 text-4xl font-bold font-large pb-10 ">Choose the version of Frabit that’s best for you</h1>
                    <p className="mx-auto max-w-screen-sm text-center leading-normal text-neutral-200">Unlike traditional closed-source OLAP databases, ClickHouse runs on every environment, whether it’s on your machine or in the cloud.</p>
                </div>
                <div className="plans_container grid grid-cols-3 gap-10 pb-20 pr-40 pl-40">
                    {deploy_method.map((method, idx) => (
                        <div className="col-span-1 border-2 rounded-2xl border-cyan-500 p-5" key={idx}>
                            <div className="h-25 p-5 bg-cyan-500 invisible ">
                            </div>
                            <div className="h-40 p-3 border-cyan-500">
                                <h2 className="w-full h-10 text-2xl text-center font-bold tracking-wider text-cyan-50">{method.name}</h2>
                                <div className="w-full h-15 text-14 text-center tracking-wider text-slate-300">{method.description}</div>
                            </div>
                            <div className="h-10">
                                <a className={classNames(method.recommended?"bg-cyan-500 hover:bg-cyan-600":"","flex justify-center  border-2 border-cyan-500 hover:border-cyan-600 rounded-xl p-2")} href={method.href}>
                                    <button className="flex items-center">
                                        <p className="items-center whitespace-nowrap text-center text-cyan-50 text-sm">{method.tips}</p>
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Deploy;