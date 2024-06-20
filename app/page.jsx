import Logo from "@/components/homepage/Logo";
import Spinner from "@/components/homepage/Spinner";

const Home = () => {
  return (
    <div className="min-h-screen text-white bg-black flex flex-col justify-evenly items-center font-mono gap-y-4">
      <div>
        <Logo />
      </div>
      <div>
        <Spinner />
      </div>
      <div>
        Text
      </div>
    </div>
  )
}

export default Home;