import Image from "next/image"

type CategoryCard = {
    name: string
    imageSrc: string
    imageAlt: string
}

const categories: CategoryCard[] = [
    { name: "Cricket academy", imageSrc: "/images/Cricket.png", imageAlt: "Cricket" },
    { name: "Football academy", imageSrc: "/images/banner-left.png", imageAlt: "Football" },
    { name: "Tennis academy", imageSrc: "/images/banner-left.png", imageAlt: "Tennis" },
    { name: "Badminton academy", imageSrc: "/images/banner-left.png", imageAlt: "Badminton" },
    { name: "Cricket academy", imageSrc: "/images/banner-left.png", imageAlt: "Cricket" },
    { name: "Football academy", imageSrc: "/images/banner-left.png", imageAlt: "Football" },
    { name: "Tennis academy", imageSrc: "/images/banner-left.png", imageAlt: "Tennis" },
    { name: "Badminton academy", imageSrc: "/images/banner-left.png", imageAlt: "Badminton" },
    { name: "Cricket academy", imageSrc: "/images/banner-left.png", imageAlt: "Cricket" },
    { name: "Football academy", imageSrc: "/images/banner-left.png", imageAlt: "Football" },
]

export default function Sports() {
    return (
        <section className="w-full bg-[#F58967] py-14 md:py-20 relative z-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    {/* <p className="text-[13px] font-semibold text-red-600">Our Academy</p> */}
                    <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight text-[#000000]/100">
                        A Stadium Of Pure Sports Experience
                    </h2>
                    <p className="mx-auto mt-4 max-w-3xl text-md md:text-base text-[#000000]/100">
                        Here, sports aren’t boxed into a corner; they define the township. With 12.5 acres dedicated exclusively to sports, managed by the Ileseum Club, this is one of Pune’s most ambitious sports-first residential townships. Here, play isn’t occasional. It’s institutionalized.
                    </p>
                </div>

                <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 md:gap-12">
                    {categories.map((cat) => (
                        <div
                            key={cat.name}
                            className="relative h-[260px] w-[260px] overflow-hidden rounded-[28px] bg-gradient-to-br from-rose-600 via-purple-700 to-indigo-900 shadow-md"
                        >
                            {/* vertical category label */}
                            <div className="absolute left-5 top-1/2 -translate-y-1/2">
                                <span className="block select-none text-white/25 font-extrabold text-2xl tracking-tight [writing-mode:vertical-rl] rotate-180">
                                    {cat.name}
                                </span>
                            </div>

                            {/* athlete image */}
                            <div className="absolute inset-x-0 bottom-0 h-full">
                                <Image
                                    src={cat.imageSrc}
                                    alt={cat.imageAlt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-contain object-bottom "
                                    priority={false}
                                />
                            </div>

                            {/* subtle highlight */}
                            <div className="absolute inset-0 " />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}