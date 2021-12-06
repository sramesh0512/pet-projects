const Section = (props) => {
    return (
        <section className={`section bg-gray-100 flex ${props.styles}`}>
            {props.children}
        </section>
    );
}

export default Section;