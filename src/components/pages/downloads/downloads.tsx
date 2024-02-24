'use client'
import React, {useEffect, useState} from 'react'
import Image from 'next/image';

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import getMetadata from '@/utils/get-metadata';
import Release from './release'
import Route from '@/lib/route';
import {GithubLatestRelease} from '@/types/releaseGithub';
import Banner from "@/components/common/banner";
import {MENU} from "@/lib/menus";
import Link from "@/components/common/link";
import PythonIcon from "@/assets/python.svg";
import GolangIcon from "@/assets/golang.svg";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import SEO_DATA from '@/lib/seo-data';

export const metadata = getMetadata(SEO_DATA.DOWNLOADS);
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const sdks = [
    { name: 'python', use_case: 'Integrate with Python application', icon:PythonIcon, href: 'https://github.com/frabits/frabit-py-sdk'},
    { name: 'golang', use_case: 'Integrate with Golang application',icon:GolangIcon, href: 'https://github.com/frabits/frabit-go-sdk'},
]

const Release_API='https://api.github.com/repos/frabits/frabit/releases/latest';

async function getData() {
    const res = await fetch('https://api.example.com/...')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

const  Downloads = () => {
    const [latestVersion, setLatestVersion] = useState({tag_name:"v1.0.0",create_date:"2023-08-24T16:34:03Z"});
    const githubClone = "git clone https://github.com/frabits/frabit.git"
    useEffect(() => {
        const prevVersion = window.sessionStorage.getItem('frabit_github_latest_version');
        const prevDate = window.sessionStorage.getItem('frabit_github_latest_create_date');


        if (prevVersion && prevDate ) {
            setLatestVersion({tag_name:prevVersion,create_date:prevDate});
            return;
        }

        async function getReleaseVersion() {
            // const latestVersion = await fetch(Release_API).then((res) => res.json()).then((json) => json.name);
            const Release = await fetch(Release_API).then((res) => res.json());
            console.log(Release)
            window.sessionStorage.setItem('frabit_github_latest_version', Release.name);
            window.sessionStorage.setItem('frabit_github_latest_create_date', Release.created_at);
            setLatestVersion({tag_name:Release.name,create_date:Release.created_at});
        }
        getReleaseVersion();
    }, []);

    return (
    <div className="grid grid-cols-1  p-20 sm:gap-y-14">
        <div className="mx-auto pt-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-cyan-50 sm:text-4xl">Downloads</h2>
            <p className="mt-2 text-lg leading-8 text-cyan-50">
                Currently, we provide support for Linux and MacOS(aka Darwin) platform,include amd64 and arm64 arch.
            </p>
        </div>
        <div className="col-span-1 rounded-3xl bg-gradient-to-r from-cyan-900 via-zinc-800 to-cyan-900 grid place-items-center p-5 w-full text-cyan-50">
            <span className="text-cyan-60 text-3xl font-bold">Latest Release</span>
            <Release version={latestVersion.tag_name} releaseDate={latestVersion.create_date}/>
            <div className="h-10 border-double border-cyan-500 hover:border-cyan-600 rounded-lg text-cyan-50">
                If you need another older version?
                <a className="text-cyan-500 hover:text-cyan-600"
                   target="blank"
                   href={Route.Release}
                > just click here</a>
            </div>
        </div>
        <div className="col-span-1 rounded-3xl bg-gradient-to-r from-cyan-900 via-zinc-800 to-cyan-900 grid place-items-center p-5 w-full text-cyan-50 p-3">
            <span className="text-cyan-60 text-3xl font-bold">Build from source code</span>

            <p className="mt-2 text-lg leading-8 text-cyan-50">
                Directly <a className="text-cyan-500 hover:text-cyan-600" href={Route.GITHUB_STAR}>Visit</a> or clone our codebase from github with below command:
            </p>
            <div className="bg-gradient-to-r from-cyan-800 to-cyan-800 rounded-xl h-15 p-4 flex place-items-start gap-3">
                <span>$ {githubClone}</span>
                <CopyToClipboard text={githubClone}>
                    <button className="w-8 h-8 rounded hover:scale-125">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                        </svg>
                    </button>
                </CopyToClipboard>
            </div>
        </div>
        <div className="col-span-1 rounded-3xl bg-gradient-to-r from-cyan-900 via-zinc-800 to-cyan-900 grid place-items-center p-5 w-full text-cyan-50 px-32 py-3">
            <span className="text-cyan-60 text-3xl font-bold">SDKs</span>
            <p className="mt-2 text-lg leading-8 text-center text-cyan-50 px-32">
                Integrate with your exist workflow via our SDKs. Currently, we provide Golang and Python SDK,for another language,you can use our open api directly.
            </p>
            <div className="rounded-xl p-4 flex place-items-center gap-28">
                {sdks.map(({name,use_case,icon,href}, idx) => (
                    <div className="rounded-lg  place-items-center p-2 gap-3" key={idx}>
                        <div className="place-self-center">
                            <a className="w-20 h-20  rounded-lg grid p-2 border-2 border-cyan-500"
                               key={idx}
                               href={href}
                               rel="noopener noreferrer"
                               target="_blank">
                                <div className="flex items-center rounded-md">
                                    <Image className="flex justify-center place-self-center " alt="" width={128} height={128} src={icon} />
                                </div>
                            </a>
                        </div>
                        <div className="place-self-center">
                            <p className="pt-5 text-14 font-bold text-center leading-none tracking-wider text-cyan-50">{use_case}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
};

export default Downloads;