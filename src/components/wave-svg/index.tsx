import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface IProps {
    children: ReactNode
}

export const Wave = ({ children }: IProps) => {
    return (
        <div className={styles.wave}>
            <div className={styles.center_wave}></div>
            <div className={styles.wave_content}>
                {children}
            </div>
        </div>
    )
}
