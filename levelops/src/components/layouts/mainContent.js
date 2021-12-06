const MainContent = (props) => {
    return (
        <div className="main-content bg-gray-100">
            <div className="container mx-auto flex w-full">
                {props.children}
            </div>
        </div>
    );
}

export default MainContent;