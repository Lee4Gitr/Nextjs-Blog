import Link from 'next/link';

export default function Navbar() {
  // @ts-ignore
  // const {user, username} = {};
  const user = true;
  const username = true;
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">Feed</button>
          </Link>
        </li>
        {/*{User is signed-in and has username}*/}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL}/>
              </Link>
            </li>
          </>
        )}

        {/*user is not signed OR has not created username*/}
        {!username && (
          <li>
            <Link href="/enter">
              <button>Log in</button>
          </Link>
          </li>
        )}

      </ul>
    </nav>
  )
}
