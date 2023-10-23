'use client'
import React, {useEffect, useState} from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import getMetadata from '@/utils/get-metadata';
import Release from './release'
import Route from '@/lib/route';
import {GithubLatestRelease} from '@/types/releaseGithub';
import Banner from "@/components/common/banner";
import {MENU} from "@/lib/menus";
import Link from "@/components/common/link";
import ExternalIcon from "@/assets/external.inline.svg";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import SEO_DATA from '@/lib/seo-data';

export const metadata = getMetadata(SEO_DATA.DOWNLOADS);
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Release_API='https://api.github.com/repos/frabits/frabit/releases/latest';

const  Downloads = () => {
    const [latestVersion, setLatestVersion] = useState({tag_name:"v1.0.0",create_at:"2023-08-24T16:34:03Z"});
    const githubClone = "git clone https://github.com/frabits/frabit.git"
    useEffect(() => {
        const prevVersion = window.sessionStorage.getItem('frabit_github_latest_version');


        if (prevVersion) {
            setLatestVersion({tag_name:"v1.0.0",create_at:"2023-08-24T16:34:03Z"});
            return;
        }

        async function getReleaseVersion() {
            const latestVersion = await fetch(Release_API).then((res) => res.json()).then((json) => json.name);
            window.sessionStorage.setItem('frabit_github_latest_version', "");
            setLatestVersion(latestVersion);
        }
        //getReleaseVersion();
    }, []);

    return (
    <div className="grid grid-cols-1  p-20 sm:gap-y-14">
        <div className="mx-auto pt-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-cyan-50 sm:text-4xl">Downloads</h2>
            <p className="mt-2 text-lg leading-8 text-cyan-50">
                Currently, we provide support for Linux and MacOS(aka Darwin) platform,include amd64 and arm64 arch.
            </p>
        </div>
        <div className="col-span-1 rounded-3xl bg-zinc-700 grid place-items-center p-5 w-full text-cyan-50">
            <span className="text-cyan-60 text-3xl font-bold">Latest Release</span>
            <Release version={latestVersion.tag_name} releaseDate={latestVersion.create_at}/>
            <div className="h-10 border-double border-cyan-500 hover:border-cyan-600 rounded-lg text-cyan-50">
                If you need another older version?
                <a className="text-cyan-500 hover:text-cyan-600"
                   target="blank"
                   href={Route.Release}
                > just click here</a>
            </div>
        </div>
        <div className="col-span-1 rounded-3xl bg-zinc-700 grid place-items-center p-5 w-full text-cyan-50 p-3">
            <span className="text-cyan-60 text-3xl font-bold">Build from source code</span>

            <p className="mt-2 text-lg leading-8 text-cyan-50">
                Directly <a className="text-cyan-500 hover:text-cyan-600" href={Route.GITHUB_STAR}>Visit</a> or clone our codebase from github with below command:
            </p>
            <div className="bg-zinc-800 rounded-xl h-15 p-4 flex place-items-start gap-3">
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
    </div>
    );
};

export default Downloads;