import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";

interface Service {
    title: string;
    img: string;
    price: string
}
interface ServiceCardProps {
    service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
    const { title, img, price } = service || {};
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <Image src={img} alt={title} width={430} height={120} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p></p>
                <div className="card-actions justify-between items-center">
                    <h6 className="text-primary font-semibold">Price: ${price}</h6>
                    <button className="btn btn-primary"><IoMdArrowDropright /> </button>
                </div>
            </div>
        </div>
    )
}
