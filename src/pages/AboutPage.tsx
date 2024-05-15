import './styles/about.css'

export default function AboutPage() {
    return (
        <div className='group-section'>
            <AboutComponent />
            <ValuesComponent />
            <StoriesComponents />
            <TeamsComponent />
        </div>
    )
}

const AboutComponent = () => {
    return (
        <>
            <section className="about-container">
                <article className="detail-item">
                    <div className="detail-text-container">
                        <h2 className='section-header'>
                            About Ecoyaan                        
                        </h2>
                        <span className='detail-description'>
                            <p className='detail'>
                            At Ecoyaan, we are more than just a platform. 
                            Our goal is to build a community of eco-conscious people who share a common vision and passion for a more sustainable world.
                            </p>
                            <p className='detail'>
                            We recognize that sustainability is a journey (as the Sanskrit word “yaan” suggests). 
                            To keep you motivated on this journey, on our platform and our social media pages, you can find:
                            </p>
                            <ul className='list'>
                                <li className='list-item'>Tips and tricks to adopt a more eco-friendly and low-waste lifestyle</li>
                                <li className='list-item'>Videos, posts, and quizzes on climate change and sustainability</li>
                                <li className='list-item'>Events and pledges that invite you to adopt a more sustainable lifestyle</li>
                            </ul>
                        </span>
                    </div>
                    <div className="detail-media-container">
                        <img className='detail-image media-hover' src='https://ecoyaan.com/images/about-us-sustainable-lifestyle-partner.png' />
                    </div>
                </article>
            </section>
        </>
    )
}

const ValuesComponent = () => {
    return (
        <>

            <h2 className='section-header' style={{ padding: '0 3.25rem' }}>
                Our Values                        
            </h2>
            <section className='values-container'>
                <article className='value-item'>
                    <div className="value-image-container">
                        <img className='value-image media-hover' src="https://ecoyaan.com/images/Trust.png" alt="" />
                    </div>
                    <div className="value-text-container">
                        <h3 className='value-header'>Trust</h3>
                        <span className='value-description'>
                            <p className='value'>
                        We value the trust of our community. 
                        We strive to be transparent and honest in everything we do, from the content we share today to sourcing our products in the future.
                            </p>
                        </span>
                    </div>
                </article>
                <article className='value-item'>
                    <div className="value-image-container">
                        <img className='value-image media-hover' src="https://ecoyaan.com/images/Authenticity.png" alt="" />
                    </div>
                    <div className="value-text-container">
                        <h3 className='value-header'>Authenticity</h3>
                        <span className='value-description'>
                            <p className='value'>
                        We are genuine in our mission to promote sustainability and environmental awareness. 
                        An authentic community of eco-conscious people can inspire each other on the journey towards sustainability. 
                            </p>
                        </span>
                    </div>
                </article>
                <article className='value-item'>
                    <div className="value-image-container">
                        <img className='value-image media-hover' src="https://ecoyaan.com/images/Impact.png" alt="" />
                    </div>
                    <div className="value-text-container">
                        <h3 className='value-header'>Impact</h3>
                        <span className='value-description'>
                            <p className='value'>
                        We measure our success by our impact on the planet and our community. 
                        We aim to empower our sellers and customers to make responsible choices that benefit their well-being and the well-being of others. 
                            </p>
                        </span>
                    </div>
                </article>
                <article className='value-item'>
                    <div className="value-image-container">
                        <img className='value-image media-hover' src="https://ecoyaan.com/images/FunAndEngaging.png" alt="" />
                    </div>
                    <div className="value-text-container">
                        <h3 className='value-header'>Fun & Engaging</h3>
                        <span className='value-description'>
                            <p className='value'>
                            Moving towards a sustainable lifestyle and the constant news around climate change can be stressful. 
                            We aim to inject fun and creativity into everything we do, from designing our products to providing services.
                            </p>
                        </span>
                    </div>
                </article>
            </section>
        </>
    )
}

const StoriesComponents = () => {
    return (
        <>
            <h3 className='section-header' style={{ padding: '0 3.25rem' }}>Our Story</h3>
            <section className="stories-container">
                <article className='story-item'>
                    <div className="story-image-container">
                        <img className='story-image media-hover' src="https://ecoyaan.com/images/about-us-founding-team-01.png" alt="" />
                    </div>
                    <div className="story-text-container">
                        <span className='story-description'>
                            <p className='story'>
                            We started Ecoyaan after watching an episode of “Our Planet II”, where we saw the devastating impact of plastic pollution and climate change on the albatross birds. 
                            That moment ignited our mission.
                            </p>
                            <p className='story'>
                            Our research suggests that many Indians understand global warming, yet access to sustainable practices and products remains limited. 
                            We also noticed that there is a lack of support for eco-friendly businesses.
                            </p>
                        </span>
                    </div>
                </article>
                <article className='story-item'>
                    <div className="story-image-container">
                        <img className='story-image media-hover' src="https://ecoyaan.com/images/about-us-founding-team-02.png" alt="" />
                    </div>
                    <div className="story-text-container">
                        <span className='story-description'>
                            <p className='story'>
                            We created Ecoyaan to connect consumers, businesses, and sustainability experts. We want to make it easy and convenient for people to access eco-friendly products and services, learn and share best practices, and support sustainability initiatives.
                            </p>
                            <p className='story'>
                            As founders, we are not perfect, but we are passionate. We believe that every small step matters. Join us and be a part of the Ecoyaan community — together, we'll make a difference.
                            </p>
                        </span>
                    </div>
                </article>
            </section>
        </>
    )
}

