export default async function PrivateLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            Private Layout:

            <div>
                {children}
            </div>
        </div>
    )
}