import React from "react";
import './Footer.css'
import  Img1  from './img/gif1.jpg';
import {BsFacebook} from "react-icons/bs"

const Footer = () => {
    return ( 
        <div className="bg-black">
            <div className="text bg-white flex pt-12">
                <div className="first ml-8">
                    <h1 className="text-black text-4xl font-bold mb-16">!NView</h1>
                    <p className="ml-4 font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Assumenda harum quis recusandae saepe,<br /> quas placeat blanditiis sit expedita tenetur nulla?Lorem ipsum <br /> dolor sit amet consectetur, adipisicing elit. Molestiae, excepturi.</p>
                </div>
                <div className="sec ml-8">
                    <h1 className="text-black text-4xl font-bold mb-12">Movies</h1>
                    <p className="ml-4 mt-4 font-medium"><a href="/"> Home Alone Return</a></p>
                    <p className="ml-4 mt-4 font-medium"><a href="/"> Attraction to Paris (2021) (NetNaija.com)</a></p>
                    <p className="ml-4 mt-4 font-medium"><a href="/"> Bandits (2017) (NetNaija.com)</a></p>
                    <p className="ml-4 mt-4 font-medium"><a href="/"> Come Away (2020)_twitwisavages@telegram</a></p>
                    <p className="ml-4 mt-4 font-medium"><a href="/"> Birds Of Prey And The Fantabulous Emancipation Of One Harley Quinn 2020</a></p>
                </div>
                <div className="third ml-8">
                    <img src={Img1} alt="loading..." className="w-96 h-96 absolute" />
                    <div className="con mt-0 relative">
                        <h1 className="text-black text-5xl font-bold">Kidies</h1>
                        <p className="ml-4 mt-4 font-medium"><a href="/"> Boss Baby part2</a></p>
                        <p className="ml-4 mt-4 font-medium"><a href="/"> Flora & Ulysses (2021) (NetNaija.com)</a></p>
                        <p className="ml-4 mt-4 font-medium"><a href="/"> The_Mitchells_vs_the_Machines_(2021)_WEB-DL_high_(fzmovies.net)</a></p>
                        <p className="ml-4 mt-4 font-medium"><a href="/"> Ant.Man.and.the.Wasp.2018.720p</a></p>
                    </div>
                </div>
                <div className="icons">
                    <BsFacebook/>
                </div>
            </div>
        </div>
                
     );
}
 
export default Footer;