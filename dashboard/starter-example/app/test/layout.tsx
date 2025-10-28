import '@/app/ui/global.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <p>test-chinko</p>
                {children}
                <p>test-oppai</p>
            </body>
        </html>
    );
}
