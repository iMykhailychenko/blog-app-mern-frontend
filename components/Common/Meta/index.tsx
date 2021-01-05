import Head from 'next/head';
import React, { ReactElement } from 'react';

interface IProps {
    title?: string;
    description?: string;
    keywords?: string;
    icon?: string;
}

const Meta = ({ title, description, keywords, icon }: IProps): ReactElement => (
    <Head>
        <meta name="description" content={description || 'Read and share ideas'} />
        <meta name="keywords" content={keywords || 'blog network socials read'} />
        <link rel="apple-touch-icon" href={icon || '/about.jpg'} />
        <title>{title || 'Blog Application'}</title>
    </Head>
);

export default Meta;
