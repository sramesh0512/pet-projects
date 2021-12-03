const Section = (props) => {
    return (
        <section className={`section ${props.styles}`}>
            <div className="mx-auto container flex flex-wrap">{props.children}</div>
        </section>
    );
}

export default Section;