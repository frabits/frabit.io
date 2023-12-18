import NextLink from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';

import Route from '@/lib/route';

import SlackIcon from '@/assets/social/slack.inline.svg';
import GithubIcon from '@/assets/social/github.inline.svg';
import TwitterIcon from '@/assets/social/twitter.inline.svg';
import YoutubeIcon from '@/assets/social/youtube.inline.svg';
import LinkedinIcon from '@/assets/social/linkedin.inline.svg';

const communities = [
    {
        name: 'Slack',
        description: 'Participate in discussion with other DBAs and developers.',
        href: Route.SLACK,
        action: 'Join Us',
        icon: SlackIcon,
    },
    {
        name: 'Twitter',
        description:
            'Latest news and updates. Tag us if you need any help or want to share a feedback.',
        href: Route.TWITTER,
        action: 'Follow Us',
        icon:TwitterIcon,
    },
    {
        name: 'GitHub',
        description:
            "We appreciate any contribution even if it's a small typo change or an issue report.",
        href: Route.GITHUB,
        action: 'Star Us',
        icon:GithubIcon,
    },
    {
        name: 'YouTube',
        description:
            "We appreciate any contribution even if it's a small typo change or an issue report.",
        href: Route.YOUTUBE,
        action: 'Subscribe Us',
        icon:YoutubeIcon,
    },
];

const Cards = () => {
    return (
        <div className="w-full pb-8 pt-16">
            <div className="col-md-6 mb-6 grid gap-10 px-96 w-full grid-cols-2">
                {communities.map((item,idx) => (
                    <div className="border-2 rounded-3xl items-center border-cyan-500 px-10 py-6" key={idx}>
                        <div className="w-full flex items-stretch gap-1 justify-center gap-2  items-center">
                            <Image className="flex justify-center place-self-center" alt="" width={90} height={90} src={item.icon} />
                            <h3 className="justify-center place-self-center text-5xl font-semibold leading-7 tracking-tight text-center text-cyan-50">{item.name}</h3>
                        </div>
                        <div className="w-full h-32 p-6 items-center">
                            <p className="text-sm font-semibold leading-6 text-slate-400">{item.description}</p>
                        </div>
                        <div className="w-22 h-16 flex rounded-3xl bg-cyan-500 hover:bg-cyan-600 justify-center items-center gap-10 ">
                            <a className="items-center rounded-xl" href={item.href}>
                                <button >
                                    <p className="text-cyan-50 text-center text-3xl">{item.action}</p>
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;
