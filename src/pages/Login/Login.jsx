import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { LiaEyeSlashSolid, LiaEyeSolid } from 'react-icons/lia';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (data) => {

    }

    return (
        <div className='flex flex-row justify-center items-center h-screen bg-[url("/public/trade.png")] bg-no-repeat bg-cover w-full'>
            <div className='backdrop-brightness-50 w-full h-full flex justify-center items-center'>
                <div className='w-1/2 mx-auto backdrop-brightness-50 px-10 h-[78%] flex flex-col justify-center items-center border border-amber-400'>
                <div className='mb-20'>
                    <h1 className="text-3xl font-semibold text-white">Sign <span className='text-amber-400'>In</span></h1>
                </div>
                    <div className='w-full'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* Email Field */}
                            <div className="mb-4">
                                <label className="text-black text-sm font-medium">Email</label>
                                <input
                                    type="text"
                                    {...register("email", {
                                        required: "Email is required",
                                    })}
                                    className={`border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 dark:border-gray-600 focus:outline-none bg-white mt-1`}
                                    placeholder="name@gmail.com"
                                />
                            </div>

                            {/* Password Field */}
                            <div className="mb-0">
                                <label className="text-black text-sm font-medium">Password</label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: 6,
                                        })}
                                        className={`border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5 dark:border-gray-600 focus:outline-none bg-white mt-1`}
                                        placeholder="**************"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute top-3 right-4 text-xl"
                                    >
                                        {showPassword ? <LiaEyeSolid className='text-base' /> : <LiaEyeSlashSolid className='text-base' />}
                                    </button>
                                </div>

                                {/* {serverError && (
                            <p className="text-red-500 text-xs mt-1">{serverError}</p>
                        )} */}

                                <div className="flex justify-end">
                                    <div>
                                        <p className="text-end text-amber-400 text-xs font-medium cursor-pointer py-4">
                                            Forget Password?
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Login Button */}
                            <div className="">
                                <button
                                    type="submit"
                                    className="w-full md:px-4 py-2.5 bg-amber-400 text-white text-xs rounded-3xl hover:bg-amber-500 duration-500"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;