import React from 'react';
import ProjectDetailPage from '../ProjectDetailPage';

export default async function page(props: { params: Promise<{ name: string }> }) {
    const { name } = await props.params; // ✅ await before accessing

    return <ProjectDetailPage name={name} />;
}
