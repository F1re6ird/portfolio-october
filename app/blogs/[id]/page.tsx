import React from 'react';
import BlogFullPage from './BlogFullPage';

export default async function page(props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params; // ✅ await before accessing

    return <BlogFullPage id={id} />;
}
