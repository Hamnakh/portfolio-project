import Link from "next/link"
import Footer from "./Footer"
import Image from "next/image"
export default function Header(){
    return(
       
            <div className="main">
                <h1>Portfolio</h1>
            <ul className="header-buttons">  
                <Link href={"/"}>
                <li>Home</li></Link>
                <Link href={"/about-us"}>
                <li>About</li></Link>
                <Link href={"/skills"}>
                <li>Skills</li></Link>
                <Link href={"/contact-us"}>
                <li>Contact</li></Link>
            </ul>
        </div>  
    )
}