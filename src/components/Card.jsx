import { Button } from './Button'
import styles from './Card.module.css'

export const Card = ({init}) => {
    return (
        <div className={styles.area}>
            <div className={styles.innerdiv}>
                <div><p>{init.date}</p></div>
                <div><Button>{init.case}</Button></div>
                <h1>{init.type}</h1>
                <h1>{init.payment}</h1>
                <div><p>{init.icon}</p></div>
            </div>
           

        </div>
    )
}