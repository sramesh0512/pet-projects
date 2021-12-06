const Header = (props) => {
    return (
        <header className="w-full py-5 bg-black text-indigo-50 font-bold text-lg">
            <div className="container standalone flex mx-auto w-full justify-between">
                <h1>LevelOps</h1>
                <div className="flex items-center font-normal">
                    <span className="mr-4">Hello User</span>
                    <img className="w-8 h-8" src="https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey-300x300.png" alt="user"></img>
                </div>
            </div>
        </header>
    );
}

export default Header;