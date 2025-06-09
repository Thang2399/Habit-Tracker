import React from "react";

export default async function PublicLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            Public Layout
            <div>
                {children}
            </div>
        </div>
    )
}