const Values = [
    {
        name: 'Customer first',
        desc: 'We succeed when our customers and users succeed. They’re at the center of everything we do. Our passion for our users translates into their passion for ClickHouse.',
        imageUrl: '/images/page/careers/customer-first.svg',
    },
    {
        name: 'Distributed',
        desc: 'Frabit Labs is proud to have employees in over 10 countries. We believe that diverse and distributed workplaces working inclusively are an essential advantage.',
        imageUrl: '/images/page/careers/distributed.svg',
    },
    {
        name: 'Remote and flexible',
        desc: 'We’re a remote ultimate, with a flexible work-from-anywhere policy. We work in small product oriented teams to focus & execute faster. We don’t track working hours, what matters is what you get done.',
        imageUrl: '/images/page/careers/remote.svg',
    },
    {
        name: 'Empathy at work',
        desc: 'Empathy is the ability to place yourself in the shoes of others, to try to understand their thoughts, feelings, and needs, and also know that we don’t know it all and need to approach other people with the humility to learn.',
        imageUrl: '/images/page/careers/empathy.svg',
    },
    {
        name: 'Diversity',
        desc: 'Diverse and inclusive environments are both an advantage and a moral imperative. 40% of our leadership platform consists of women, and we are proud to have a diverse group of investors, board members, and advisors.',
        imageUrl: '/images/page/careers/diversity.svg',
    },
    {
        name: 'Trust',
        desc: 'We work together to make collaboration a strength across timezone differences, languages, and cultures. While we’re in different places, we all have the same goals, and we trust each other to do the work needed to achieve them.',
        imageUrl: '/images/page/careers/trust.svg',
    },
]

const ValuesDesc = () => {
    return (
        <>
            <div className="w-full px-8 pt-16">
                <div className="mx-auto mb-6 flex max-w-7xl flex-col md:flex-row md:space-x-16">
                    <h2 className="text-3xl font-bold tracking-tight text-cyan-50 sm:text-4xl">Core values</h2>
                </div>
                <div className="d-sm-inline-flex col-md-6 mb-6 grid gap-x-20 pr-20 pl-20 gap-y-10 w-full lg:grid-cols-3">
                        {Values.map((item,idx) => (
                                <div className="flex flex-cols items-center gap-x-6" key={idx}>
                                    <img className="h-16 w-16 rounded-full mr-3 mb-2 mb-md-0" src={item.imageUrl} alt="" />
                                    <div>
                                        <h3 className="text-xl font-semibold leading-6 text-cyan-50">{item.name}</h3>
                                        <p className="text-sm font-semibold leading-6 text-slate-400">{item.desc}</p>
                                    </div>
                                </div>
                        ))}
                </div>
            </div>
        </>
    );
};

export default ValuesDesc;
