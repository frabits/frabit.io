"use client"
import { Disclosure } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Cluster management',
        feature: [
            {name:'Deployment',enable:true},
            {name:'Add/remove node',enable:true},
            {name:'Load balancers',enable:true},
        ]
    },
    {
        name: 'High availability',
        feature: [
            {name:'Deployment',enable:true},
            {name:'Automated failover',enable:true},
        ]
    },
    {
        name: 'Backup & Restore',
        feature: [
            {name:'Full/incremental',enable:true},
            {name:'Restore:PITR',enable:true},
            {name:'Local/cloud storage',enable:true},
            {name:'Encryption',enable:true},
            {name:'Compression',enable:true},
        ]
    },
    {
        name: 'Security summary',
        feature: [
            {name:'Key management',enable:true},
            {name:'Audit log',enable:false},
        ]
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Features = () =>{
    return (
        <>
            <div className="w-full gap-sm-grid items-center group pl-72 pr-72">
                <div className="p-10 text-center flex flex-col items-center">
                    <h1 className="text-cyan-50 text-4xl font-bold font-large pb-10 ">Features list</h1>
                </div>
                {features.map(({name,feature}, idx) => (
                    <div className="grid grid-cols-3 border-b-2 border-t-2 border-cyan-50" key={idx}>
                        <div className="place-items-center">
                            <span className="col-span-1 items-center place-content-center text-cyan-50 text-2xl font-bold font-large">{name}</span>
                        </div>
                        <div className="col-span-2 rounded-2xl">
                            {feature.map(({name,enable}, idx) => (
                                <div className="col-span-1 rounded-2xl pb-2" key={idx}>
                                    <div className="flex flex-cols-2 justify-between rounded-2xl pb-2 ">
                                        <span className="flex text-cyan-50 text-30 font-bold font-large">{idx+1}. {name}</span>
                                        <div className="bg-cyan-800">
                                            <CheckIcon  className={classNames(enable ? "text-cyan-50" : "text-cyan-90", "flex h-5 w-5")} />
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Features;