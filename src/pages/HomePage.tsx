import { useEffect, useRef, useState } from 'react'
import './styles/home.css'

const images = [
    'https://ecoyaan.com/images/carousel-1.png',
    'https://ecoyaan.com/images/carousel-2.png',
    'https://ecoyaan.com/images/carousel-3.png'
]

const data = [
    {
        heading: 'Buy Less, Buy Better!',
        text: 'Authentic source of truth for your sustainability needs.',
        button: {
            name: 'About Us',
            url: '/about'
        }
    },
    {
        heading: 'Follow us on Instagram',
        text: 'For climate news, lifestyle tips, & updates',
        button: {
            name: 'Follow Us',
            url: 'https://www.instagram.com/ecoyaan/'
        }
    },
    {
        heading: 'Are you a business that truly cares about sustainability?',
        text: 'We would love to work with you',
        button: {
            name: 'Get In Touch',
            url: '/'
        }
    }
]
export default function HomePage() {
    const imageRef = useRef<HTMLImageElement | null>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
        }, 1e3 * 10)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (imageRef.current) {
            imageRef.current.src = images[currentImageIndex]
        }
    }, [currentImageIndex])

    return (
        <div className='home-container'>
            <section className='slideshow-container'>
                <div className='slideshow'>
                    <img className='slideshow-img' src={images[0]} ref={imageRef} />
                    <SlideshowDetails data={data} index={currentImageIndex}/>
                </div>
                <div className="indicator">
                    {
                        images.map((_, i) => ( <div className={`dot ${currentImageIndex === i ? 'active' : ''}`} onClick={() => setCurrentImageIndex(i)} key={i} /> ))
                    }
                </div>
            </section>
            <section className='details-container'>
                <article className="detail-item">
                    <div className="detail-text-container">
                        <h2 className='detail-header'>
                            Join our community in creating a more sustainable future for everyone
                        </h2>
                        <span className='detail-description'>
                            <p className='detail'>
                                At Ecoyaan, we are more than just a platform. 
                                Our vision is to build an eco-conscious community for people and products.
                            </p>
                            <p className='detail'>
                                Consider us your partner for all things sustainable. 
                                To keep you motivated on the journey, we will provide you with engaging information about climate change, 
                                the latest updates on climate policies and lifestyle tips that you can adopt to reduce your impact on the environment.
                            </p>
                        </span>
                    </div>
                    <div className="detail-media-container">
                        <img className='detail-image media-hover' src='https://ecoyaan.com/images/Impact.png' />
                    </div>
                </article>
                <article className="detail-item">
                    <div className="detail-text-container">
                        <h2 className='detail-header'>
                        Carefully curated Eco-friendly products
                        </h2>
                        <span className='detail-description'>
                            <p className='detail'>
                            We believe that every purchase you make can have a positive 
                            impact on the planet and the future.
                            </p>
                            <p className='detail'>
                            Soon, we will be connecting you with eco-friendly and sustainable products 
                            that are carefully selected based on their environmental and social benefits. 
                            </p>
                        </span>
                    </div>
                    <div className="detail-media-container">
                        <video className='detail-video media-hover' src='https://ecoyaan.com/images/ProductCuration.mp4'/>
                    </div>
                </article>
                <article className="detail-item">
                    <div className="detail-text-container">
                        <h2 className='detail-header'>
                            For businesses that care deeply about sustainability
                        </h2>
                        <span className='detail-description'>
                            <p className='detail'>
                                Do you run a business that is committed to sustainability in every aspect of your work?
                            </p>
                            <p className='detail'>
                                Do you want to showcase your products to an incredible audience of eco-conscious consumers who care?
                            </p>
                        </span>
                    </div>
                    <div className="detail-media-container">
                        <img className='detail-image media-hover' src='https://ecoyaan.com/images/OurStory4.png' />
                    </div>
                    {/* <>
                        <p className="detail">
                                If yes, then you are the perfect fit for our platform. 
                                Our community appreciates and supports businesses that are transparent, ethical, and innovative in their approach to sustainability. 
                                Contact us today:
                        </p>
                        <button className="button-green">
                                Contact Us
                        </button>
                    </> */}
                </article>
            </section>
        </div>
    )
}

const SlideshowDetails = ({ data, index }: { data: any, index: number }) => {
    const handleClick = (url: string) => window.open(url, url.startsWith('http') ? '_blank' : undefined)
    return (
        <>
            <div className='image-detail-container'>
                <h3>{data[index].heading}</h3>
                <p>{data[index].text}</p>
                <button className='button-green' onClick={() =>handleClick(data[index].button.url)} style={{ borderRadius: '20px' }}>{data[index].button.name}</button>          
            </div>
        </>
    )
}
