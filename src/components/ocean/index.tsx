import { Wave } from "../wave-svg"
import atlanticSalmon from "../../assets/atlantic-salmon.png"
import manatee from "../../assets/manatee.png"
import stripedBass from "../../assets/striped-bass.png"
import staghornCoral from "../../assets/staghorn-coral.png"
import europeanPilChard from "../../assets/european-pilchard.png"
import polarBear from "../../assets/polar-bear.png"
import barramundi from "../../assets/barramundi.png"
import clownFish from "../../assets/clown-fish.png"
import velvetCrab from "../../assets/velvet-crab.png"
import blueTang from "../../assets/blue-tang.png"
import atlanticCod from "../../assets/atlantic-cod.png"
import spinyDogFish from "../../assets/spiny-dogfish.png"


import styles from './styles.module.scss'

export const Ocean = () => {
    return (
        <Wave>
            <div className={styles.ocean_content}>
                <OceanItem img={atlanticSalmon} title="Atlantic Salmon" />
                <OceanItem img={manatee} title="Manatee" />
                <OceanItem img={stripedBass} title="Striped Bass" />
                <OceanItem img={staghornCoral} title="Staghorn Carol" />
                <OceanItem img={europeanPilChard} title="European Pilchard" />
                <OceanItem img={polarBear} title="Polar Bear" />
                <OceanItem img={barramundi} title="barramundi" />
                <OceanItem img={clownFish} title="clown fish" />
                <OceanItem img={velvetCrab} title="velvet Crab" />
                <OceanItem img={blueTang} title="blue tang" />
                <OceanItem img={atlanticCod} title="atlantic Cod" />
                <OceanItem img={spinyDogFish} title="spiny Dog Fish" />

            </div>
        </Wave>
    )
}


const OceanItem = ({ img, title }: { img: string, title: string }) => {
    return (
        <div className={styles.ocean_item}>
            <img className={styles.item_img} src={img} alt="" />
            <h2 className={styles.item_title}>{title}</h2>
        </div>
    )
}