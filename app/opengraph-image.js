import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'About Acme'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: 1
                }}
            >
                <p style={{ color: 'white', fontSize: 50, margin: 0 }}>Parallax</p>
                <p style={{ color: 'white', fontSize: 25, margin: 0 }}>Framer Motion + Lenis + Next.js</p>
            </div>
        ),
        {
            ...size,
        }
    )
}