const TeamsComponent = () => {
    return (
        <>
            <h3 className='section-header' style={{ padding: '0 3.25rem' }}>Meet the Team</h3>
            <section className="teams-container">
                <article className='team-item'>
                    <div className="team-image-container">
                        <img className='team-image media-hover' src="https://ecoyaan.com/images/about-us-social-media-team-01.png" alt="" />
                    </div>
                    <div className="team-text-container">
                        <span className='team-description'>
                            <h4 className='team-member-name'>SHRUTHI</h4>
                            <h5 className='team-member-profile'>SOCIAL MEDIA</h5>
                            <p className='team-member-desc'>
                                Shruthi is in charge of our Instagram. She is a practising Vegan and cares deeply about sustainability. Follow her small business 
                                <a href="https://www.instagram.com/soulfullymade_crafts/"> here</a>  
                            </p>
                        </span>
                    </div>
                </article>
                <article className='team-item'>
                    <div className="team-image-container">
                        <img className='team-image media-hover' src="https://ecoyaan.com/images/about-us-social-media-team-02.png" alt="" />
                    </div>
                    <div className="team-text-container">
                        <span className='team-description'>
                            <h4 className='team-member-name'>URMIL</h4>
                            <h5 className='team-member-profile'>SOCIAL MEDIA</h5>
                            <p className='team-member-desc'>
                                Urmil creates engaging content for us. She runs her own sustainable apparel store with her sister and advocates for slow fashion. Check out her business                            
                                <a href="https://www.instagram.com/ferozi.conscious/"> here</a>  
                            </p>
                        </span>
                    </div>
                </article>
                <article className='team-item'>
                    <div className="team-image-container">
                        <img className='team-image media-hover' src="https://ecoyaan.com/images/about-us-product-team-01.png" alt="" />
                    </div>
                    <div className="team-text-container">
                        <span className='team-description'>
                            <h4 className='team-member-name'>DIVYA</h4>
                            <h5 className='team-member-profile'>UX DESIGN</h5>
                            <p className='team-member-desc'>
                            Divya creates user-friendly and engaging interfaces for our platform. Check out more of her work on                            
                                <a href="https://www.behance.net/bodradivya"> Behance</a>  
                            </p>
                        </span>
                    </div>
                </article>
                <article className='team-item'>
                    <div className="team-image-container">
                        <img className='team-image media-hover' src="https://ecoyaan.com/images/about-us-product-team-02.png" alt="" />
                    </div>
                    <div className="team-text-container">
                        <span className='team-description'>
                            <h4 className='team-member-name'>PRASHANITH</h4>
                            <h5 className='team-member-profile'>ENGINEERING</h5>
                            <p className='team-member-desc'>
                                Prashanith is our front-end engineer, who brings the UX designs to life                            
                            </p>
                        </span>
                    </div>
                </article>
                <article className='team-item'>
                    <div className="team-image-container">
                        <img className='team-image media-hover' src="https://ecoyaan.com/images/about-us-product-team-03.png" alt="" />
                    </div>
                    <div className="team-text-container">
                        <span className='team-description'>
                            <h4 className='team-member-name'>SAI ABHILASH</h4>
                            <h5 className='team-member-profile'>ENGINEERING</h5>
                            <p className='team-member-desc'>
                            Sai Abhilash is our back-end engineer, who manages and optimises the infrastructure and logic of our platform                        </p>
                        </span>
                    </div>
                </article>
                <article className='team-item'>
                    <div className="team-image-container">
                        <img className='team-image media-hover' src="https://ecoyaan.com/images/favicon.png" alt="" />
                    </div>
                    <div className="team-text-container">
                        <span className='team-description'>
                            <h4 className='team-member-name'>???</h4>
                            <h5 className='team-member-profile'>TEAM ECOYAAN</h5>
                            <p className=''>
                                This spot awaits you. Check out our                           
                                <a href="https://www.instagram.com/soulfullymade_crafts/"> open positions</a>  
                            </p>
                        </span>
                    </div>
                </article>
            </section>
        </>
    )
}