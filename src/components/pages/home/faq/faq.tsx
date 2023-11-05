"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const questions = [
    {
        question: 'What is database as a service,aka DBaas?',
        answer:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.'
    },
    {
        question: 'Do you offer technical support?',
        answer:
            'Yeah,'
    },
    {
        question: 'What is your refund policy?',
        answer:
            'If you are unhappy with your purchase for any reason, email us within 90 days and we will refund you in full, no questions asked.'
    },
    {
        question: 'Why should I use Frabit vs. X platform?',
        answer:
            'If you are unhappy with your purchase for any reason, email us within 90 days and we will refund you in full, no questions asked.'
    },
    {
        question: 'How much does Frabit cost?',
        answer:
            'Frabit is faster than most traditional data warehouses and databases and is most often used when real-time queries on large datasets are necessary at an affordable cost. However, developers also often use ClickHouse on top of their CDWH or OLTP databases to act as a “speed layer” within their existing infrastructure.'
    },
    {
        question: 'How can I contact your team to discuss my requirements?',
        answer:
            'You can request a quote above or reach out directly to us at info@frabit.io'
    },
];

const Faq = () =>{
    return (
        <>
            <div className="w-full gap-sm-grid items-center group">
                <div className="p-10 text-center flex flex-col items-center">
                    <h1 className="text-cyan-50 text-4xl font-bold font-large pb-10 ">FAQs</h1>
                    <p className="mx-auto max-w-screen-sm text-center leading-normal text-neutral-200">Wherever you need us, we’re there. We love to engage in thoughtful conversation with the Frabit community and are always on-hand to answer your questions</p>
                </div>
                {questions.map(({question,answer}, idx) => (
                    <div className="col-span-1 rounded-2xl pl-72 pr-72 p-5" key={idx}>
                        <Disclosure>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-cyan-800 px-4 py-2 text-left text-sm font-medium text-cyan-50 hover:bg-cyan-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                        <span>{idx+1} | {question}</span>
                                        <ChevronUpIcon
                                            className={`${
                                                open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-cyan-50`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                        {answer}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Faq;