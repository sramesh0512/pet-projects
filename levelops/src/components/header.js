import Section from "./section";

const Header = (props) => {
    return (
        <header className="w-full py-5 bg-black text-indigo-50 font-bold text-lg">
            <div className="container standalone flex mx-auto w-full">
                <h1>LevelOps</h1>
            </div>
        </header>
    );
}

export default Header;