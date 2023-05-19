import Navigation from "./Navigation"

const Header = ({ current_user, logout }) => {
    return(
        <header className="header">
            <Navigation current_user={current_user} logout={logout} />
        </header>
    )
}

export default Header