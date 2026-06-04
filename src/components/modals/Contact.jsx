import '../../styles/contact.css'

const Contact = () => {
    return (
        <div className='mail'>
            <h2>yayy mail!</h2>
            <p>
            the easiest way to contact me is through email! i don't really check my social media messages, so please direct questions to my email instead 👍
            </p>
            <div className="mail-img">
                <img src="/images/me.png" alt="" />
            </div>
            <p>email me at: <span className="mail">godd3101@gmail.com</span></p>
            <p>or press the button below to open your mail app</p>
            <button className="open-mail">send me an email</button>
        </div>
    )
}

export default Contact
