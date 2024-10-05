import { services } from "@/lib/Services"
import ServiceCard from "../cards/ServiceCard"
// interface Service {
//     _id: string;
//     title: string;
//     img: string;
//     price: string;
//     description: string;
//     facility: {
//         name: string;
//         details: string;
//     }[];
// }
// interface Service {
//     key: string;
//     service: Service;
// }

export default function Services() {
    return (
        <section className="text-slate-800 min-h-screen">
            <div className="text-center container mx-auto">
                <h3 className="text-2xl font-bold text-orange-600">Our Service</h3>
                <h2 className="text-5xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don&lsquo;t look even slightly believable. </p>
            </div>
            {/* services items */}
            <div className="container mx-auto grid md:grid-cols-3 gap-6">
                {
                    services?.map((service) => <ServiceCard
                        key={service._id}
                        service={service}
                    >

                    </ServiceCard>)
                }
            </div>
        </section>
    )
}
