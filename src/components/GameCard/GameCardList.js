import Card from "./Card"

const GameCard = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4 md:justify-between lg:justify-evenly mt-10">
            <Card title="Clash Of Clan" img="https://wallpapercave.com/dwp1x/wc1808411.jpg" />
            <Card title="FreeFire" img="https://wallpaperaccess.com/thumb/2411251.jpg" />
            <Card title="BGMI" img="https://wallpaperaccess.com/thumb/6163542.jpg" />
            <Card title="Mobile Legends" img="https://w0.peakpx.com/wallpaper/330/187/HD-wallpaper-blue-mobile-legends-alucard-bruno-gusion-mobile-legends-tigreal-thumbnail.jpg" />
        </div>
    )
}

export default GameCard