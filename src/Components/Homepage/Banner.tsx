interface Banner {
    title: string,
    description: string,
    next: string,
    prev: string,
}

export default function Banner() {
    const banners: Banner[] = [
        {
            title: "Affordable Price For Car Servicing",
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            next: '#slide2',
            prev: '#slide4'
        },
        {
            title: "Affordable Price For Car Servicing",
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            next: '#slide3',
            prev: '#slide1'
        },
        {
            title: "Affordable Price For Car Servicing",
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            next: '#slide4',
            prev: '#slide2'
        },
        {
            title: "Affordable Price For Car Servicing",
            description: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
            next: '#slide1',
            prev: '#slide3'
        },
    ]
    return (
        <section className="container mx-auto mt-12">
            <div className="carousel w-full">

                {
                    banners?.map((banner, idx) => <div
                        style={{
                            backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.3)), url(/assets/images/banner/${idx + 1}.jpg)`
                        }}

                        key={idx}
                        id={`slide${idx + 1}`} className="carousel-item relative w-full h-[90vh] bg-center bg-no-repeat bg-cover rounded-md">
                        <div className="h-full w-full flex items-center pl-36 text-white">
                            <div className="space-y-6">
                                <h1 className="text-5xl font-bold">{banner.title}</h1>
                                <p>{banner.description}</p>
                                <div>
                                <button className="btn btn-primary ">Discover More</button>
                                <button className="btn btn-primary btn-outline ml-2">Latest Project</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between bottom-12 right-12 gap-4">
                            <a href={banner.prev} className="btn btn-circle hover:bg-primary">❮</a>
                            <a href={banner.next} className="btn btn-circle hover:bg-primary">❯</a>
                        </div>
                    </div>)
                }
            </div>
        </section>
    )
}
