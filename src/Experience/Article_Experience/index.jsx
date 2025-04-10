import styles from './Article_Experience.module.css'

function Article_Experience ({Title, Content}) {
    return (
        <div class={styles.timeline_content}>
            <div class={styles.content}>
                <h3>{Title}</h3>
                    <p>{Content}</p>
                </div>
            </div>
    )
}

export { Article_Experience }
 