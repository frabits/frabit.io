import React from "react";
import Image from 'next/image';

import {CheckIcon,MinusIcon, CircleStackIcon,CameraIcon,Squares2X2Icon, SquaresPlusIcon} from "@heroicons/react/20/solid";
import Route from '@/lib/route';
import Link from "@/components/common/link";

import ClickhouseIcon from "@/assets/db/clickhouse.inline.svg";
import MongoDBIcon from "@/assets/db/mongodb.inline.svg";
import MySQLIcon from "@/assets/db/mysql.inline.svg";
import MariadbIcon from "@/assets/db/mariadb.inline.svg";
import RedisIcon from "@/assets/db/redis.inline.svg";
import PostgresqlIcon from "@/assets/db/postgres.inline.svg";
import TiDBIcon from "@/assets/db/tidb.inline.svg";
import OceanBaseIcon from "@/assets/db/oceanbase.inline.svg";

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

const sql = [
    { name: 'MySQL', icon:MySQLIcon,recommended: false,useCase: 'Great for smaller workloads and starter projects', feature:featuresCommunity,href: Route.DOWNLOADS,notice:'Contact us'},
    { name: 'MariaDB', icon:MariadbIcon,recommended: false,useCase: 'Designed for the most demanding latency-sensitive workloads', feature:featuresSuper,href: Route.CONTACTS,notice:'Contact us'},
    { name: 'ClickHouse', icon:ClickhouseIcon,recommended: false,useCase: 'Designed for the most demanding latency-sensitive workloads', feature:featuresSuper,href: Route.CONTACTS,notice:'Contact us'},
    { name: 'PostgreSQL', icon:PostgresqlIcon,recommended: false,useCase: 'Designed for the most demanding latency-sensitive workloads', feature:featuresSuper,href: Route.CONTACTS,notice:'Contact us'},
]

const nosql = [
    { name: 'Redis', icon:RedisIcon,recommended: false,useCase: 'Designed to handle production workloads', feature:featuresPro,href: Route.CONTACTS,notice:'Contact us'},
    { name: 'MongoDB', icon:MongoDBIcon,recommended: false,useCase: 'Designed for the most demanding latency-sensitive workloads', feature:featuresSuper,href: Route.CONTACTS,notice:'Contact us'},
 ]

const newsql = [
    { name: 'TiDB', icon:TiDBIcon,recommended: false,useCase: 'Great for smaller workloads and starter projects', feature:featuresCommunity,href: Route.DOWNLOADS,notice:'Contact us'},
    { name: 'OceanBase', icon:OceanBaseIcon,recommended: false,useCase: 'Designed to handle production workloads', feature:featuresPro,href: Route.CONTACTS,notice:'Contact us'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Consulting = () =>{
    return (
        <>
            <div className="pt-10 mx-auto">
                <div className="mx-auto py-10 max-w-6xl text-center flex flex-col items-center">
                    <h1 className="text-3xl font-bold tracking-tight text-cyan-50 sm:text-4xl">Remote DBA and Database Management Services</h1>
                    <div className="mt-6 px-28 text-neutral-200">Remote database administration (DBA) services from Frabit Lab provide comprehensive, high-impact results. Managing your databases remotely, the team with the world’s most well-known databases expertise will immediately apply qualified DBA manpower where and when you need it most.</div>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="mx-auto rounded-xl pt-6 max-w-6xl text-center flex flex-col items-center">
                        <h1 className="text-3xl pb-5 font-bold tracking-tight text-cyan-50 sm:text-4xl">SQL Databases</h1>
                        <div className="rounded-xl bg-gradient-to-r from-cyan-900 via-zinc-800 to-cyan-900 grid grid-cols-4 p-6 gap-5">
                            {sql.map(({ name, icon,recommended,useCase,feature,href,notice }, idx) => (
                                <div className="col-span-1 border-t-8 border-b-8 border-r-2 border-l-2 rounded-2xl border-cyan-500" key={idx}>
                                    <div className="h-56 py-3">
                                        <div className="flex w-full justify-center ">
                                            <div className="flex rounded-xl bg-cyan-50 p-5 text-cyan-500 text-center items-center">
                                                <Image className="flex place-self-center" alt="" width={64} height={64} src={icon} />
                                            </div>
                                        </div>
                                        <h2 className="w-full h-10 text-3xl font-bold tracking-wider text-cyan-50">{name}</h2>
                                        <div className="w-full h-15 text-14 tracking-wider text-slate-300">{useCase}</div>
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
                    <div className="mx-auto rounded-xl pt-6 max-w-6xl text-center flex flex-col items-center">
                        <h1 className="text-3xl pb-5 font-bold tracking-tight text-cyan-50 sm:text-4xl">NoSQL Databases</h1>
                        <div className="rounded-xl bg-gradient-to-r from-cyan-900 via-zinc-800 to-cyan-900 grid grid-cols-4 p-6 gap-5">
                            {nosql.map(({ name, icon,recommended,useCase,feature,href,notice }, idx) => (
                                <div className="col-span-1 border-t-8 border-b-8 border-r-2 border-l-2 rounded-2xl border-cyan-500" key={idx}>
                                    <div className="h-56 py-3">
                                        <div className="flex w-full justify-center ">
                                            <div className="flex rounded-xl bg-cyan-50 p-5 text-cyan-500 text-center items-center">
                                                <Image className="flex place-self-center" alt="" width={64} height={64} src={icon} />
                                            </div>
                                        </div>
                                        <h2 className="w-full h-10 text-3xl font-bold tracking-wider text-cyan-50">{name}</h2>
                                        <div className="w-full h-15 text-14 tracking-wider text-slate-300">{useCase}</div>
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
                    <div className="mx-auto rounded-xl pt-6 max-w-6xl text-center flex flex-col items-center">
                        <h1 className="text-3xl pb-5 font-bold tracking-tight text-cyan-50 sm:text-4xl">NewSQL Databases</h1>
                        <div className="rounded-xl bg-gradient-to-r from-cyan-900 via-zinc-800 to-cyan-900 grid grid-cols-4 p-6 gap-5">
                            {newsql.map(({ name, icon,recommended,useCase,feature,href,notice }, idx) => (
                                <div className="col-span-1 border-t-8 border-b-8 border-r-2 border-l-2 rounded-2xl border-cyan-500" key={idx}>
                                    <div className="h-56 py-3">
                                        <div className="flex w-full justify-center ">
                                            <div className="flex rounded-xl bg-cyan-50 p-5 text-cyan-500 text-center items-center">
                                                <Image className="flex place-self-center" alt="" width={64} height={64} src={icon} />
                                            </div>
                                        </div>
                                        <h2 className="w-full h-10 text-3xl font-bold tracking-wider text-cyan-50">{name}</h2>
                                        <div className="w-full h-15 text-14 tracking-wider text-slate-300">{useCase}</div>
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

export default Consulting;