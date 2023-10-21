import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="header">
        <h1>Catsoberfest</h1>
      </div>
      <div className="imageaccueil">
        <Image
          src="/catgriffe.gif"
          width={500}
          height={500}
          alt="gif d'un chat sur le dos"
        />
        <Image
          src="/welcome.png"
          width={663}
          height={182}
          alt="bandeau welcome"
          className="welcome"
        />
      </div>
    </main>
  );
}
