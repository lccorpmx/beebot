import Link from 'next/link';

function Header() {
  return (
    <header className="bg-yellow-500 p-1">
      <div className="max-w-screen-lg mx-auto flex justify-center items-center">
        <Link href="https://www.tulink.com">
          <div className="text-white font-bold text-2xl text-center cursor-pointer underline">
            BeeHigh
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
