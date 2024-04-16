'use client'
import './_style/globals.css'

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <main className="h-svh flex justify-center items-center flex-col gap-4">
                    <h2>Something went wrong!</h2>
                    <button onClick={() => reset()}>Try again</button>
                </main>
            </body>
        </html>
    )
}