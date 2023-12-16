//"use server"
import Image from "next/image";
import Route from '@/lib/route';
import React from "react";
import {CloudArrowUpIcon, LockClosedIcon, ServerIcon} from "@heroicons/react/20/solid";


const steps = [
    {
        name: 'Level 1 / L1',
        description:
            'Frabit front-line team identifying and/or routing new cases, inquiries, or questions.'
    },
    {
        name: 'Level 2 / L2',
        description: 'Frabit Support Services team first touch.'
    },
    {
        name: 'Level 3 / L3',
        description: 'Frabit Support Services escalation status.'
    },
    {
        name: 'Level 4 / L4',
        description: 'Escalation to Frabit Engineering.'
    },
    {
        name: 'Level 5 / L5',
        description: 'Escalation to Frabit Executive Leadership.'
    },
];

const Steps = () =>{
    return (
        <>
            <div className="w-full gap-sm-grid items-center group">
                <div className="p-10 text-center flex flex-col items-center">
                    <h1 className="text-cyan-50 text-4xl font-bold font-large pb-10 ">Support and escalation levels</h1>
                </div>
                <div className="grid w-full max-w-2xl items-center section-container bg-shadow-element yellow-shadow align-shadow-right container mx-auto mb-30 flex  flex-col items-center grid-cols-1 gap-y-2">
                    {steps.map(({name,description}, idx) => (
                        <div key={idx}>
                            <div className="w-full rounded-lg p-6 bg-gradient-to-r from-cyan-900 via-zinc-800 to-cyan-900 rounded-lg">
                                <div className="grid items-center md:grid-cols-4">
                                    <div className="md:col-span-1">
                                        <div className="text-cyan-50 text-xl font-bold">{name}</div>
                                    </div>
                                    <div className="text-base text-slate-400 md:col-span-3">{description}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Steps;