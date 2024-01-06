import {CheckIcon,MinusIcon, CameraIcon,Squares2X2Icon, SquaresPlusIcon} from "@heroicons/react/20/solid";
import Route from '@/lib/route';
import Link from "@/components/common/link";
import ExternalIcon from "@/assets/external.inline.svg";
import React from "react";

const featuresCommunity = [
    { name: 'SSO/LDAP', enabled:true },
    { name: 'Audit log', enabled:true },
    { name: 'MongoDB', enabled:true },
    { name: 'Redis', enabled:true },
    { name: 'Built-in plugin', enabled:true },
    { name: 'Community Support', enabled:true },
];

const featuresPro = [
    { name: 'SSO/OIDC', enabled:true },
    { name: 'Audit log', enabled:true },
    { name: 'MongoDB', enabled:true },
    { name: 'Auto Backup', enabled:true },
    { name: 'Enterprise plugin', enabled:true },
    { name: 'High Availability', enabled:true },
    { name: '8h*5(M-F) Support', enabled:true },
];

const featuresSuper = [
    { name: 'SSO/OIDC', enabled:true },
    { name: 'Audit log', enabled:true },
    { name: 'MongoDB', enabled:true },
    { name: 'Redis', enabled:true },
    { name: 'Enterprise plugin', enabled:true },
    { name: 'High availability', enabled:true },
    { name: 'Custom brand', enabled:true },
    { name: '24h*7*365 Support', enabled:true },
];
const plan = [
    { name: 'Community', icon:<CameraIcon />,recommended: false,useCase: 'Great for smaller workloads and starter projects', price:'Free', feature:featuresCommunity,href: Route.DOWNLOADS,notice:'Download now'},
    { name: 'Enterprise', icon:<Squares2X2Icon />,recommended: true,useCase: 'Designed to handle production workloads',price:'$49.9', feature:featuresPro,href: Route.CONTACTS,notice:'Request a demo'},
    { name: 'Ultimate', icon:<SquaresPlusIcon />,recommended: false,useCase: 'Designed for the most demanding latency-sensitive workloads',price:'Customer pricing', feature:featuresSuper,href: Route.CONTACTS,notice:'Contact us'},
]

