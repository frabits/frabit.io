type Metadata = {
    title: string;
    description: string;
    pathname: string;
    imagePath?: string;
};

const DEFAULT_IMAGE_PATH = '/images/social-previews/index.jpg';

export default function getMetadata({
                                        title,
                                        description,
                                        pathname,
                                        imagePath = DEFAULT_IMAGE_PATH,
                                    }: Metadata) {
    const SITE_URL = process.env.NEXT_PUBLIC_DEFAULT_SITE_URL;
    const canonicalUrl = SITE_URL + pathname;
    const imageUrl = imagePath.startsWith('http') ? imagePath : SITE_URL + imagePath;
    const siteName = 'Frabit platform';

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl,
        },
        manifest: `${SITE_URL}/manifest.json`,
        icons: {
            icon: '/favicon/favicon.png',
            apple: [
                { url: '/favicon/favicon.png' },
            ],
        },
        openGraph: {
            title,
            description,
            url: canonicalUrl,
            siteName,
            images: [
                {
                    url: imageUrl,
                    alt: siteName,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: {
                url: imageUrl,
                alt: siteName,
            },
        },
    };
}
