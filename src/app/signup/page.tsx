import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGoogle } from "react-icons/fa";


export default function page() {
    return (
        <section className="container mx-auto p-24">
            <div className="grid grid-cols-2 gap-12">
                {/* image */}
                <div className="">
                    <Image src='/assets/images/login/login.svg' alt="login_image" height={540} width={540} />
                </div>
                {/* form */}
                <div className="border-2 p-12 rounded-md">
                    <h2 className="text-center font-semibold text-4xl">Sign Up</h2>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <div className="mt-5">
                        <h6 className="text-center font-semibold text-lg">Or sign in with</h6>
                        <div className="flex justify-center items-center gap-10 mt-5 text-2xl">
                            <FaGoogle />
                            <FaFacebook />
                        </div>
                    </div>
                    <h2 className="text-center mt-3 text-base">Have an account? <Link
                        className="text-primary hover:underline" href='/signup'>Sign Up</Link></h2>
                </div>
            </div>
        </section>
    )
}
