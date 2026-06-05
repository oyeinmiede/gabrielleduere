import '../../styles/work.css'
import { FaGithub } from "react-icons/fa"

const Work = () => {

    const tools = ["React", "Vite", "HTML/CSS", "Sass", "Tailwind CSS", "Git/Github"]
    const dev = ["Frontend UI systems", "API integration", "Responsive layouts"]

    const sites = [
        {
            name: "Crowdfunding Product Page",
            desc: "A crowdfunding landing page with modal interactions and dynamic pledge tracking.",
            image: "/images/crowdfunding-page.png",
            link: "https://fm-archive.vercel.app/fm-projects/crowdfunding-product-page-main/",
            git: "https://github.com/oyeinmiede/fm-archive/tree/main/public/fm-projects/crowdfunding-product-page-main"
        },
        {
            name: "Piqr",
            desc: "No stress, no scrolling just instant recommendations that fit your mood for food, film, and fun.",
            image: "/images/piqr.png",
            link: "https://piqr.netlify.app/",
            git: "https://github.com/Gabrielle3101/piqr"
        },
        {
            name: "REST Countries API",
            desc: "A country explorer app using REST API with filtering, search, and theme switching.",
            image: "/images/rest-countries.png",
            link: "https://fm-archive.vercel.app/fm-projects/rest-countries-api-with-color-theme-switcher-master/",
            git: "https://github.com/oyeinmiede/fm-archive/tree/main/public/fm-projects/rest-countries-api-with-color-theme-switcher-master"
        },
        {
            name: "Mange Landing Page",
            desc: "A product landing page showcasing features with structured sections and CTAs.",
            image: "/images/manage-page.png",
            link: "https://fm-archive.vercel.app/fm-projects/manage-landing-page-master/",
            git: "https://github.com/oyeinmiede/fm-archive/tree/main/public/fm-projects/manage-landing-page-master"
        },
    ]

    const picks = [
        {
            title: "FM Archive Page",
            desc: "A personal archive and project showcase inspired by frontend mentor projects. Built with React and featuring a custom desktop-style interface, 60+ projects, and an interactive file-system-inspired experience for exploring my work.",
            image: "/images/fm-archive.png",
            link: "https://fm-archive.vercel.app/",
            git: "https://github.com/oyeinmiede/fm-archive"
        },
        {
            title: "Mortgage Repayment Calculator App",
            desc: "A responsive mortgage calculator that helps users estimate monthly repayments based on loan amount, interest rate, and repayment term. The project focuses on clean form validation, real-time calculations, and presenting financial data in a user-friendly way.",
            image: "/images/mortgage-calc.png",
            link: "https://fm-archive.vercel.app/fm-projects/mortgage-repayment-calculator-main/",
            git: "https://github.com/oyeinmiede/fm-archive/tree/main/public/fm-projects/mortgage-repayment-calculator-main"
        },
        {
            title: "Typing Speed Test",
            desc: "An interactive typing challenge that measures typing speed and accuracy in real time. Features include live WPM calculation, mistake tracking, dynamic text generation, and a clean interface designed to keep users focused on improving their typing performance.",
            image: "/images/typing-test.png",
            link: "https://fm-archive.vercel.app/fm-projects/typing-speed-test-main/",
            git: "https://github.com/oyeinmiede/fm-archive/tree/main/public/fm-projects/typing-speed-test-main"
        }
    ]
    return (
        <div className="app work">

            {/* HEADER */}
            <div className="work-info">
                <p>
                    Accepting work offers via <span className="mail">email</span>
                </p>
                <span className="sub">
                    i do frontend web development. :)
                </span>
            </div>

            <hr />

            {/* TOOLS + DEV */}
            <div className="t-and-d">

                <div className="panel">
                    <h3>TOOLS</h3>
                    <div className="chip-row">
                        {tools.map((t, i) => (
                            <span key={i} className="chip">{t}</span>
                        ))}
                    </div>
                </div>

                <div className="panel">
                    <h3>DEVELOPMENT</h3>
                    <div className="chip-row">
                        {dev.map((d, i) => (
                            <span key={i} className="chip">{d}</span>
                        ))}
                    </div>
                </div>

            </div>

            <hr />

            {/* SITES */}
            <div className="section sites">
                <h3>SITES</h3>

                <div className="grid">
                    {sites.map((s, i) => (
                        <div key={i} className="card">
                            <div className="screenshot"><img src={s.image} alt="" /></div>
                            <h4>{s.name}</h4>
                            <p>{s.desc}</p>

                            <div className="btn-row">
                                <button><a href={s.link}>open</a></button>
                                <button className="icon-btn">
                                    <a href={s.git}><FaGithub /></a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="note">
                    see more on <span className="git"><a href="https://github.com/oyeinmiede">GitHub</a></span>
                </p>
            </div>

            <hr />

            {/* VIDEOGRAPHY */}
            <div className="section">
                <h3>VIDEOGRAPHY</h3>

                <div className="grid">
                    <div className="card video">
                        <div className="screenshot">
                            <img src="/images/vid1.png" alt="" />
                        </div>
                        <p>Behind the scenes camera work</p>
                    </div>

                    <div className="card video">
                        <div className="screenshot">
                            <img src="/images/vid2.png" alt="" />
                        </div>
                        <p>Event coverage & creative shots</p>
                    </div>

                    <div className="card video">
                        <div className="screenshot">
                            <img src="/images/vid3.png" alt="" />
                        </div>
                        <p>Signal checking on Sony</p>
                    </div>

                    <div className="card video">
                        <div className="screenshot">
                            <img src="/images/vid4.png" alt="" />
                        </div>
                        <p>BTS Choir Concert LMU Chapter</p>
                    </div>
                </div>
            </div>

            <hr />

            {/* DEV PICKS */}
            <div className="section">
                <h3>DEVELOPER PICKS</h3>

                <div className="dev-picks">
                    {picks.map((p, i) => (
                        <div key={i} className="card big">
                            <div className="screenshot">
                                <img src={p.image} alt="" />
                            </div>

                            <div className="content">
                                <h4>{p.title}</h4>

                                <p className="long">
                                    {p.desc}
                                </p>

                                <div className="btn-row">
                                    <button><a href={p.link}>visit</a></button>
                                    <button className="icon-btn">
                                    <a href={p.git}><FaGithub /></a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <hr />

            {/* OTHER */}
            <div className="section">
                <h3>OTHER PROJECTS</h3>

                <ul className="list">
                    <li>this website!</li>
                    <li>that's it for now, check my github for more stuff</li>
                </ul>

                <p className="note">
                    See more on <span className="git"><a href="https://github.com/oyeinmiede">GitHub</a></span>
                </p>
            </div>

        </div>
    )
}

export default Work