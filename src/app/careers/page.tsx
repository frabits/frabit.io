import Position from '@/components/pages/careers/position';
import ValuesDesc from '@/components/pages/careers/values';

const CareersPage = () => {
    return (
        <>
            <h1 className="sr-only">Careers</h1>
            <div className="pt-32 sm:gap-y-14 mx-auto max-w-5xl">
                <div className="mx-auto pt-10 pb-10 bg-cyan-500 rounded-2xl max-w-4xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-cyan-50 sm:text-4xl">Become part of our team</h2>
                    <p className="mt-6 text-lg leading-8 text-cyan-50">
                        We are a globally diverse and distributed team, united behind a common goal of creating industry-leading, easy-use database platform. Here, you will have an opportunity to solve some of the most cutting edge technical challenges and have direct ownership of your work and vision. If you are a contributor by nature, a thinker as well as a doer - we’ll definitely click!
                    </p>
                </div>
            </div>
            <ValuesDesc />
            <Position />
        </>
    );
};

export default CareersPage;
