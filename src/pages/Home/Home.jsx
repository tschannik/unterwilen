import "./Home.css";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div class="home">
        <h2>Über das Quartier</h2>
        <p>
          Das Quartier Unterwilen liegt an der westlichen Gemeindegrenze zu
          Weggis. Am aussichtsreichen Sonnenhang wohnen rund 100 Personen, die
          Hälfte davon mit festem Wohnsitz in Vitznau. Zum Quartier gehört ein
          kleiner Badeplatz am See.
        </p>
        <p>
          Die IGU – Interessengemeinschaft Unterwilen wurde am 8. Juni 2007
          gegründet und nimmt als Quartierverein folgende Aufgaben wahr:
        </p>
        <ul>
          <li>
            Förderung der sozialen Kontakte durch gesellschaftliche Anlässe
          </li>
          <li>
            Wahrung der Interessen gegenüber der Gemeinde und Öffentlichkeit
          </li>
          <li>Verwaltung und Unterhalt des Badeplatzes</li>
        </ul>
        <h2>Lageplan</h2>
        <img
          src="Lageplan_IG_Unterwilen.png"
          alt="Lageplan IG Unterwilen"
        ></img>
        <img src="Unterwilen.jpg" alt="Sicht auf die Unterwilen"></img>
      </div>
    </>
  );
};

export default Home;
