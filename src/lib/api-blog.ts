import { getTimeToRead } from '@/utils/get-time-to-read';
import slugifyText from '@/utils/slugify-text';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { BlogPost } from '@/types/blog-post';

import CONTENT_FOLDER from './content-folder';

const POSTS_PER_PAGE = 21;

type BlogPostsWithTags = {
    posts: BlogPost[];
    tags: string[];
};

const getAllBlogPosts = (category?: string): BlogPostsWithTags => {
    const dir = category == 'Tutorial' ? CONTENT_FOLDER.tutorial : CONTENT_FOLDER.blog;
    const files = fs.readdirSync(dir).filter((file) => file.endsWith('.md'));
    const tagsSet = new Set();

    const posts: BlogPost[] = files
        .map((file) => {
            const slug = file.replace('.md', '');
            const post = getBlogPostBySlug(dir, slug);

            if (!post || post.tags.includes('Hidden')) return null;

            post.tags.split(',').forEach((el) => {
                tagsSet.add(el.trim());
            });

            return {
                ...post,
            };
        })
        .filter((post): post is BlogPost => {
            return post && (!category || post?.tags.includes(category)) ? true : false;
        })
        .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());

    return { posts, tags: Array.from(tagsSet) as string[] };
};

const getBlogPostBySlug = (dir: string, slug: string): BlogPost | null => {
    try {
        const VERSION = fs.readFileSync('VERSION').toString();
        const filePath = path.join(dir, `${slug}.md`);
        const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
        const { content, data } = matter(markdownWithMeta);

        if (!data || !content) return null;

        const contentWithVersion: string = content.replace(/%%bb_version%%/g, VERSION);

        return {
            ...data,
            content: contentWithVersion,
            slug,
            timeToRead: getTimeToRead(content),
        } as BlogPost;
    } catch (e) {
        return null;
    }
};

type PostPerPageProps = {
    page: number;
    category?: string;
    featuredOnly?: boolean;
};

const getBlogPostsPerPage = ({
                                 page,
                                 category = '',
                                 featuredOnly = false,
                             }: PostPerPageProps):
    | (BlogPostsWithTags & { pageCount: number; recentPosts: BlogPost[] })
    | null => {
    const startIndex = (page - 1) * POSTS_PER_PAGE;

    const { posts, tags } = getAllBlogPosts();

    const postsInCategory = posts.filter(
        (el) => category === '' || category === slugifyText(el.tags),
    );

    const recentPosts = posts
        .filter((el) => el.tags !== 'Tutorial' && (!featuredOnly || el.featured))
        .slice(0, 5);

    const postsWithoutTutorial = postsInCategory.filter((el) => el.tags !== 'Tutorial');

    const result = postsWithoutTutorial.slice(startIndex, startIndex + POSTS_PER_PAGE);

    if (result.length === 0) return null;

    return {
        recentPosts,
        pageCount: Math.ceil(postsWithoutTutorial.length / POSTS_PER_PAGE),
        posts: result,
        tags: tags.filter((el) => el !== 'Tutorial'),
    };
};

const getTagNameBySlug = (tagSlag: string): string => {
    const tags: Record<string, string> = {
        announcement: 'Announcement',
        industry: 'Industry',
        explanation: 'Explanation',
        engineering: 'Engineering',
        'how-to': 'How-To',
        'case-study': 'Case Study',
    };

    return tags[tagSlag];
};

export {
    getAllBlogPosts,
    getBlogPostBySlug,
    getBlogPostsPerPage,
    getTagNameBySlug,
    POSTS_PER_PAGE,
};
