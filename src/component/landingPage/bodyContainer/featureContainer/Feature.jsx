import React from 'react'
import './Feature.css'
export default function Feature() {
    return (
        <div id='landingFeature'style={{margin:"5% 0%"}}>
            <h1 className='text-center '><span className='m-0 FeatureHeader FeaturehalfUnderline'>Discover Powerful Features</span></h1>
            <div className="featureBody">
                <div className="featureIcon">
                    <div id="group-1">
                        <div className="scheduling-feature"><img className="featureImageStyle" src="/icons/infy-scheduling.png" alt="" /></div>
                        <div className="fileSharing-feature"><img className="featureImageStyle" src="/icons/infy-call.png" alt="" /></div>
                    </div>
                    <div id="group-2">
                        <div className="security-feature"><img className="featureImageStyle" src="/icons/infy-fileSharing.png" alt="" /></div>
                        <div className="calling-feature"><img className="featureImageStyle" src="/icons/infy-secure.png" alt="" /></div>
                    </div>
                    <div className="ai-feature"><img className='botFeatureImageStyle' src="/icons/infy-bot.png" alt="" /></div>
                </div>
                <div className="featureDiscription">
                    <p className='hero-disc'>InfyChat the ultimate messaging platform designed to boasts a myriad of innovative features that cater to your diverse messaging needs, ensuring seamless, secure, and personalized interactions with friends, family, and colleagues.</p>
                    <ul>
                        <li> Schedule your messages for later delivery.</li>
                        <li>Utilize intelligent features for better text messaging experience.</li>
                        <li> Enable encryption on specific chats for enhanced privacy.</li>
                        <li>Effortlessly share files with advanced features.</li>
                        <li> Ensure complete privacy with end-to-end encryption.</li>
                        <li>Enjoy a comprehensive set of features for a normal chat application.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
