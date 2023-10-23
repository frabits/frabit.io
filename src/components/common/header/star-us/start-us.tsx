'use client';

import { useEffect, useState } from 'react';

import Route from '@/lib/route';

const API_URL = 'https://api.github.com/repos/frabits/frabit';

const GithubStarCounter = () => {
    const [starsCount, setStarsCount] = useState("");

    useEffect(() => {
        const prevStarsCount = window.sessionStorage.getItem('frabit_github_stargazers_count');

        if (prevStarsCount) {
            setStarsCount(prevStarsCount);
            return;
        }

        async function getStarCount() {
            const updatedStarsCount = await fetch(API_URL).then((res) => res.json()).then((json) => json.stargazers_count);
            window.sessionStorage.setItem('frabit_github_stargazers_count', updatedStarsCount);
            setStarsCount(updatedStarsCount);
        }
        getStarCount();
    }, []);

    return (
        <>
            <a className="w-13 h-13  rounded grid place-items-center"
               href={Route.GITHUB_STAR}
               rel="noopener noreferrer"
               target="_blank">
                <div className="flex flex-cols items-center">
                    <div className="flex flex-cols flex-auto gap-1 items-center">
                        <img className="flex place-self-center w-5 h-5" src="/icon/github.png" />
                        <span className="w-auto text-sm font-semibold text-cyan-50">
                            {/*<p className="">{starsCount ? `${(starsCount / 1000).toFixed(1)}k` : '...'}</p>*/}
                            <p className="">{starsCount ? `${(15300 / 1000).toFixed(1)}k` : 'Star Us'}</p>
                        </span>
                    </div>
                </div>
            </a>
        </>
    );
};

export default GithubStarCounter;
