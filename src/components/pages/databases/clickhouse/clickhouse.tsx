import {CloudArrowUpIcon, LockClosedIcon, ServerIcon} from "@heroicons/react/20/solid";
import Route from "@/lib/route";
import React from "react";

const arch = [
    {
        name: 'Support most well-known database',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        icon: CloudArrowUpIcon,
        href: Route.DOWNLOADS,
        tips: "Download now"
    },
    {
        name: 'Provide most function',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
        href: Route.CONTACTS,
        tips: "Request a demo"
    },
    {
        name: 'API-first design',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
        href: Route.CLOUD_SIGNIN,
        tips: "Create free account"
    },
    {
        name: 'Integrated with exist workflow',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
        href: Route.CLOUD_SIGNIN,
        tips: "Create free account"
    },
    {
        name: 'API-first design',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
        href: Route.CLOUD_SIGNIN,
        tips: "Create free account"
    },
    {
        name: 'Rich plugin ecosystem',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
        href: Route.CLOUD_SIGNIN,
        tips: "Create free account"
    },
];

const Clickhouse = () =>{
    return (
        <div className="w-full p-8 ">
            <p className="text-cyan-50 text-4xl text-center">
                One platform fit most
                <span className="break-after-left tilted tilted-yellow pl-3 pr-3">
                    <span className="bg-cyan-500 pl-3 pr-3">well-known</span>
                </span>
                databases
            </p>
            <div className="">
                <img></img>
            </div>
            <div className="plans_container grid grid-cols-3 gap-10 p-20">
                {arch.map((method, idx) => (
                    <div className="col-span-1 border-2 rounded-2xl border-cyan-500 p-5" key={idx}>
                        <div className="pb-10">
                            <h2 className="w-full h-10 text-2xl text-center font-bold tracking-wider text-cyan-50 p-2">{method.name}</h2>
                        </div>
                        <div className="w-full h-40 p-3 border-cyan-500">
                            <div className="w-full text-14 text-center tracking-wider text-slate-300">{method.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clickhouse;