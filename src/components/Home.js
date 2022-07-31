import fcMain from "../assets/FC_Main.png";

export default function Home() {
  return (
    <div id="Home">
      <img className="section-image" src={fcMain} alt="free company" />
      <section className="section">
        <h2 className="section-header">About Us!</h2>
        <p className="section-content">
          We are a small FC looking to get likeminded individuals that just want
          a place to chill and do content together with. We have people ranging
          from casual to hardcore, but our main goal is to have a social
          experience where all can enjoy their time playing this game together
          :D
        </p>
      </section>
    </div>
  );
}
