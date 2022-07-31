import sayaImage from "../assets/sayaImage.png";
import holoImage from "../assets/holoImage.png";
import Queen from "../assets/Queen.png";
import Nature from "../assets/Nature.png";

export default function CharInfo() {
  const characters = [
    {
      name: "Saya Larona",
      image: sayaImage,
      rankImage: Queen,
      title: "Queen Guru",
      discord: "Shadoe#1684",
    },
    {
      name: "Holo Tales",
      image: holoImage,
      rankImage: Nature,
      title: "Nature's Guru",
      discord: "HoloTales#0001",
    },
  ];

  return (
    <div className="section" id="Meet us">
      <h2 className="section-header">Come Meet Us!</h2>
      <span className="section-subheader">Jenova @ Shiro, W18 P24</span>
      <section className="card-container">
        {characters.map((char) => (
          <div className="card">
            <img className="rank-logo" src={char.rankImage} alt="rank logo" />
            <h2 className="card-header">{char.name}</h2>
            <img className="card-image" src={char.image} alt="character" />
            <h3 className="card-title">{char.title}</h3>
            <h4 className="discord">Discord: {char.discord}</h4>
          </div>
        ))}
      </section>
    </div>
  );
}
