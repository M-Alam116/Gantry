import Link from "next/link";
function Header() {
  return (
    <div className="w-full flex items-center justify-between px-[10px] md:px-[2rem] py-[1.5rem] h-[80px]">
      <div className="text-[22px] font-[600] text-[#000] uppercase tracking-wider">
        <Link href="/">gantry</Link>
      </div>
      <div className="hidden lg:flex justify-between gap-[4rem] items-center">
        <Link href="/">
          <li className="text-[18px] font-[600] text-[#000]">Product</li>
        </Link>
        <Link href="/">
          <li className="text-[18px] font-[600] text-[#000]">Solutions</li>
        </Link>
        <Link
          href="/resources"
          className="text-center rounded-full bg-[#000] w-fit h-fit text-[#fff] text-[14px] font-[500] px-[1.5rem] py-[10px]"
        >
          <li className="list-none">Resources</li>
        </Link>
        <Link href="/">
          <li className="text-[18px] font-[600] text-[#000]">Company</li>
        </Link>
      </div>
      <div className="">
        <button className="text-center rounded-full bg-[#000] w-fit h-fit text-[#fff] text-[14px] font-[500] px-[1.5rem] py-[10px]">
          Get in touch
        </button>
      </div>
    </div>
  );
}

export default Header;
