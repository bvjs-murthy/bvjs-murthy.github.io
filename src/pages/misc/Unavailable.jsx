
export default function Unavailable() {
    return (
        <div className="board">
            <style>
                {`
                    .unavailable {
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: flex-start;
                        padding: 0;
                        margin: 0;
                    }

                    .unavailable-status {
                        color: var(--text-m);
                        font-family: monospace;
                        font-size: 0.9rem;
                        margin-bottom: 16px;
                    }

                    .unavailable h1 {
                        font-size: 1.6rem;
                        color: var(--text-p);
                    }

                    .unavailable p {
                        max-width: 620px;
                        color: var(--text-s);
                    }

                    .unavailable .intro {
                        font-size: .9rem;
                        margin-bottom: 24px;
                    }

                    .unavailable .source {
                        font-size: 0.9rem;
                        margin-bottom: 24px;
                    }

                    .unavailable a {
                        color: var(--accent);
                        text-decoration: none;
                        font-weight: 600;
                    }

                    .unavailable a:hover {
                        color: var(--accent-h);
                    }

                    .unavailable-footer {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        color: var(--text-m);
                        font-family: monospace;
                        font-size: 0.9rem;
                    }

                    .unavailable-arrow {
                        color: var(--accent);
                    }
                `}
            </style>

            <div className="unavailable">
                <div className="unavailable-status">
                    503 - Service Temporarily Offline
                </div>

                <h1>Still building.</h1>

                <p className="intro">
                    The portfolio isn't ready yet. I'm still working on it.
                </p>

                <p className="source">
                    In the meantime, you can take a look at the source code and
                    follow the development on the{" "}
                    <a
                        href="https://github.com/bvjs-murthy/bvjs-murthy.github.io/tree/forge"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        forge branch
                    </a>.
                </p>

                <div className="unavailable-footer">
                    <span>check back soon.</span>
                </div>
            </div>
        </div>
    )
}