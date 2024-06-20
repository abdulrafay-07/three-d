import Text from "@/componenets/homepage/Text";

const Home = () => {
  return (
    <div className="min-h-screen text-white bg-black flex flex-col justify-evenly items-center font-mono">
      <div>
        Logo
      </div>
      <div>
        Spinner
      </div>
      <div>
        <Text/>
      </div>
    </div>
  )
}

export default Home;