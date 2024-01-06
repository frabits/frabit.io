import Route from './route';

export const MENU = {
    header: [
        {
            title: 'Docs',
            items: [
                {
                    name: 'What is Frabit',
                    description: 'The next-gen database automatic operation platform',
                    linkUrl: Route.DOCS,
                    iconName: 'intro',
                    isExternal:false,
                },
            ],
        },
        {
            title: 'Resources',
            items: [
                {
                    name: 'Blog',
                    description: 'Learn product and industry insight',
                    linkUrl: Route.BLOG,
                    iconName: 'blog',
                    isExternal:false,
                },
                {
                    name: 'ReleaseNotes',
                    description: 'Ship ~30 improvements bi-weekly',
                    linkUrl: Route.RELEASE_NOTES,
                    iconName: 'release-notes',
                    isExternal:false,
                },
                {
                    name: 'About Us',
                    description: 'Why we develop Frabit',
                    linkUrl: Route.ABOUT,
                    iconName: 'about',
                    isExternal:false,
                },
            ],
        },
        { title: 'Pricing', href: Route.PRICING },
        { title: 'Contact', href: Route.CONTACTS },
    ],
    footer: [
        {
            name: 'Services',
            items: [
                { name: 'Remote DBA', linkUrl: Route.REMOTE_DBA,isExternal:false },
                { name: 'Technical Support', linkUrl: Route.FRABIT,isExternal:false },
                { name: 'Consulting', linkUrl: Route.FRABIT_OSS,isExternal:false },
            ],
        },
        {
            name: 'Products',
            items: [
                { name: 'Frabit Cloud', linkUrl: Route.CLOUD,isExternal:false },
                { name: 'Frabit Enterprise', linkUrl: Route.FRABIT,isExternal:false },
                { name: 'Frabit Community', linkUrl: Route.FRABIT_OSS,isExternal:false },
            ],
        },
        {
            name: 'Resources',
            items: [
                { name: 'Blog', linkUrl: Route.BLOG,isExternal:false },
                { name: 'Documentation', linkUrl: Route.DOCS,isExternal:false },
                { name: 'Downloads', linkUrl: Route.DOWNLOADS,isExternal:false },
                { name: 'Release Notes', linkUrl: Route.RELEASE_NOTES,isExternal:false },
                { name: 'Docker Images', linkUrl: Route.DOCKERHUB,isExternal:false },
            ],
        },
        {
            name: 'Community',
            items: [
                { name: 'Github', linkUrl: Route.GITHUB,isExternal:true },
                { name: 'Slack', linkUrl: Route.SLACK,isExternal:true },
                { name: 'Discussions', linkUrl: Route.Discussions,isExternal:true },
                { name: 'Issue Track', linkUrl: Route.Issues,isExternal:true },
                { name: 'LinkedIn', linkUrl: Route.LINKEDIN,isExternal:true },
                { name: 'Twitter', linkUrl: Route.TWITTER,isExternal:true },
            ],
        },
        {
            name: 'Company',
            items: [
                { name: 'About', linkUrl: Route.ABOUT,isExternal:false },
                { name: 'Support', linkUrl: Route.SUPPORT,isExternal:false },
                { name: 'Careers', linkUrl: Route.CAREERS,isExternal:false },
                { name: 'Pricing', linkUrl: Route.PRICING,isExternal:false },
                { name: 'Contact', linkUrl: Route.CONTACTS,isExternal:false },
            ],
        },
    ],
};
