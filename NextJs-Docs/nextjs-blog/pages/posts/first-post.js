import Link from 'next/link'
export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <Link href="/"><a>Go Back !</a></Link>
            {/* Note: If you need to link to an external page outside the Next.js app, just use an <a> tag without Link.
            If you need to add attributes like, for example, className, add it to the a tag, not to the Link tag. */}
        </>

    )
}