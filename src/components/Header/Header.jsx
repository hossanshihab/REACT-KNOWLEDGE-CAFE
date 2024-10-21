import profile from "../../../public/images/profile.png";
const Header = () => {
  return (
    <header className="w-11/12 mx-auto">
        <div className="flex justify-between 
        items-center p-4 border-b-2">
        <h1 className="text-5xl font-bold"
        >Knowledge Cafe</h1>
        <img src={profile} alt="" />
        </div>
    </header>
  );
};

export default Header;
