//"use server"
import Image from "next/image";
import Route from '@/lib/route';
import React from "react";
import {ChevronUpIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon} from "@heroicons/react/20/solid";
import {Disclosure} from "@headlessui/react";


const Slas = [
    {
        name: 'Severity 1',
        action:{resp:"1 hour SLA",desc:"24 h / 7 days / 365 days / year"},
        tips: "Urgent"
    },
    {
        name: 'Severity 2',
        action:{resp:"4 hour SLA",desc:"Business hours only"},
        tips: "High priority"
    },
    {
        name: 'Severity 3',
        action:{resp:"1 business day SLA",desc:"Business hours only"},
        tips: "Normal priority"
    },
];

const Sla = () =>{
    return (
        <>
            <div className="w-full gap-sm-grid items-center group">
                <div className="p-10 text-center flex flex-col items-center">
                    <h1 className="text-cyan-50 text-4xl font-bold font-large pb-10 ">Service level agreements (aka:SLA)</h1>
                    <p className="mx-auto max-w-screen-sm text-center leading-normal text-neutral-200">Classification of severity levels for issues reported and response times</p>
                </div>
                <div className="mx-auto w-full max-w-5xl items-center justify-evenly text-center md:flex md:space-x-20">
                    {Slas.map(({name,action,tips}, idx) => (
                        <div className="mb-10 rounded-lg bg-neutral-900/50 p-6 md:mb-0 md:w-1/3 bg-cyan-900 rounded-lg" key={idx}>
                            <p className="mb-2 row-span-1 text-cyan-50 text-xl font-bold">{name}</p>
                            <p className="mb-10 text-2xl row-span-1 text-slate-400 text-base">{tips}</p>
                            <p className="mb-2 text-base font-bold col-span-3 p-6 text-slate-400">{action.resp}</p>
                            <p className="text-base text-slate-400">{action.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Sla;