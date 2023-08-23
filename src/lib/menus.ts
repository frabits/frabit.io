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
                },
                {
                    name: 'ReleaseNotes',
                    description: 'Ship ~30 improvements bi-weekly',
                    linkUrl: Route.RELEASE_NOTES,
                    iconName: 'release-notes',
                },
                {
                    name: 'About Us',
                    description: 'Why we develop Frabit',
                    linkUrl: Route.ABOUT,
                    iconName: 'about',
                },
            ],
        },
        { title: 'Pricing', href: Route.PRICING },
        { title: 'Contact', href: Route.CONTACTS },
    ],
    footer: [
        {
            name: 'Support Database',
            items: [
                { name: 'MySQL', linkUrl: Route.DB_MYSQL },
                { name: 'MongoDB', linkUrl: Route.DB_MONGODB },
                { name: 'Redis', linkUrl: Route.DB_REDIS },
                { name: 'ClickHouse', linkUrl: Route.DB_CLICKHOUSE },
            ],
        },
        {
            name: 'Products',
            items: [
                { name: 'Frabit Cloud', linkUrl: Route.CLOUD },
                { name: 'Frabit Enterprise', linkUrl: Route.FRABIT },
                { name: 'Frabit Community', linkUrl: Route.FRABIT_OSS },
            ],
        },
        {
            name: 'Resources',
            items: [
                { name: 'Blog', linkUrl: Route.BLOG },
                { name: 'Documentation', linkUrl: Route.DOCS },
                { name: 'Downloads', linkUrl: Route.DOWNLOADS },
                { name: 'Release Notes', linkUrl: Route.RELEASE_NOTES },
                { name: 'Docker Images', linkUrl: Route.DOCKERHUB },
            ],
        },
        {
            name: 'Community',
            items: [
                { name: 'Github', linkUrl: Route.GITHUB },
                { name: 'Slack', linkUrl: Route.SLACK },
                { name: 'Discussions', linkUrl: Route.Discussions },
                { name: 'Issue Track', linkUrl: Route.Issues },
                { name: 'LinkedIn', linkUrl: Route.LINKEDIN },
                { name: 'Twitter', linkUrl: Route.TWITTER },
            ],
        },
        {
            name: 'Company',
            items: [
                { name: 'About', linkUrl: Route.ABOUT },
                { name: 'Careers', linkUrl: Route.CAREERS },
                { name: 'Pricing', linkUrl: Route.PRICING },
                { name: 'Contact', linkUrl: Route.CONTACTS },
            ],
        },
    ],
};
