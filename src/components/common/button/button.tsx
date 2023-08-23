/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';

import Link from '@/components/common/link';

import ArrowIcon from '@/assets/arrow.inline.svg';
import { STATES } from '@/lib/states';

const styles = {
    base: 'inline-flex items-center justify-center leading-none text-center whitespace-nowrap rounded transition-colors duration-200 outline-none',
    size: {
        sm: 'h-9 text-14 font-bold py-3 px-4.5 uppercase',
        md: 'h-12 text-14 font-bold py-4.5 px-6 2xs:w-full uppercase',
        lg: 'h-16 text-16 font-bold py-[21px] px-9 2xs:w-full uppercase md:py-4.5 md:text-13 md:h-12',
    },
    theme: {
        'primary-filled':
            'text-white bg-primary-1 hover:bg-primary-2 disabled:tones-purple-dark tracking-wide rounded-full transition-colors duration-200',
        'primary-outline':
            'text-black border-[3px] border-primary-1 hover:border-gray-15 disabled:text-gray-60 disabled:border-tones-purple-dark rounded-full tracking-wide',
        'gray-filled':
            'bg-gray-15 text-white hover:bg-gray-40 disabled:bg-gray-80 tracking-wide rounded-full',
    },
};

type ButtonProps = {
    className?: string;
    href?: string;
    size?: keyof typeof styles.size;
    theme?: keyof typeof styles.theme;
    children: React.ReactNode;
    withArrow?: boolean;
    target?: string;
    rel?: string;
    type?: 'button' | 'submit' | 'reset';
    state?: (typeof STATES)[keyof typeof STATES];
};

const Button = ({
                    className: additionalClassName,
                    size,
                    theme,
                    href = '',
                    children,
                    state,
                    withArrow = false,
                    ...props
                }: ButtonProps) => {
    const className = clsx(
        styles.base,
        size && styles.size[size],
        theme && styles.theme[theme],
        additionalClassName,
        {
            'pointer-events-none':
                state === STATES.LOADING || state === STATES.SUCCESS || state === STATES.ERROR,
        },
        { '!bg-secondary-2 transition-colors duration-200': state === STATES.SUCCESS },
        { '!bg-black transition-colors duration-200': state === STATES.ERROR },
    );

    const Tag = href ? Link : 'button';

    let content = null;

    switch (state) {
        case STATES.LOADING:
            content = <img className="w-7" src="/images/loader.svg" alt="" aria-hidden />;
            break;
        case STATES.SUCCESS:
            content = (
                <img className="w-7 stroke-white" src="/images/check-form.svg" alt="" aria-hidden />
            );
            break;
        case STATES.ERROR:
            content = <span>Error</span>;
            break;
        case STATES.DEFAULT:
        default:
            content = (
                <>
                    {withArrow ? <span>{children}</span> : children}
                    {withArrow && <ArrowIcon className={clsx('ml-5 w-4 shrink-0')} />}
                </>
            );
    }

    return (
        <Tag className={className} href={href} {...props}>
            {content}
        </Tag>
    );
};

export default Button;
