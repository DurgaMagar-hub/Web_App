import Link from 'next/link';
export default function navbar(){
    return (
        <div>
            <Link href="/">
                Logo
            </Link>
            <Link href="/about">
                About Us
            </Link>
        </div>
    );
}