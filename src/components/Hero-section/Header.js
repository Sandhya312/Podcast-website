

const Header = () =>{

    return <>
      <nav className=" flex p-5 text-white">
        <div className=" w-3/5 flex justify-start ps-40 ">
            <h4 className="font-medium">Logo</h4>
        </div>
        <div className=" w-2/5 flex justify-evenly">
            <h4>About</h4>
            <h4>Pricing</h4>
            <h4>Review</h4>

        </div>
      </nav>
    </>
};

export default Header;