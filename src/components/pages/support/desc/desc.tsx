//"use server"
import Image from "next/image";
import Route from '@/lib/route';
import React from "react";
import {CloudArrowUpIcon, LockClosedIcon, ServerIcon} from "@heroicons/react/20/solid";


const support_level = [
    {
        name: 'Community support',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
        href: Route.DOWNLOADS,
        tips: "Download now",
        recommended: false
    },
    {
        name: 'Standard Support',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
        href: Route.CONTACTS,
        tips: "Request a demo",
        recommended: true
    },
    {
        name: 'Premium Support',
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

const Desc = () =>{
    return (
        <>
            <div className="w-full gap-sm-grid items-center group">
                <div className="p-10 text-center flex flex-col items-center">
                    <h1 className="text-cyan-50 text-4xl font-bold font-large pb-10 ">Frabit support details</h1>
                    <p className="mx-auto max-w-screen-sm text-center leading-normal text-neutral-200">Frabit includes Support Services for all users and customers.</p>
                </div>
                <div className="pb-20 pr-40 pl-40">
                    <table className="w-full border-b border-b-cyan-700 text-cyan-50">
                        <thead>
                        <tr>
                            <th></th>
                            <th className="border border-cyan-700 p-0">
                                <div className="p-3  text-neutral-100">Community</div>
                            </th>
                            <th className="border border-cyan-700 p-0">
                                <div className="p-3  text-neutral-100">Standard</div>
                            </th>
                            <th className="border border-cyan-700 p-0">
                                <div className="p-3  text-neutral-100">Premium</div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="w-64 border border-cyan-700 bg-neutral-750 px-3 text-left text-neutral-100">
                                <strong>Learning</strong>
                            </td>
                            <td className="border-r border-r-cyan-700 bg-neutral-750 p-4 ">
                                <p>Docs</p>
                            </td>
                            <td className="border-r border-r-cyan-700 bg-neutral-750 p-4 ">
                                <p>On-Demand training included</p>
                                <p>Docs</p>
                            </td>
                            <td className="border-r border-r-cyan-700 bg-neutral-750 p-4 ">
                                <p>On-Demand training included</p>
                                <p>Docs</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-64 border border-cyan-700 bg-neutral-750 px-3 text-left text-neutral-100">
                               <strong>Support</strong>
                            </td>
                            <td className="border-r border-r-cyan-700 bg-neutral-750 p-4 ">
                                <p>Community support</p>
                            </td>
                            <td className="border-r border-r-cyan-700 bg-neutral-750 p-4 ">
                                <p>Unlimited support cases</p>
                                <p>Business day support only (Monday-Friday)</p>
                                <div>
                                    <p>1 Business day</p>
                                </div>
                                <p>Office hours</p>
                            </td>
                            <td className="border-r border-r-cyan-700 bg-neutral-750 p-4 ">
                                <p>Unlimited support cases</p>
                                <p>24x7 support</p>
                                <div>
                                    <p>Sev-1: 1 hour 24x7</p>
                                    <p>Sev-2: 4 business hours</p>
                                    <p>Sev-3: 1 business day</p>
                                </div>
                                <p>Office hours</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-64 border border-cyan-700 bg-neutral-750 px-3 text-left text-neutral-100">
                                <strong>Expert Sessions</strong>
                            </td>
                            <td className="border-r border-r-cyan-700 bg-neutral-750 p-4 ">
                                <p>None</p>
                            </td>
                            <td className="border-r border-r-cyan-700 bg-neutral-750 p-4 ">
                                <p>Unlimited live Expert Sessions (short consultative guidance sessions)</p>
                                <p>Access to on-demand Expert Sessions included</p>
                            </td>
                            <td className="border-r border-r-cyan-700 bg-neutral-750 p-4 ">
                                <p>Unlimited live Expert Sessions</p>
                                <p>Access to on-demand Expert Sessions included</p>
                            </td>
                        </tr>
                        <tr>
                            <td className="w-64 border border-cyan-700 bg-neutral-750 px-3 text-left text-neutral-100">
                                <strong>Professional Services</strong>
                            </td>
                            <td className="border-r border-r-cyan-700 bg-neutral-750 p-4 ">
                                <p>None</p>
                            </td>
                            <td className="border-r border-r-cyan-700 bg-neutral-750 p-4 ">
                                <p>Frabit consultancy packages available for purchase</p>
                                <p>SOW available for purchase</p>
                                <p>Virtual + additional T&E for onsite</p>
                            </td>
                            <td className="border-r border-r-cyan-700 bg-neutral-750 p-4 ">
                                <p>Frabit consultancy packages available for purchase</p>
                                <p>SOW available for purchase</p>
                                <p>Virtual + additional T&E for onsite</p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Desc;