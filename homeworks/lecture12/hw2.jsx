const Layout = () => {
    return (
        <div style={{height: "100vh", display: "flex", flexDirection: "column"}}>
            <div className="header" style={{flex:1}}></div>
            <div className="navBar" style={{flex:1}}></div>
            <div className="mainContent"
                style={{display: "flex", flex:3}}
            >
                <div className="Aside" style={{flex:1}}></div>
                <div className="Seciton" style={{flex:3}}></div>
            </div>
            <div className="footer" style={{flex:1}}></div>
        </div>
    );
}