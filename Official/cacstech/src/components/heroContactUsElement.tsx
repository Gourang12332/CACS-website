export default function HeroContactUs() {
  return (
    <div
      className="bg-cover bg-center w-full h-[20rem] bg-no-repeat flex flex-col justify-end px-6 md:px-16 lg:px-64"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/crowd-people-city-street-blurred-background-people-walking-city-street_919279-456.jpg')",
      }}
    >
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div className="text-white w-full p-4 md:p-6">
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold">Reach Out to Us</p>
          <p className="text-gray-200 text-lg md:text-xl lg:text-2xl">
            We're here to help you
          </p>
        </div>
      </div>
    </div>
  );
}
