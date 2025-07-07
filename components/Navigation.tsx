import Image from "next/image";

export default function () {
  return (
    <nav>
      <Image
        src={"/logo.png"}
        alt={"My Travel Blog"}
        width={300}
        height={100}
      />
    </nav>
  );
}
