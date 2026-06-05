import { useContext, useState } from 'react'
import { SoundContext } from '../../context/SoundContext'
import '../../styles/faq.css'

const FAQ = () => {
    const { play } = useContext(SoundContext)
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: "What kind of websites do you build?",
            answer:
                "I primarily build responsive frontend web applications, portfolios, landing pages, dashboards, and interactive web experiences using React and modern frontend technologies."
        },
        {
            question: "Do you work with designs provided by clients?",
            answer:
                "Yes. I can translate existing Figma designs into responsive websites, or collaborate on the design process if needed."
        },
        {
            question: "Do you only work on frontend projects?",
            answer:
                "Frontend development is my primary focus, but I can integrate APIs and work alongside backend systems when required."
        },
        {
            question: "What kind of videography work do you do?",
            answer:
                "I enjoy event coverage, creative storytelling, behind-the-scenes content, and projects that allow visual experimentation."
        },
        {
            question: "Do you edit videos too?",
            answer:
                "No. I do not know how to edit yet."
        },
        {
            question: "How do you balance development and school?",
            answer:
                "Carefully. Being a Computer Science student means I'm constantly learning, but it also helps me stay disciplined with project planning and deadlines."
        },
        {
            question: "What are you studying?",
            answer:
                "I'm currently pursuing a Bachelor of Science in Computer Science at Landmark University."
        },
        {
            question: "Are you available for freelance work?",
            answer:
                "Yes. If a project aligns with my skills and schedule, I'm always open to discussing opportunities."
        },
        {
            question: "What's with the desktop-style website?",
            answer:
                "I love playful web experiences. This site combines my appreciation for early internet aesthetics, creative interfaces, and frontend engineering."
        },
        {
            question: "amala?",
            answer:
                "yea :)"
        }
    ]

    const toggle = (index) => {
        const isOpen = openIndex === index

        play('drawer')
        setOpenIndex(isOpen ? null : index)
    }

    return (
        <div className="faq-page">
            <div className="faq-list">

                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index

                    return (
                        <div
                            key={index}
                            className={`faq-item ${isOpen ? 'open' : ''}`}
                        >
                            <div
                                className="faq-question"
                                onClick={() => toggle(index)}
                            >
                                {faq.question}
                            </div>

                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default FAQ