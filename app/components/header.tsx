import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-6 left-0 right-0 z-20 flex justify-center px-4">
      <div className="flex w-full max-w-7xl items-center justify-between rounded-full bg-white/10 px-6 py-3 shadow-lg shadow-black/10 backdrop-blur">
        <div className="flex items-center gap-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="Hosue logo"
            width={80}
            height={80}
            className="h-12 w-25 shrink-0 rounded-full object-contain"
          />
          {/* <span className="text-lg font-semibold tracking-wide">HOSUE</span> */}
        </div>

        <nav className="hidden items-center gap-10 text-md font-medium text-white md:flex">
          <Link href="#" className="hover:text-[#FFD44F] transition-colors">
            Property
          </Link>
          <Link href="#" className="hover:text-[#FFD44F] transition-colors">
            Amenities
          </Link>
          <Link href="#" className="hover:text-[#FFD44F] transition-colors">
            Gallery
          </Link>
          <Link href="#" className="hover:text-[#FFD44F] transition-colors">
            Apartment
          </Link>
          <Link href="#" className="hover:text-[#FFD44F] transition-colors">
            Testimonials
          </Link>
          <Link href="#" className="hover:text-[#FFD44F] transition-colors">
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full transition hover:opacity-80"
            aria-label="Search"
          > */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* <img src="/images/search.png" alt="Search" className="h-5 w-5 object-contain" />
          </button> */}

          <Link
            href="#enquire"
            className="hidden rounded-full bg-[#FFD44F] px-6 py-2 text-md font-semibold text-neutral-900 transition hover:bg-[#FFD44F]/50 md:inline-block"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </header>
  );
}