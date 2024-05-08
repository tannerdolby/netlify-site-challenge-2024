import "../styles/header.css";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <a href="/">
                <div className="header-logo">
                    <div className="vertical-bar"></div>
                    <div className="horizontal-bar"></div>
                    <div className="left-diagonal-bar"></div>
                    <div className="right-diagonal-bar"></div>
                </div>
            </a>
            <Link href="/feed">Feed</Link>
        </header>
    )
}
