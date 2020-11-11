import React from 'react'
import SocialMediaButton from '../../../portfolio/social_media_button/SocialMediaButton'
export default function ContactInformation() {


    return (
        <div className="contact-information">
            <h4>Contact information</h4>
            <div className="content">
                <section>
                    <h6 className="heading o-6 SegoeUI-font regular">PHONE</h6>
                    <h6 className="Consolas-font regular">+852 92053876</h6>
                </section>
                <section>
                    <h6 className="heading o-6 SegoeUI-font regular">EMAIL</h6>
                    <h6 className="Consolas-font regular">meiskna999@gmail.com</h6>
                </section>
                <section>
                    <h6 className="heading o-6 SegoeUI-font regular">Social Medias</h6>
                    <div className="follow-me-social-medias">
                        <SocialMediaButton mediaName="facebook"></SocialMediaButton>
                        <SocialMediaButton mediaName="github"></SocialMediaButton>
                    </div>

                </section>
            </div>
        </div>
    )
}
