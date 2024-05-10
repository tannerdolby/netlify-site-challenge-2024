import "../styles/header.css";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <Link href="/" aria-label="homepage link">
                <div className="header-logo">
                    <div className="vertical-bar"></div>
                    <div className="horizontal-bar"></div>
                    <div className="left-diagonal-bar"></div>
                    <div className="right-diagonal-bar"></div>
                </div>
            </Link>
            <Link href="/feed">Feed</Link>
        </header>
    )
}
