'use client';

import Route from "@/lib/route";
import React from "react";

const Company = () => (
    <>
        <div className="py-14">
            <div className="mx-auto grid max-w-7xl rounded-3xl text-center items-center pr-5 pl-5">
                <h2 className="text-3xl font-bold tracking-tight text-cyan-50 sm:text-4xl">About Frabit</h2>
                <p className="mt-6 text-lg leading-8 text-cyan-50 pr-20 pl-20">
                    Frabit is an open-source, automatic platform that simplifies database operations and improves collaboration between DBAs and engineers.
                </p>
                <p className="mt-6 text-lg leading-8 text-cyan-50 pr-20 pl-20">
                    By bringing Database as a service (aka DBaaS) best practices to data pipelines, frabit allows you to install、upgrade and manage most well-known database with just one platform.
                </p>
                <p className="mt-6 text-lg leading-8 text-cyan-50 pr-20 pl-20">
                    Thanks to the most well-known databases,such as MySQL、Redis、MongoDB and ClickHouse, also include most database eco-system: Xtrabackup、orchestrator、gh-ost. we can easily integrate these databases and toolkits into a platform.
                </p>
            </div>
        </div>
    </>
);

export default Company;
