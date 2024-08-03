"use client"; // Marca el componente como un Client Component

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import contento from '@/public/icons-values/contento.gif'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false); // Estado para controlar el mensaje de agradecimiento


    const handleSubmit = (e) => {
        e.preventDefault();

        // Construir el mensaje para WhatsApp
        const whatsappMessage = `Hola MUCHOMARKETING, mi nombre es ${name}. Mi correo es ${email}. ${message}`;


        // Abrir WhatsApp
        const whatsappURL = `https://wa.me/543586011006?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, '_blank');

        // Mostrar el mensaje de agradecimiento
        setIsSubmitted(true);
    };


    return (
        <section className='bg-[#191919] py-20 px-4'>
            <div className="max-w-5xl py-16 mx-auto p-4 border border-gray-400 rounded-md  bg-white text-black">
                {isSubmitted ? (
                    <div className="text-center mx-auto">
                        <h2 className="text-2xl font-bold mb-4">Gracias por contactarnos!</h2>
                        <p className="mb-4">Te responderemos a la brevedad.</p>
                        <Image src={contento} className='mx-auto w-20 mb-4' />
                        <div className='flex flex-col space-y-1 md:flex-row md:justify-center md:space-y-0'>

                            <Link href={'/'} passHref legacyBehavior>
                                <button

                                    className="rounded-md bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg font-semibold py-3 px-6 transform hover:scale-105 transition duration-300 ease-in-out md:mr-2"
                                >
                                    Volver al inicio
                                </button>
                            </Link>
                            <Link href={'/about-us'} passHref legacyBehavior>
                                <button

                                    className="py-3 px-6 border-2 border-black text-black rounded-md font-semibold transform hover:scale-105 transition duration-300 ease-in-out"
                                >
                                    Conoce más sobre nosotros
                                </button>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className=' text-lg font-medium'>
                        <h4 className="text-2xl font-bold mb-4 text-black ">¡Hablemos!</h4>

                        <div className="mb-4 ">
                            <label htmlFor="name" className="block text-black ">
                                Nombre
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-md h-10 p-2"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-black ">
                                Correo Electrónico
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="mt-1 block w-full border border-gray-300 shadow-lg rounded-md h-10 p-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-black ">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-lg p-2"
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-lg font-semibold py-3 px-6 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out rounded-md "
                        >
                            Enviar a WhatsApp
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
};

export default ContactForm;

