"use client"
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const highlights = [
    {
        name: 'distributions',
        items:[
            {name:"Oracle MySQL",enable:true},
            {name:"Percona Server for MySQL",enable:true},
        ]},
    {
        name: 'Replication types',
        items:[
            {name:"Native asynchronous",enable:true},
            {name:"Semi-synchronous",enable:true},
            {name:"Group replication",enable:false},
        ]},
    {
        name: 'Key features',
        items:[
            {name:"Oracle MySQL",enable:true},
            {name:"Oracle MySQL",enable:true},
            {name:"Percona Server for MySQL",enable:true},
        ]},
];

const Highlights = () =>{
    return (
        <>
            <div className="w-full gap-sm-grid items-center group px-32">
                <div className="p-10 text-center flex flex-col items-center">
                    <h1 className="text-cyan-50 text-4xl font-bold font-large pb-10 ">Highlights</h1>
                </div>
                <div className="grid grid-cols-3 gap-5">
                    {highlights.map(({name,items}, idx) => (
                        <div className="col-span-1 rounded-3xl border-2 border-cyan-50" key={idx}>
                            <div className="border-b-2 border-cyan-50 p-5">
                                <span className="text-cyan-50 text-4xl font-bold font-large">{name}</span>
                            </div>
                            <div className="pr-10 pl-10">
                                {items.map(({name}, idx) => (
                                    <div className="p-2" key={idx}>
                                        <div>
                                            <span className="text-cyan-50 text-10 font-large">{idx+1}.{name}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Highlights;