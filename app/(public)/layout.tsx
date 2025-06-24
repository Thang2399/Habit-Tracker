import React from "react";

export default async function PublicLayout({children}: {children: React.ReactNode}) {
    return (
        <div className={'max-w-7xl mx-auto max-h-8xl h-full flex items-center justify-center text-primary'}>
            {children}
        </div>
    )
}