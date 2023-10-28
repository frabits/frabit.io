'use client'
import React, {useEffect, useState} from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

import Route from '@/lib/route';
import {GithubLatestRelease} from '@/types/releaseGithub';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Download_URL='https://github.com/frabits/frabit/releases/download';

const Download = {
    CheckSum:'/v{version}/checksum.txt',
    MacOS: [
        {
            format: 'tar', arch: [{name: 'amd64', pkg:[{comp:'frabit-platform',href: "/v{version}/frabit_{version}_darwin_amd64.tar.gz"}]},
                                  {name: 'arm64', pkg:[{comp:'frabit-platform',href: "/v{version}/frabit_{version}_darwin_arm64.tar.gz"}]}
            ]
        },
    ],
    Linux: [
        {
            format: 'tar', arch: [{name: 'amd64', pkg:[{comp:'frabit-platform',href: "/v{version}/frabit_{version}_linux_amd64.tar.gz"}]},
                                  {name: 'arm64', pkg:[{comp:'frabit-platform',href: "/v{version}/frabit_{version}_linux_arm64.tar.gz"}]}
            ]
        },
        {
            format: 'rpm', arch: [{name: 'amd64', pkg:[{comp:'frabit-server',href: "/v{version}/frabit-server-{version}.x86_64.rpm"},
                                                       {comp:'frabit-agent',href: "/v{version}/frabit-agent-{version}.x86_64.rpm"}]
                                  },
                                  {name: 'arm64', pkg:[{comp:'frabit-server',href: "/v{version}/frabit-server-{version}.aarch64.rpm"},
                                                       {comp:'frabit-agent',href: "/v{version}/frabit-agent-{version}.aarch64.rpm"}]
                                  },
            ]
        },
        {
            format: 'deb', arch: [{name: 'amd64', pkg:[{comp:'frabit-server',href: "/v{version}/frabit-server-{version}.amd64.deb"},
                                                       {comp:'frabit-agent',href: "/v{version}/frabit-agent-{version}.amd64.deb"}]
                                  },
                                  {name: 'arm64', pkg:[{comp:'frabit-server',href: "/v{version}/frabit-server-{version}.arm64.deb"},
                                                       {comp:'frabit-agent',href: "/v{version}/frabit-agent-{version}.arm64.deb"}]
                                  },
            ]
        },
    ],
};

function getPackageURL(version: string, url: string) {
    return Download_URL+`${url}`;
}

const  Release = ({version,releaseDate}:{version:string;releaseDate:string}) => {
    return (
        <>
            <div className="isolate p-6 w-full">
                <div className="pb-6">
                    <p className="text-14 font-bold leading-none tracking-wider text-cyan-50">{version}/{releaseDate}
                        <a className="text-cyan-500 hover:text-cyan-600 p-5" href={Download.CheckSum}>CheckSum</a>
                    </p>
                </div>
                <div className="grid grid-cols h-50 gap-5">
                    <div className="flex gap-5 w-full h-full rounded border-2 border-double border-cyan-500 rounded-lg text-cyan-50 p-3">
                        <div className="flex w-60 place-items-center gap-2">
                            <img className="flex place-items-center w-10 f-10" src="/icon/linux.png" />
                            <span className="text-14 font-bold leading-none tracking-wider text-cyan-50">Linux</span>
                        </div>
                        <div className="flex grid grid-cols place-items-center gap-2">
                            {Download.Linux.map(({format,arch}, idx) => (
                                <div className="flex place-items-center col-span-1 gap-3 rounded-2xl w-200" key={idx}>
                                    <div className="flex flex-rows gap-20">
                                        <h3 className="text-14 font-bold leading-none tracking-wider text-cyan-50">{format}</h3>
                                    </div>
                                    <div className="flex flex-rows gap-20">
                                        {arch.map(({name,pkg},idx)=>(
                                        <div className="flex col-span-1 gap-3" key={idx}>
                                            <div className="gap-3 p-2">
                                                {pkg.map(({comp,href},idx) =>(
                                                    <div className="rounded-lg border-2 border-double border-cyan-500 p-2 gap-3" key={idx}>
                                                        <a className="gap-3" href={href}>{comp}-{name}</a>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex gap-5 w-full h-full rounded border-2 border-double border-cyan-500 rounded-lg text-cyan-50 p-3">
                        <div className="flex w-60 place-items-center gap-2">
                            <img className="flex place-self-center w-10 f-10" src="/icon/apple.png" />
                            <span className="text-14 font-bold leading-none tracking-wider text-cyan-50">MacOS</span>
                        </div>
                        <div className="flex grid grid-cols place-items-center gap-2">
                            {Download.MacOS.map(({format,arch}, idx) => (
                                <div className="flex place-items-center col-span-1 gap-3 rounded-2xl w-200" key={idx}>
                                    <h3 className="place-items-center text-14 font-bold leading-none tracking-wider text-cyan-50">{format}</h3>
                                    <div className="flex flex-rows gap-20">
                                        {arch.map(({name,pkg},idx)=>(
                                            <div className="flex col-span-1 gap-3" key={idx}>
                                                <div className="gap-3 p-2">
                                                    {pkg.map(({comp,href},idx) =>(
                                                        <div className="rounded-lg  border-2 h-15 border-double border-cyan-500 p-2 gap-3" key={idx}>
                                                            <a className="gap-3" href={href}>{comp}-{name}</a>
                                                        </div>
                                                    ))}

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
        </>
    );
};

export default Release;