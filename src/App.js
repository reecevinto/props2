import "./styles.css";
import { getImageUrl } from "./image";
function Profile({ person, size = 70 }) {
  const imageSrc = getImageUrl(person);
  return (
    <section className="profile">
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={imageSrc}
        alt={person.name}
        width={size}
        height={size}
      />
      <ul>
        <li>
          <b>Profession:</b> {person.Profession}
        </li>
        <li>
          <b>Awards: ={person.Awards.length}</b>({person.Awards.join(", ")})
        </li>
        <li>
          <b>Discovered:</b> {person.Discovered}
        </li>
      </ul>
    </section>
  );
}
export default function Gallery() {
  return (
    <>
      <h1>Notable Scientists</h1>
      <Profile
        person={{
          name: "Maria Sklodowska-Curie",
          imageId: "SzV5sdG",
          Profession: "Physicist and Chemist",
          Awards: [
            "Noble Prize in Physics",
            "Nobel Prize in Chemistry",
            "Devy Medal",
            "Matteucci Medal"
          ],

          Discovered: "polonium(chemical element)"
        }}
      />
      <Profile
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
          Profession: "geochemist",
          Awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
          Discovered: "a method for measuring carbon dioxide in seawater"
        }}
      />
    </>
  );
}
