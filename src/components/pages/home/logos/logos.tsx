import React from "react";

const logos1 = [
    {
        name: 'tencent',
        logoUrl: '/images/logos/tencent.svg',
        href: "#",
    },
    {
        name: 'proton',
        logoUrl: '/images/logos/proton.svg',
        href: "#",
    },
    {
        name: 'salla',
        logoUrl: '/images/logos/salla.svg',
        href: "#",
    },
    {
        name: 'miotech',
        logoUrl: '/images/logos/miotech.svg',
        href: "#",
    },
    {
        name: 'kakao',
        logoUrl: '/images/logos/kakao.svg',
        href: "#",
    },
    {
        name: 'aptive',
        logoUrl: '/images/logos/aptive.svg',
        href: "#",
    },
    {
        name: 'human-horizons',
        logoUrl: '/images/logos/human-horizons.svg',
        href: "#",
    },
];

const logos2 = [
    {
        name: 'miotech',
        logoUrl: '/images/logos/miotech.svg',
        href: "#",
    },
    {
        name: 'kakao',
        logoUrl: '/images/logos/kakao.svg',
        href: "#",
    },
    {
        name: 'aptive',
        logoUrl: '/images/logos/aptive.svg',
        href: "#",
    },
    {
        name: 'tencent',
        logoUrl: '/images/logos/tencent.svg',
        href: "#",
    },
    {
        name: 'proton',
        logoUrl: '/images/logos/proton.svg',
        href: "#",
    },
    {
        name: 'salla',
        logoUrl: '/images/logos/salla.svg',
        href: "#",
    },
    {
        name: 'evermos',
        logoUrl: '/images/logos/evermos.svg',
        href: "#",
    },
];

const Logos = () =>{
    return (
        <div>
            <div className="w-full ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1440 150" stroke-width="1.5" stroke="currentColor" className="w-full">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M-35 0L693.808 86.1145C714.198 88.5237 734.801 88.5093 755.187 86.0717L1475 0V360H-35V0Z" fill="#06b6d4"/>
                </svg>
                <div className="bg-cyan-500 place-items-center items-center justify-center text-center text-base w-full pb-10">
                    <p className="mb-4 text-3xl text-cyan-50 pb-10">Trusted by developers and DBAs that work with databases</p>
                    <div className="grid justify-items-center">
                        <div className="section-container relative z-10 flex max-w-5xl flex-wrap place-items-center items-center justify-center gap-6 self-center md:gap-x-14">
                            <div className="absolute left-0 z-10 h-full  p-10 lg:pr-20"></div>
                            <div className="absolute right-0 z-10 h-full p-10 lg:pl-20"></div>
                            <div className="pause-hover hide-scrollbar relative flex overflow-x-scroll md:overflow-x-hidden">
                                <div className="flex content-center items-center whitespace-nowrap py-3 animate-carousel">
                                    {logos1.map((logo, idx) => (
                                        <div className="w-30 pr-5 pl-5" key={idx}>
                                            <a className="flex items-center" href={logo.href}>
                                                <img src={logo.logoUrl} alt="" className="" />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute top-0 flex items-center whitespace-nowrap py-3 animate-carousel">
                                    {logos1.map((logo, idx) => (
                                        <div className="w-30 pr-5 pl-5" key={idx}>
                                            <a className="flex items-center" href={logo.href}>
                                                <img src={logo.logoUrl} alt="" className="" />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="pause-hover hide-scrollbar relative flex overflow-x-scroll md:overflow-x-hidden">
                                <div className="flex content-center items-center whitespace-nowrap py-3 animate-carousel">
                                    {logos2.map((logo, idx) => (
                                        <div className="w-30 pr-5 pl-5" key={idx}>
                                            <a className="flex items-center" href={logo.href}>
                                                <img src={logo.logoUrl} alt="" className="" />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute top-0 flex items-center whitespace-nowrap py-3 animate-carousel">
                                    {logos2.map((logo, idx) => (
                                        <div className="w-30 pr-5 pl-5" key={idx}>
                                            <a className="flex items-center" href={logo.href}>
                                                <img src={logo.logoUrl} alt="" className="" />
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Logos;