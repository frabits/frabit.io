import {CheckIcon,UserGroupIcon,PhoneArrowUpRightIcon,ChartBarIcon, CameraIcon,Squares2X2Icon, SquaresPlusIcon} from "@heroicons/react/20/solid";
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
    { name: 'Remote DBA', icon:<UserGroupIcon />,recommended: false,useCase: 'Great for smaller workloads and starter projects', feature:featuresCommunity,href: Route.REMOTE_DBA,notice:'Learn more'},
    { name: 'Technical Support', icon:<SquaresPlusIcon />,recommended: true,useCase: 'Designed to handle production workloads', feature:featuresPro,href: Route.CONTACTS,notice:'Learn more'},
    { name: 'Consulting', icon:<ChartBarIcon />,recommended: false,useCase: 'Designed for the most demanding latency-sensitive workloads',feature:featuresSuper,href: Route.CONTACTS,notice:'Learn more'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Services = () =>{
    return (
        <>
            <div className="pt-20 mx-auto">
                <div className="mx-auto pt-10 max-w-6xl text-center flex flex-col items-center">
                    <h1 className="text-3xl font-bold tracking-tight text-cyan-50 sm:text-4xl">Services</h1>
                    <div className="mt-6 text-neutral-200">Options for every user,organization,and use case</div>
                    <div className="flex justify-center relative space-x-6 pt-8 pb-6"></div>
                    <div className="plans_container grid grid-cols-3 gap-5 pb-10">
                        {plan.map(({ name, icon,recommended,useCase,feature,href,notice }, idx) => (
                            <div className="col-span-1 border-t-8 border-b-8 border-r-2 border-l-2 rounded-2xl border-cyan-500 p-5" key={idx}>
                                <div className="h-56 py-3">
                                    <div className="flex w-full justify-center ">
                                        <div className="flex w-16 text-cyan-500 text-center items-center">{icon}</div>
                                    </div>
                                    <h2 className="w-full h-10 text-3xl font-bold tracking-wider text-cyan-50">{name}</h2>
                                    <div className="w-full h-15 text-14 tracking-wider text-slate-300">{useCase}</div>
                                    <div className="w-full h-15">
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

export default Services;