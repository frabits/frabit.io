import Link from '@/components/common/link';

import Image from 'next/image'
import { MENU } from '@/lib/menus';
import Route from '@/lib/route';


import githubIcon from '@/assets/social/github.inline.svg';
import twitterIcon from '@/assets/social/twitter.inline.svg';
import linkedinIcon from '@/assets/social/linkedin.inline.svg';
import slackIcon from '@/assets/social/slack.inline.svg';
import youtubeIcon from '@/assets/social/youtube.inline.svg';
const socialAddrs = [
    {
        name: 'Github',
        href: Route.GITHUB,
        icon: githubIcon,
    },
    {
        name: 'SLACK',
        href: Route.SLACK,
        icon: slackIcon,
    },
    {
        name: 'Twitter',
        href: Route.TWITTER,
        icon: twitterIcon,
    },
    {
        name: 'Linkedin',
        href: Route.LINKEDIN,
        icon: linkedinIcon,
    },
    {
        name: 'Youtube',
        href: Route.YOUTUBE,
        icon: youtubeIcon,
    },
];
const Footer = () => (
    <footer className="pt-3 bg-gradient-to-r from-cyan-900 to-zinc-800">
        <div className="grid grid-cols-7  pl-20 pr-20 sm:gap-y-14">
            {MENU.footer.map(({ name, items }, idx) => (
                <div className="col-span-1" key={idx}>
                    <h3 className="text-14 font-bold leading-none tracking-wider text-cyan-50">{name}</h3>
                    <ul className="mt-5 flex flex-col gap-[12px]">
                        {items.map(({ name: childName, linkUrl, isExternal }, childIdx) => (
                            <li className="leading-none" key={childIdx}>
                                <Link
                                    className="group flex items-center font-medium !leading-snug tracking-tight md:-mt-5 sm:mt-0"
                                    size="md"
                                    theme="gray"
                                    href={linkUrl}
                                    target={isExternal ? 'blank' : undefined}
                                >
                                    <span className="text-slate-400 hover:text-slate-300">{childName}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className="col-span-2 gap-0">
                <div className="grid grid-rows-2 gap-3 grid-flow-col">
                    <div>
                        <div className="row-span-1 ">
                            <img className="flex w-34 h-11" src="/images/logo.svg"/>
                        </div>
                        <div className="row-span-1">
                            <h2 className="flex items-center h-9 w-full text-15 font-bold leading-none tracking-wider text-cyan-50">
                                The next-gen database automatic platform
                            </h2>
                        </div>
                    </div>
                    <div>
                        <div className="row-span-1">
                            <div className="relative flex items-center pt-1 pb-1 w-full h-full">
                                <form className="flex items-center pl-1 pr-1 rounded-md h-full w-full">
                                    <div className="w-full">
                                        <input className="rounded-lg border-dotted border-1 pl-5 pr-5 h-10 w-full" type="email" placeholder="your@domain.com" />
                                    </div>
                                    <button className="rounded-lg p3 h-9 bg-cyan-500 hover:bg-cyan-600">
                                        <span className="w-full text-cyan-50 p-3">Subscribe</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="row-span-1">
                                <span className="flex items-center pt-5 h-9 w-full text-8 font-medium tracking-tight text-slate-400">
                                    Stay informed on feature releases, product roadmap, support, and cloud offerings!
                                </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-3 gap-x-5 border-t-2 border-tones-purple-light mt-5 mb-3 pl-10 pr-10 pb-1 py-2">
            {/** copyrights */}
            <div className="flex items-center gap-x-9">
                <p className="whitespace-nowrap text-14 font-medium leading-none tracking-tight text-cyan-50 xs:col-span-full xs:row-span-1 xs:row-start-4 xs:block">
                    Copyright © {new Date().getFullYear()} Frabit Labs. All rights reserved.
                </p>
            </div>
            {/** Social Links */}
            <div className="flex justify-between row-span-1 w-full h-full">
                <div className="mx-auto flex items-stretch gap-10">
                    {socialAddrs.map(({ name, href, icon: Icon }, idx) => (
                        <a className="w-10 h-10 rounded grid place-items-center border border-neutral-700/80"
                           key={idx}
                           href={href}
                           rel="noopener noreferrer"
                           target="_blank">
                            <div className="flex items-stretch bg-cyan-700 rounded-md">
                                <span className="sr-only items-center text-cyan-50">{name}</span>
                                <Image className="flex place-self-center hover:bg-cyan-800" alt="" width={32} height={32} src={Icon} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            {/** Legal */}
            <div className="flex items-center gap-x-9">
                <Link
                    className="text-16 text-cyan-50 hover:text-slate-300 font-medium tracking-tight xs:text-14"
                    theme="gray"
                    href={Route.TERMS}
                >
                    Terms
                </Link>
                <Link
                    className="text-16 text-cyan-50 hover:text-slate-300 font-medium tracking-tight xs:text-14"
                    theme="gray"
                    href={Route.PRIVACY}
                >
                    Policy
                </Link>
            </div>
        </div>
    </footer>
);

export default Footer;