const features = [
    {
        name: 'Cluster management',
        feature: [
            {name:'Deployment',community:true,enterprise:true,ultimate:true},
            {name:'Add/remove node',community:true,enterprise:true,ultimate:true},
            {name:'Load balancers',community:true,enterprise:true,ultimate:true},
        ]
    },
    {
        name: 'High availability',
        feature: [
            {name:'Automated failover',community:false,enterprise:true,ultimate:true},
        ]
    },
    {
        name: 'Backup & Restore',
        feature: [
            {name:'Full/incremental',community:true,enterprise:true,ultimate:true},
            {name:'Restore:PITR',community:true,enterprise:true,ultimate:true},
            {name:'Local/cloud storage',community:true,enterprise:true,ultimate:true},
            {name:'Encryption',community:false,enterprise:true,ultimate:true},
            {name:'Compression',community:true,enterprise:true,ultimate:true},
            {name:'Auto-Verify',community:false,enterprise:true,ultimate:true},
        ]
    },
    {
        name: 'Security summary',
        feature: [
            {name:'Key management',community:true,enterprise:true,ultimate:true},
            {name:'Audit log',community:false,enterprise:true,ultimate:true},
        ]
    },
    {
        name: 'Support',
        feature: [
            {name:'Community support',community:true,enterprise:true,ultimate:true},
            {name:'Standard Support',community:false,enterprise:true,ultimate:true},
            {name:'Premium Support',community:false,enterprise:false,ultimate:true},
        ]
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Pricing = () =>{
    return (
        <>
            <div className="pt-20 mx-auto">
                <div className="mx-auto pt-10 max-w-6xl text-center flex flex-col items-center">
                    <h1 className="text-3xl font-bold tracking-tight text-cyan-50 sm:text-4xl">Pricing</h1>
                    <div className="mt-6 text-neutral-200">Options for every user,organization,and use case</div>
                    {/*Cloud vendor*/}
                    <div className="flex justify-center relative space-x-6 pt-8 pb-6"></div>
                    <div className="plans_container grid grid-cols-3 gap-5 pb-10">
                        {plan.map(({ name, icon,recommended,useCase,price,feature,href,notice }, idx) => (
                            <div className="col-span-1 border-t-8 border-b-8 border-r-2 border-l-2 rounded-2xl border-cyan-500 p-5" key={idx}>
                                <div className="h-56 py-3">
                                    <div className="flex w-full justify-center ">
                                        <div className="flex w-16 text-cyan-500 text-center items-center">{icon}</div>
                                    </div>
                                    <h2 className="w-full h-10 text-3xl font-bold tracking-wider text-cyan-50">{name}</h2>
                                    <div className="w-full h-15 text-14 tracking-wider text-slate-300">{useCase}</div>
                                    <div className="w-full h-15">
                                        <div className="w-full text-2xl font-bold tracking-wider text-cyan-50">{price}</div>
                                        <div className="w-full text-50 text-cyan-50">/instance/month</div>
                                    </div>
                                </div>
                                <div className="h-10">
                                    <a className={classNames(recommended?"bg-cyan-500 hover:bg-cyan-600":"","flex justify-center border-2 border-cyan-500 hover:border-cyan-600 rounded-xl p-2")} href={href}>
                                        <button className="flex items-center">
                                            <p className="items-center whitespace-nowrap text-center text-cyan-50 text-sm">{notice}</p>
                                        </button>
                                    </a>
                                </div>
                                <div className="flex-auto justify-between p-6">
                                    <div className="flex flex-col gap-3">
                                        {feature.map(({name,enabled},idx) =>(
                                            <div className="row flex items-center justify-start gap-4 text-sm" key={idx}>
                                                <div className="text-cyan-50 w-4">
                                                    <CheckIcon/>
                                                </div>
                                                <p className="text-30 font-bold text-cyan-50">{name}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 150" stroke-width="1.5" stroke="currentColor" className="w-full">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M-35 0L693.808 86.1145C714.198 88.5237 734.801 88.5093 755.187 86.0717L1475 0V360H-35V0Z" fill="#06b6d4"/>
                </svg>
                <div className="bg-cyan-500 w-full">
                    <div className="mx-auto w-full pr-32 pl-32">
                        <div className=" flex flex-col items-center rounded-xl">
                            <h2 className="flex flex-row-1 text-3xl p-5 font-bold leading-none text-center tracking-wider text-cyan-50">Compare features</h2>
                            <div className="grid grid-cols-4 w-full px-32">
                                <p className="grid-cols-1"></p>
                                <p className="grid-cols-1 text-2xl p-5 font-bold leading-none text-center tracking-wider text-cyan-50">Community</p>
                                <p className="grid-cols-1 text-2xl p-5 font-bold leading-none text-center tracking-wider text-cyan-50">Enterprise</p>
                                <p className="grid-cols-1 text-2xl p-5 font-bold leading-none text-center tracking-wider text-cyan-50">Ultimate</p>
                            </div>
                            <div className="w-full pt-5 pb-5 border-t-4 border-cyan-50">
                                {features.map(({name,feature}, idx) => (
                                    <div className="grid grid-cols-4 w-full " key={idx}>
                                        <div className="w-50 p-3 place-items-center items-center justify-items-center content-center">
                                            <span className="items-center place-content-center text-cyan-50 text-xl font-bold font-large">{name}</span>
                                        </div>
                                        <div className="col-span-4 border-b-2 border-cyan-50 w-full px-32">
                                            {feature.map(({name,community,enterprise,ultimate}, idx) => (
                                                <div className="flex flex-cols-4 w-full rounded-2xl pb-2" key={idx}>
                                                    <span className="flex col-span-1 w-96 text-cyan-50 text-30 font-bold font-large">{name}</span>
                                                    <div className="flex col-span-3 w-full justify-around rounded-2xl pb-2 ">
                                                        <div className="flex none place-items-center items-center justify-items-center justify-self-center">
                                                            <CheckIcon  className={classNames(community ? "text-cyan-50" : "invisible", "flex h-5 w-5")} />
                                                        </div>
                                                        <div className="flex none place-items-center items-center justify-items-center justify-self-center">
                                                            <CheckIcon  className={classNames(enterprise ? "text-cyan-50" : "invisible", "flex h-5 w-5")} />
                                                        </div>
                                                        <div className="flex none place-items-center items-center justify-items-center justify-self-center">
                                                            <CheckIcon  className={classNames(ultimate ? "text-cyan-50" : "invisible", "flex h-5 w-5")} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mx-auto w-full h-30 pt-20 pb-20 pr-40 pl-40">
                <div className=" flex flex-col items-center rounded-xl border-dashed border-2 p-10 border-cyan-500">
                    <h2 className="flex flex-row-1 text-3xl p-5 font-bold leading-none text-center tracking-wider text-cyan-50">Still have questions?</h2>
                    <div className="flex flex-row-1 text-14 px-20 py-5 text-center leading-none tracking-wider text-slate-300">Have a complex setup or additional questions around pricing? Contact our sales team for help and to get more information on Frabit pricing.</div>
                    <a className="flex flex-row-1 w-50 bg-cyan-500 hover:bg-cyan-600 items-center rounded-xl p-3" href={Route.CONTACTS}>
                        <button>
                            <p className="flex items-center text-center text-cyan-50 text-sm">Contact sales</p>
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Pricing;