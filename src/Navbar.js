import Icons from "./Global/Icons.js"
import Imgs from "./Global/Imgs"
export default function Navbar(){
    return(
        <div class="navbar">
            <div class="container">
                <Logo />
                <LogoMobile />
                <MobileInstagram />
                <Search />
                <InteractionIcons />
                <MobileInteractionIcons />
            </div>
        </div>
    )
} 
function Logo(){
    return(
        <div class="logo">
            <Icons name="logo-instagram" />
            <div class="separador"></div>
            <Imgs src="logo.png" />
        </div>
    )
}
function LogoMobile(){
    return(
        <div class="logo-mobile">
            <Icons name="logo-instagram"/>
        </div>
    )
}
function MobileInstagram(){
    return(
        <div class="instagram-mobile">
            <Imgs src="logo.png" />
        </div>
    )
}
function Search(){
    return(
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>
    )
}
function InteractionIcons(){
    return (
        <div class="icones">
            <Icons name="paper-plane-outline"/>
            <Icons name="compass-outline"/>
            <Icons name="heart-outline"/>
            <Icons name="person-outline"/>
        </div>
    )
}
function MobileInteractionIcons(){
    return (
        <div class="icones-mobile">
            <Icons name="paper-plane-outline"/>
        </div>
    )
}