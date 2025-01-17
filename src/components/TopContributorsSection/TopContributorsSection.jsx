import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Fade, Zoom } from 'react-awesome-reveal';
import Container from '../Container/Container';

const TopContributorsSection = () => {
    const { dark } = useContext(AuthContext);
    const contributors = [
        {
            name: 'Jabir Ahmed',
            contribution: '5,000 Tk.',
            message: 'I am incredibly proud to support this meaningful initiative. It’s inspiring to see how everyone is working together to make a real difference in people’s lives. Together, we can achieve so much more!',
            location: 'Dhaka, Bangladesh',
            color: 'bg-gradient-to-r from-indigo-100 via-purple-200 to-pink-100',
            image: 'https://i.ibb.co.com/j6t83bZ/review-1.jpg',
        },
        {
            name: 'Kabir Hossain',
            contribution: '3,200 Tk.',
            message: 'Being part of this project has been truly fulfilling. Every small contribution makes a significant impact. It’s wonderful to know that our efforts are going towards a cause that really matters.',
            location: 'Chittagong, Bangladesh',
            color: 'bg-gradient-to-r from-green-100 via-blue-200 to-purple-200',
            image: 'https://i.ibb.co.com/7gqZN3K/review-3.jpg',
        },
        {
            name: 'Rashidul Islam',
            contribution: '2,500 Tk.',
            message: 'Supporting this cause means a lot to me. I believe in the power of community and collective effort. Together, we can change lives and build a better future for everyone which will impact better.',
            location: 'Sylhet, Bangladesh',
            color: 'bg-gradient-to-r from-yellow-100 via-red-200 to-pink-200',
            image: 'https://i.ibb.co.com/n7pRrm0/review-5.jpg',
        },
    ];

    return (
        <Container>
            <section className=" pt-5 pb-12 md:pb-16 ">
                <div className="text-center">
                    <Zoom triggerOnce duration={2000}>
                        <div className="font-sans text-center mb-8 md:mb-12">
                            <h1 className="font-semibold text-[#374151] dark:text-white text-3xl md:text-4xl  mb-2 md:mb-4">Our Generous Supporters</h1>
                            <p className="text-sm md:text-base font-sans text-[#1B1A1AB3] dark:text-gray-300 w-full md:w-[60%] mx-auto">We are truly grateful for the selfless contributions of our supporters. Their dedication helps us bring hope to those who need it most. Thank you for making a real difference in our mission.</p>
                        </div>
                    </Zoom>
                    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                        {contributors.map((contributor, index) => (
                            <Fade key={index} direction='up' triggerOnce>
                                <div
                                    className={`p-3 lg:p-4 rounded-xl shadow-x duration-500 transition-all transform hover:scale-105 hover:shadow-2xl ${contributor.color} text-gray-800 flex flex-col`}
                                >
                                    <div className="flex items-center justify-center mb-6">
                                        <img
                                            src={contributor.image}
                                            alt={contributor.name}
                                            className="w-16 h-16 rounded-full object-cover"
                                        />
                                        <div className="ml-6 text-left">
                                            <h3 className="text-2xl font-semibold">{contributor.name}</h3>
                                            <p className="text-lg text-gray-700 opacity-80"><span className='font-medium'>Contribution:</span> {contributor.contribution}</p>
                                            <p className="text-sm text-gray-500">{contributor.location}</p>
                                        </div>
                                    </div>
                                    <p className="lg:text-lg italic text-gray-600 flex-grow">{`"${contributor.message}"`}</p>
                                    <div className="flex justify-center mt-4">
                                        <button className="bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition-all">Thank You</button>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default TopContributorsSection;
