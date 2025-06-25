import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Credit Analyst</div>
        <ul className="navbar-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/countries">Countries</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
