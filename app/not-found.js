import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="h-svh flex justify-center items-center flex-col gap-4">
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}