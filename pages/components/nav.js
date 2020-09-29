import Link from "next/link";

export default function NavigationBar(){
    return(
        <>

<nav>
        <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
        <ul className="nav-links">
            <li>
                <Link href="../sections/products">
                <a>What We Do</a>
                </Link>
            </li>
            <li>
                <Link href="../sections/team">
                <a>Our Team</a>
                </Link>
            </li>
            <li><a href="#">Product</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>

        </>
    )
}