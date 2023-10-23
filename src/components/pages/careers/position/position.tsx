const Positions = [
    {
        name: 'Backend /Golang Senior Software Enginee',
        workType: 'Remote Full-time',
        applyUrl: '#',
        location: 'China-Shanghai',
        techStack:'Golang、Gin、Cobra',
    },
    {
        name: 'Frontend /React Senior Software Enginee',
        workType: 'Remote Full-time',
        applyUrl: '#',
        location: 'China-Shanghai',
        techStack:'React/Next.js、typescript、Tailwind CSS',
    },
    {
        name: 'Database Performance Consultant/Support Engineer – MySQL (Remote)',
        workType: 'Remote Full-time',
        applyUrl: '#',
        location: 'China-Shenzhen',
        techStack:'MySQL、Gh-ost、MHA、Orchestrator、Xtrabackup',
    },
    {
        name: 'Database Performance Consultant/Support Engineer – Redis (Remote)',
        workType: 'Remote Full-time',
        applyUrl: '#',
        location: 'China-Shanghai',
        techStack:'Redis sentinel、Redis cluster',
    },
    {
        name: 'Database Performance Consultant/Support Engineer – MongoDB (Remote)',
        workType: 'Remote Full-time',
        applyUrl: '#',
        location: 'China-Beijing',
        techStack:'MongoDB Replicate-set、MongoDB Shared-cluster',
    },
    {
        name: 'Database Performance Consultant/Support Engineer – ClickHouse (Remote)',
        workType: 'Remote Full-time',
        applyUrl: '#',
        location: 'China-Beijing',
        techStack:'CLickHouse',
    },
]

const Careers = () => {
    return (
        <>
            <div className="w-full pb-8 pt-16">
                <div className="mx-auto mb-6 flex max-w-7xl flex-col md:flex-row md:space-x-16">
                    <h2 className="text-3xl font-bold tracking-tight text-cyan-50 sm:text-4xl">Open Positions</h2>
                </div>
                <div className="d-sm-inline-flex col-md-6 mb-6 grid gap-x-20 pr-20 pl-20 gap-y-10 w-full lg:grid-cols-3">
                        {Positions.map((item,idx) => (
                            <div className="border-2 rounded-3xl border-cyan-500 p-5" key={idx}>
                                <div className="w-30 h-60">
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-cyan-50">{item.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-slate-400">Need techStack: {item.techStack}</p>
                                    <p className="text-sm font-semibold leading-6 text-slate-400">Work type: {item.workType}</p>
                                    <p className="text-sm font-semibold leading-6 text-slate-400">Location: {item.location}</p>
                                </div>
                                <div className="flex justify-center gap-10 w-full h-15">
                                    <a className="flex bg-cyan-500 hover:bg-cyan-600 items-center rounded-xl p-2" href={item.applyUrl}>
                                        <button >
                                            <p className="text-cyan-50 text-sm">Apply now</p>
                                        </button>
                                    </a>
                                    <a className="flex items-center outline outline-cyan-500 hover:outline-cyan-600 rounded-xl p-2" href={item.applyUrl}>
                                        <button>
                                            <p className="text-cyan-50 text-sm">Read more</p>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default Careers;
