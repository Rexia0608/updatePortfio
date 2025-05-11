

const SectionContact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <ul>
                    <li key="contact-intro">
                        <h6 className="text-light fs-1">
                            <span className="text-info fs-1">Get </span>
                             in Touch
                        </h6>
                        <span className="text-light">For any inquiries, please feel free to reach out via the phone number or email address provided below.</span>
                    </li>
                    <li key="contact-phone">
                        <h6 className="text-light fs-5">
                                <span className="text-info fs-4">Phone: </span>
                                0976-453-9803
                                0991-4873-606
                        </h6>
                    </li>
                    <li key="contact-email">
                        <h6 className="text-light fs-5">
                                <span className="text-info fs-4">Email: </span>
                                johnreycejas0608@gmail.com
                        </h6>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default SectionContact;