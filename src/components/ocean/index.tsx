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
import leafySea from "../../assets/leafy-sea-dragon.png"
import mahiMahi from "../../assets/mahi-mahi.png"
import flounder from "../../assets/flounder.png"
import spottedBass from "../../assets/spotted-bass.png"
import belugaWhale from "../../assets/beluga-whale.png"
import barnacle from "../../assets/barnacle.png"
import blueFish from "../../assets/blue-fish.png"
import greatBarracuda from "../../assets/great-barracuda.png"
import killerWhale from "../../assets/killer-whale.png"
import queenSnapper from "../../assets/queen-snapper.png"
import pelagicStingray from "../../assets/pelagic-stingray.png"
import seaLion from "../../assets/sea-lion.png"


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
                <OceanItem img={leafySea} title="leafy sea dragon" />
                <OceanItem img={mahiMahi} title="mahi mahi" />
                <OceanItem img={flounder} title="flounder" />
                <OceanItem img={spottedBass} title="spotted bass" />
                <OceanItem img={belugaWhale} title="beluga Whale" />
                <OceanItem img={barnacle} title="barnacle" />
                <OceanItem img={blueFish} title="blue Fish" />
                <OceanItem img={greatBarracuda} title="great Barracuda" />
                <OceanItem img={killerWhale} title="killer whale" />
                <OceanItem img={queenSnapper} title="queen Snapper" />
                <OceanItem img={pelagicStingray} title="pelagic Stingray" />
                <OceanItem img={seaLion} title="sea lion" />

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