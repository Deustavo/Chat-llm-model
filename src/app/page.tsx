import PhillPointing from "@/assets/phill/v4.png"

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full relative">
        <img
          src={PhillPointing.src}
          alt="Phill"
          className="w-full absolute"
          style={{ top: '10vw', left: '3vw' }}
        />
      </div>
      <div
        className="flex flex-col items-center justify-center w-full"
        style={{ height: '80vh' }}
      >
        <div className="flex flex-col items-center justify-center w-full">
          <h2 style={{ fontSize: '16vw', marginBottom: '-5vw' }}>Phill</h2>
          <h3 style={{ fontSize: '2.4vw' }}>Seu assistente de investimentos</h3>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}
