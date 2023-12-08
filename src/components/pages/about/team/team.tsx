import Route from "@/lib/route";

const people = [
    {
        name: 'Blylei Zhang',
        role: 'Co-Founder / CEO',
        imageUrl: '/images/page/about/jieze.png',
        personSocial:[
            {name:'github',icon:'/icon/github.png',href:"https://github.com/blylei"},
            {name:'linkedin',icon:'/icon/linkedin.png',href:"https://www.linkedin.com/in/blylei"},
            {name:'twitter',icon:'/icon/twitter.png',href:'https://twitter.com/frabit_io'},
        ],
    },
    {
        name: 'Jieze Zhang',
        role: 'Co-Founder / CFO',
        imageUrl: '/images/page/about/lisa_li.png',
        personSocial:[
            {name:'linkedin',icon:'/icon/linkedin.png',href:"https://www.linkedin.com/in/blylei"},
            {name:'twitter',icon:'/icon/twitter.png',href:'https://twitter.com/frabit_io'},
        ],
    },
    {
        name: 'Peter Ning',
        role: 'Co-Founder / CTO',
        imageUrl: '/images/page/about/nana.png',
        personSocial:[
            {name:'github',icon:'/icon/github.png',href:"https://github.com/blylei"},
            {name:'linkedin',icon:'/icon/linkedin.png',href:"https://www.linkedin.com/in/blylei"},
            {name:'twitter',icon:'/icon/twitter.png',href:'https://twitter.com/frabit_io'},
        ],
    },
    {
        name: 'Lisa Li',
        role: 'Co-Founder / COO',
        imageUrl: '/images/page/about/lisa_li.png',
        personSocial:[
            {name:'twitter',icon:'/icon/twitter.png',href:'https://twitter.com/frabit_io'},
            {name:'linkedin',icon:'/icon/linkedin.png',href:"https://www.linkedin.com/in/blylei"},
        ],
    },
    {
        name: 'Aila Chen',
        role: 'Co-Founder / CPO',
        imageUrl: '/images/page/about/nana.png',
        personSocial:[
            {name:'linkedin',icon:'/icon/linkedin.png',href:"https://www.linkedin.com/in/blylei"},
            {name:'twitter',icon:'/icon/twitter.png',href:'https://twitter.com/frabit_io'},
        ],
    },
    {
        name: 'New Staff',
        role: 'Staff',
        imageUrl: '/images/page/about/lisa_li.png',
        personSocial:[
        ],
    },
]

const Team = () => {
    return (
        <>
        <div className="py-14">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-cyan-50 sm:text-4xl">Meet our team</h2>
                    <p className="mt-6 text-lg leading-8 text-cyan-50">
                        We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-cyan-50">{person.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-slate-400">{person.role}</p>
                                    <div>
                                    <div className="flex justify-start gap-2 row-span-1 w-full h-full">
                                            {person.personSocial.map(({ name, href, icon: Icon }, idx) => (
                                                <a className="w-5 h-5  rounded grid place-items-start border border-neutral-700/80"
                                                   key={idx}
                                                   href={href}
                                                   rel="noopener noreferrer"
                                                   target="_blank">
                                                    <div className="flex items-stretch bg-cyan-600 rounded-md">
                                                        <span className="sr-only items-center text-cyan-50">{name}</span>
                                                        <img className="flex place-self-center" src={Icon} />
                                                    </div>
                                                </a>
                                            ))}
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    );
};

export default Team;
