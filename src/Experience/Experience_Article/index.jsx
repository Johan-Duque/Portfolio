import styles from './Experience_Article.module.css'

function Experience_Article ({Title, Content}) {
    return (
        <div class={styles.timeline_content}>
            <div class={styles.content}>
                <h3>{Title}</h3>
                    <p>{Content}</p>
                </div>
            </div>
    )
}

export { Experience_Article }
 