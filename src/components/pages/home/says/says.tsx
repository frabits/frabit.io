import Image from "next/image";
import Route from '@/lib/route';
import React from "react";
import {CloudArrowUpIcon, LockClosedIcon, ServerIcon} from "@heroicons/react/20/solid";

const theySays = [
    {
        name: 'Julien Henrion',
        description:
            'Thank you for your hard work in creating this good software. It is beginner friendly and easy to customize.',
        imageUrl: '/images/page/main/yohann.jpeg',
        company: "Leroy Merlin",
        career: "Head of Data Engineering",
    },
    {
        name: 'Michael Reynolds',
        description:
            'I’ve spent a huge part of my career looking for a solution that handle huge data sets for semi-technicals users and Frabit is the first exciting thing I’ve seen in a long time.',
        imageUrl: '/images/page/main/alex.jpg',
        company:  "Leroy Merlin",
        career: "IT Project Manager",
    },
    {
        name: 'Julien Henrion',
        description:
            'Frabit is the unifying layer for our database and workflows. You can start small, but then there is no limit to the possibilities and scalability of such an open architecture.',
        imageUrl: '/images/page/main/antoineb.jpg',
        company:  "Leroy Merlin",
        career: "Senior Data Engineer",
    },
    {
        name: 'Michael Reynolds',
        description:
            'Frabit is really capable of supporting the growth of the company thanks to a complete and controlled scalability!',
        imageUrl: '/images/page/main/michael.jpeg',
        company:  "Leroy Merlin",
        career: "IT Project Manager",
    },
    {
        name: 'Mourad Bouloussa',
        description:
            'Frabit is an easy-to-learn, feature-rich platform for a wide variety of use cases. Its web interface simplifies flows and logs monitoring.',
        imageUrl: '/images/page/main/patrick.jpeg',
        company:  "Leroy Merlin",
        career: "Senior Data Engineer",
    },
    {
        name: 'Julien Henrion',
        description:
            'Frabit has been a keystone to design complex executions flows while enhancing our Infrastructure as Code best practices.',
        imageUrl: '/images/page/main/samuelb.jpg',
        company:  "Leroy Merlin",
        career: "Senior Data Engineer",
    },
];

const Says = () =>{
    return (
        <>
            <div className="w-full gap-sm-grid items-center group">
                <div className="p-10 text-center flex flex-col items-center">
                    <h1 className="text-cyan-50 text-4xl font-bold font-large pb-10 ">What people say about us</h1>
                </div>
                <div className="plans_container grid grid-cols-3 gap-10 pb-20 pr-40 pl-40">
                    {theySays.map((method, idx) => (
                        <div className="col-span-1 border-2 rounded-2xl border-cyan-500 p-5" key={idx}>
                            <div className="p-3 h-30 border-cyan-500">
                                 <div className="w-full text-14 tracking-wider text-slate-300">{method.description}</div>
                            </div>
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img src={method.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-cyan-50">
                                        {method.name}
                                    </p>
                                    <p className="text-cyan-50">{method.career}@{method.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Says;