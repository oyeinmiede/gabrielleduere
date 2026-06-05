import '../../styles/fun-stuff.css'

const FunStuff = () => {

    const getThemedImage = (base) => {
        const theme =
            document.documentElement.getAttribute('data-theme') || 'light'
        return `/images/${base}_${theme}.png`
    }

    return (
        <div className="app fun-stuff">

            {/* HEADER */}
            <div className="fun-header">
                <div className="mushroom-anchor">
                    <img src="/images/mushroom.png" alt="mushroom" />
                </div>

                <div className="fun-title">
                    <h2>hey there! :)</h2>
                    <p>things I’ve built, joined, and been part of</p>
                </div>
            </div>

            <hr />

            {/* OLD WEBSITES */}
            <section className="fun-section">
                <h3>old portfolio websites</h3>

                <div className="grid-cards">

                    <div className="card">
                        <img
                            src={getThemedImage('portfolio-v1')}
                            alt="portfolio v1"
                        />

                        <div className="card-content">
                            <h4>Portfolio v1</h4>
                            <p>
                                My earliest attempt at a personal site — pure HTML/CSS,
                                focused on layout experimentation and typography hierarchy.
                            </p>

                            <a href="https://gabbie-portfolio.netlify.app" target="_blank">
                                view live
                            </a>
                        </div>
                    </div>

                    <div className="card">
                        <img
                            src={getThemedImage('portfolio-v2')}
                            alt="portfolio v2"
                        />

                        <div className="card-content">
                            <h4>Portfolio v2</h4>
                            <p>
                                React-based redesign introducing components, routing ideas,
                                and early UI system thinking.
                            </p>

                            <a href="https://gabrielled.netlify.app" target="_blank">
                                view live
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            <hr />

            {/* EXTRACURRICULARS */}
            <section className="fun-section">
                <h3>extracurriculars</h3>

                <div className="stack-cards">

                    <div className="detail-card">
                        <img src="/images/wave.png" alt="WAVE" />
                        <div className="detail-content">
                            <h4>WAVE</h4>
                            <p>
                                A Women in Tech initiative centered on storytelling, design thinking, and creative digital expression through collaboration and community projects.
                            </p>
                            <div className="meta">
                                <span>Role: Technical Lead</span>
                                <span>Focus: Women in Tech</span>
                            </div>
                            <a href="https://www.instagram.com/wave.techh?igsh=MTRxM2RpNGtwOHFpaw==">learn more</a>
                        </div>
                    </div>

                    <div className="detail-card">
                        <img src="/images/tedx.png" alt="TEDx" />
                        <div className="detail-content">
                            <h4>TEDx Volunteer</h4>
                            <p>
                                Supported event coordination, speaker preparation,
                                and stage logistics for a TEDx university event.
                            </p>
                            <div className="meta">
                                <span>Role: Volunteer</span>
                                <span>Focus: Events / Welfare</span>
                            </div>
                            <a href="https://www.instagram.com/tedx.landmarkuniversity?igsh=MWs3NmtoaXZvcXU5cw==">event page</a>
                        </div>
                    </div>

                    <div className="detail-card">
                        <img src="/images/cowrywise.png" alt="Cowrywise" />
                        <div className="detail-content">
                            <h4>Cowrywise Ambassador</h4>
                            <p>
                                Promoted financial literacy among students and encouraged
                                savings culture through campus activations.
                            </p>
                            <div className="meta">
                                <span>Role: Campus Ambassador</span>
                                <span>Focus: Finance education</span>
                            </div>
                            <a href="https://www.instagram.com/cowrywise?igsh=MWdsNmh1bnZ2YmQxdQ==" target="_blank">
                                cowrywise
                            </a>
                        </div>
                    </div>

                    <div className="detail-card">
                        <img src="/images/gdg.png" alt="GDG" />
                        <div className="detail-content">
                            <h4>Google Developer Group</h4>
                            <p>
                                Participated in developer meetups, workshops,
                                and community-led learning sessions around web technologies.
                            </p>
                            <div className="meta">
                                <span>Role: Member</span>
                                <span>Focus: Software development</span>
                            </div>
                            <a href="https://www.instagram.com/gdgoc.lmu?igsh=ajhvZG91a3Vwd3Vy" target="_blank">
                                gdg community
                            </a>
                        </div>
                    </div>

                    <div className="detail-card">
                        <img src="/images/htsi.png" alt="HTSI" />
                        <div className="detail-content">
                            <h4>HTSI</h4>
                            <p>
                                A hands-on EDS practical initiative focused on large-scale production and printing, including custom cups, banners, and textile embroidery, bridging technical training with real-world manufacturing.
                            </p>
                            <div className="meta">
                                <span>Role: Contributor</span>
                                <span>Focus: Applied technology</span>
                            </div>
                            <a href="#">details</a>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default FunStuff