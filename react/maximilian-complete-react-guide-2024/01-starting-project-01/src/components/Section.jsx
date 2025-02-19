export default function Section({ title, children, ...rootProps}) {
    return (
        <section {...rootProps}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}