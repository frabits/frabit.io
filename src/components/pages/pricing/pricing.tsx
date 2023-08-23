import {CloudIcon, SquaresPlusIcon} from "@heroicons/react/20/solid";
import {MENU} from "@/lib/menus";
import Link from "@/components/common/link";
import ExternalIcon from "@/assets/external.inline.svg";

const plan = [
    { name: 'Frabit Community', useCase: 'Small teams', price:'Free', href: '#'},
    { name: 'Frabit Enterprise', useCase: 'Frabit cloud version that fully ', href: '#'},
    { name: 'Frabit Cloud', useCase: 'The next-gen database automatic operation platform', href: '#'},
]

const feature = [
    {
        name: 'DATABASES',
        items: [
            { name: 'MySQL', enabled:true },
            { name: 'PostgreSQL', enabled:true },
            { name: 'Snowflake', enabled:true },
            { name: 'Oracle', enabled:true },
            { name: 'SQL Server', enabled:true },
            { name: 'MongoDB', enabled:true },
            { name: 'Redis', enabled:true },
            { name: 'Redshift', enabled:true},
            { name: 'ClickHouse', enabled:true },
            { name: 'TiDB', enabled:true },
            { name: 'OceanBase', enabled:true },
            { name: 'Google Spanner', enabled:true },
            { name: 'MariaDB', enabled:true},
        ],
    }
];

const Pricing = () =>{
    return (
        <>
            <div className="hero">
                <div className="flex flex-col items-center">
                    <h1 className="text-neutral-0 undefined text-5xl">Pricing</h1>
                    <div className="mt-6 text-neutral-200">Options for every user,organization,and use case</div>
                    {/*Cloud vendor*/}
                    <div className="flex justify-center relative space-x-6 pt-8 pb-6"></div>
                    <div className="plans_container grid grid-cols-3">
                        {plan.map(({ name, items }, idx) => (
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
                                                {isExternal && (
                                                    <ExternalIcon className="ml-3 h-4 w-4 shrink-0 stroke-gray-15 group-hover:stroke-primary-1" />
                                                )}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
};

export default Pricing;