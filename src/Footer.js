import React from "react";
import './Footer.css'
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"

const Footer = () => {
    return ( 
        <div className="bg-black">
            <div className="text bg-white pt-12 bg pb-4" id="flex">
                <div className="first ml-8 sec">
                    <h1 className="text-black text-5xl font-bold mb-8">!NView</h1>
                    <p className="ml-4 font-medium">Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Assumenda harum quis recusandae saepe,<br /> quas placeat blanditiis sit expedita tenetur nulla?Lorem ipsum <br /> dolor sit amet consectetur, adipisicing elit. Molestiae, excepturi.</p>
                </div>
                <div className="sec">
                    <h1 className="text-black text-5xl font-bold">Movies</h1>
                    <p className="ml-4 mt-4 font-medium"><a href="/"> Home Alone Return</a></p>
                    <p className="ml-4 font-medium"><a href="/"> Attraction to Paris (2021) (NetNaija.com)</a></p>
                    <p className="ml-4 font-medium"><a href="/"> Bandits (2017) (NetNaija.com)</a></p>
                    <p className="ml-4 font-medium"><a href="/"> Come Away (2020)_twitwisavages@telegram</a></p>
                    <p className="ml-4 font-medium"><a href="/"> Birds Of Prey And The Fantabulous Emancipation Of One Harley Quinn 2020</a></p>
                </div>
                <div className="sec">
                        <h1 className="text-black text-5xl font-bold">Kidies</h1>
                        <p className="ml-4 mt-4 font-medium"><a href="/"> Boss Baby part2</a></p>
                        <p className="ml-4 font-medium"><a href="/"> Flora & Ulysses (2021) (NetNaija.com)</a></p>
                        <p className="ml-4 font-medium"><a href="/"> The_Mitchells_vs_the_Machines_(2021)_WEB-DL_high_(fzmovies.net)</a></p>
                        <p className="ml-4 font-medium"><a href="/"> Ant.Man.and.the.Wasp.2018.720p</a></p>
                </div>
            </div>
                <div className="icons bg-white text-4xl pb-4 ">
                    <div className="ml-40">
                            <h3>Social Media</h3>
                        <div className="flex">
                            <p className="ml-4 text-blue-700"><BsFacebook/></p>
                            <p className="ml-4 text-blue-700"><AiFillTwitterCircle/></p>
                            <p className="ml-4 text-green-900"><BsWhatsapp/></p>
                            <p className="ml-4 text-blue-700"><BsLinkedin/></p>
                        </div>
                    </div>
                </div>
        </div>
                
     );
}
 
export default Footer;