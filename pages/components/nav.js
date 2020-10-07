import Link from "next/link";

export default function NavigationBar() {
  return (
    <>
      <nav>
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <ul className="nav-links">
          <li>
            <Link href="../">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="../sections/team">
              <a>Our Team</a>
            </Link>
          </li>
          <Link href="../sections/ballHive">
            <li>
              <a>Product</a>
            </li>
          </Link>

          <Link href="../sections/cards">
            <li>
              <a>Card</a>
            </li>
          </Link>

          {/* <Link href="../sections/cards">
            <li>
            <a>Card</a>  
            <li/>
          </Link> */}

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
