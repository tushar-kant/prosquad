import Card from "./Card"

const GameCard = () => {
    return (
        <div className="flex flex-col lg:flex-row ml-20 mt-10 lg:justify-evenly">
            <Card title="Valorant" img="https://res.cloudinary.com/dhtoottz0/image/upload/v1643562316/witcher_c6x4xa.jpg" />
            <Card title="FreeFire" img="https://res.cloudinary.com/dhtoottz0/image/upload/v1643562306/ds3_mtntnz.jpg" />
            <Card title="BGMI" img="https://res.cloudinary.com/dhtoottz0/image/upload/v1643562304/Cyberpunk_2077_usabqh.jpg" />
            <Card title="Mobile Legends" img="https://res.cloudinary.com/dhtoottz0/image/upload/v1643562388/image_ir1vlc.jpg" />
        </div>
    )
}

export default GameCard