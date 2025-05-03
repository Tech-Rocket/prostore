import Image from "next/image";
import loader from "@/public/assets/loader.gif";

export default function LoadingPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Image src={loader} alt="loading..." height={100} width={100} />
    </div>
  );
}
