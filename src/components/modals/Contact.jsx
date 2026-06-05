import '../../styles/contact.css'

const Contact = () => {

    const email = "godd3101@gmail.com"

    return (
        <div className="mail">

            <h2>yayy mail!</h2>

            <p>
                the easiest way to contact me is through email!
                i don't really check my social media messages,
                so please direct questions to my email instead 👍
            </p>

            <div className="mail-img">
                <img src="/images/me.png" alt="Gabrielle" />
            </div>

            <p>
                email me at:{' '}
                <a
                    href={`mailto:${email}`}
                    className="mail-link"
                >
                    {email}
                </a>
            </p>

            <p>
                or press the button below to open your mail app
            </p>

            <a
                href={`mailto:${email}`}
                className="open-mail"
            >
                send me an email
            </a>

        </div>
    )
}

export default Contact