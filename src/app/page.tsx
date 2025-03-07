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
          <h2 style={{ fontSize: '300px', marginBottom: '-110px' }}>Phill</h2>
          <h3 style={{ fontSize: '44px' }}>Seu assistente de investimentos</h3>
        </div>
        <div className="flex flex-col items-center justify-center w-full ">
          <button
            className="rounded-full text-white py-2 px-6 transform transition-transform duration-300 hover:scale-110"
            style={{
              backgroundColor: 'var(--primary-color)',
              margin: '80px 0px 16px 0px',
              fontSize: '18px',
            }}
          >
            Descubra seu perfil de investidor
          </button>
          <button
            className="transform transition-transform duration-300 hover:scale-110"
            style={{
              color: 'var(--primary-color)',
              fontSize: '18px',
            }}
          >
            Ir direto ao chat
          </button>
        </div>
      </div>
    </div>
  );
}
