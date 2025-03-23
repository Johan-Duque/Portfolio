import styles from './Sections.module.css'

function Sections ({id, children}) {
    return (
        <section className={styles.Sections} id={id}>
            {children}
        </section>
    )
}

export { Sections }