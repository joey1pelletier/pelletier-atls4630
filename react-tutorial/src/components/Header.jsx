import globeImg from '../assets/globe.png'

export default function Header() {
    return (
        <header>
            <img src={globeImg} alt="pic of globe" />
            <h1>my travel journal.</h1>
        </header>
    )
}