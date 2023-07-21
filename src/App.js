import { useState, useEffect, useRef } from 'react';

import './App.css';
import InfoCard from './components/InfoCard/InfoCard.js';
import ProductCard from './components/ProductCard/ProductCard.js';
import BlogCard from './components/BlogCard/BlogCard.js'
import FooterCard from './components/FooterCard/FooterCard';
import HowItWorks from './components/HowItWorks/HowItWorks';

import cogoportIcon from './components/cogoport_icon.webp'
import homeBannerVid1 from './components/updated_gif_1.webm'
import homeBannerVid2 from './components/updated_gif_2.webm'
import homeBannerVid3 from './components/updated_gif_3.webm'
import homeBannerVid4 from './components/cogoverse_mobile_1.webm'
import homeBannerVid5 from './components/cogoverse_mobile_1.webm'
import homeBannerVid6 from './components/cogoverse_mobile_1.webm'
import mapSupplyChain from './components/map-supply-chain.webp'
import fcl from './components/ocean fcl.png'
import lcl from './components/ocean lcl.png'
import intAir from './components/INT Air.png'
import cfs from './components/Customs cfs.png'
import ftl from './components/ftl,ptl.png'
import rail from './components/Trailer and rail container.png'
import cogoAssured from './components/cogo assured.png'
import domesticFulfilment from './components/domestic fullfilment.png'
import dtd from './components/door to door shipments.png'
import cargoInsurance from './components/cargo insaurance.png' 
import payLater from './components/pay later.png'
import exportFactoring from './components/export factoring.png'
import freightRates from './components/frieghts rates and schedules.png'
import qpq from './components/quick premium quotations.png'
import duties from './components/duties and taxex calculator.png'
import tracking from './components/tracking and visibility.png'

import volvo from './components/voltas-logo.webp'
import airasia from './components/air-asia-logo.webp'
import ais from './components/ais-logo.webp'
import bhilosa from './components/bhilosa_logo.webp'
import chemicals from './components/chemical.svg'
import pharmaceuticals from './components/paracetamol.svg'
import electronics from './components/electronics.svg'
import whiteGoods from './components/whitegoods.svg'
import textiles from './components/textiles.svg'
import manufacturing from './components/manufactoring.svg'
import agriculture from './components/agriculture.svg'
import tradeTechHome from './components/trade-tech-home.webp'
import videoImg from './components/video.png'
import blog0 from './components/blog0.png'
import blog1 from './components/blog1.png'
import blog2 from './components/blog2.png'
import subsrcibe from './components/cogoport-subscribe.png'
import globe from './components/globe.webp'

function App() {
    const [countriesServed, setCountriesServed] = useState(0);
    const [portsPairsServed, setPortsPairsServed] = useState(0);
    const [tonsOfAirCargoMoved, setTonsOfAirCargoMoved] = useState(0);
    const [containersMoved, setContainersMoved] = useState(0);
    let maxCountriesServed = 180;
    let maxPortsPairsServed = 10000;
    let maxTonsOfAirCargoMoved = 30000;
    let maxContainersMoved = 700000;
    let homeBannerVid  = [homeBannerVid1, homeBannerVid2, homeBannerVid3];
    let homeBannerVidM = [homeBannerVid4, homeBannerVid5, homeBannerVid6];

    function helper(num){
        let size = num.length;
        return (size>3)?(num.slice(0, size-3) + "," + num.slice(size-3)):(num);
    }

    useEffect(() => {
        setTimeout(() => {
            setCountriesServed((countriesServed) => (Math.min(countriesServed+3, maxCountriesServed)));
        }, 1);
    }, [Math.max(maxCountriesServed-countriesServed-3, 0)]);

    useEffect(() => {
        setTimeout(() => {
            setPortsPairsServed((portsPairsServed) => (Math.min(portsPairsServed+167, maxPortsPairsServed)));
        }, 1);
    }, [Math.max(maxPortsPairsServed-portsPairsServed-167, 0)]);

    useEffect(() => {
        setTimeout(() => {
            setTonsOfAirCargoMoved((tonsOfAirCargoMoved) => (Math.min(tonsOfAirCargoMoved+507, maxTonsOfAirCargoMoved)));
        }, 1);
    }, [Math.max(maxTonsOfAirCargoMoved-tonsOfAirCargoMoved-507, 0)]);

    useEffect(() => {
        setTimeout(() => {
            setContainersMoved((containersMoved) => (Math.min(containersMoved+11667, maxContainersMoved)));
        }, 1);
    }, [Math.max(maxContainersMoved-containersMoved-11667, 0)]);

    return (
        <div className="app">
            {/* Offer Section */}
            <div className="offerSection">
                <div className="left">
                    <img src={cogoportIcon}/>
                    &nbsp; 
                    <div>Limited Time Offer: Get 15% off on all Cogo Assured Rates. &nbsp; <span>Book Today!</span></div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FBDC22" viewBox="0 0 14 14" width="1em" height="1em" role="img" class="styles_cross__5Alky"><path class="ic-m-cross_svg__ic_m_cross" d="M2.828 2.516a.922.922 0 0 0-.31.311.372.372 0 0 0 .004.353c.033.066.654.704 1.908 1.959L6.288 7 4.43 8.861c-1.254 1.255-1.875 1.893-1.908 1.959-.09.181-.049.348.13.529.172.173.351.217.528.129.066-.033.704-.654 1.959-1.908L7 7.712 8.861 9.57c1.255 1.254 1.893 1.875 1.959 1.908.177.088.355.044.529-.129.173-.174.217-.352.129-.529-.033-.066-.654-.704-1.908-1.959L7.712 7 9.57 5.139c1.254-1.255 1.875-1.893 1.908-1.959.088-.177.044-.356-.129-.528-.181-.179-.348-.22-.529-.13-.066.033-.704.654-1.959 1.908L7 6.288 5.139 4.43C3.884 3.176 3.246 2.555 3.18 2.522a.384.384 0 0 0-.352-.006" fill-rule="evenodd"></path></svg>
            </div>

            {/* NavBar */}
            <div className='navBar'>
                <div className='left'>
                    <svg className='menuButton' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="16" height="16" role="img"><path class="ic-m-overflow_line_svg__ic_m_overflow_line" d="M1.794 1.782a.804.804 0 0 0-.513.513.899.899 0 0 0 .055.54.828.828 0 0 0 .344.342l.105.055h10.43l.1-.054a.877.877 0 0 0 .351-.342c.055-.103.062-.144.062-.339 0-.203-.006-.233-.069-.347a.818.818 0 0 0-.361-.336l-.106-.052-5.145-.005c-4.055-.003-5.168.002-5.253.025m-.039 4.515a.724.724 0 0 0-.372.293c-.1.146-.13.27-.118.468a.716.716 0 0 0 .411.612l.132.065h10.384l.132-.065a.813.813 0 0 0 .351-.348c.045-.084.053-.136.053-.322s-.008-.238-.053-.322a.813.813 0 0 0-.351-.348l-.132-.065-5.157-.005c-4.948-.005-5.162-.004-5.28.037m.042 4.481a.82.82 0 0 0-.47.399c-.047.088-.055.139-.055.326 0 .203.006.233.069.347a.818.818 0 0 0 .361.336l.106.052h10.384l.116-.057a.803.803 0 0 0 .384-.411.609.609 0 0 0 .042-.313.733.733 0 0 0-.414-.634l-.105-.055-5.18-.004c-2.849-.002-5.206.005-5.238.014" fill-rule="evenodd"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="36" fill="none" viewBox="0 0 862 282" aria-label="cogoport"><path fill="#EC3926" d="M684.628 147.038h-19.812V96.475c0-27.65 22.482-50.133 50.133-50.133 10.078 0 19.726 2.93 27.995 8.528l-11.112 16.453a30.292 30.292 0 0 0-16.969-5.169c-16.711 0-30.321 13.61-30.321 30.321v50.563h.086ZM66.671 146.521c-27.65 0-50.132-22.482-50.132-50.132S39.02 46.256 66.67 46.256c18.261 0 35.059 9.906 43.845 25.928l-17.314 9.561c-5.34-9.647-15.505-15.677-26.53-15.677-16.712 0-30.322 13.61-30.322 30.32 0 16.712 13.61 30.322 30.321 30.322 10.767 0 20.501-5.513 26.014-14.816l17.055 10.164c-9.044 15.074-25.497 24.463-43.069 24.463ZM165.214 146.521c-27.651 0-50.133-22.482-50.133-50.132s22.482-50.133 50.133-50.133c27.65 0 50.132 22.483 50.132 50.133 0 27.65-22.482 50.132-50.132 50.132Zm0-80.453c-16.711 0-30.321 13.61-30.321 30.32 0 16.712 13.61 30.322 30.321 30.322 16.71 0 30.32-13.61 30.32-30.321 0-16.711-13.61-30.32-30.32-30.32ZM384.177 146.521c-27.65 0-50.132-22.482-50.132-50.132s22.482-50.133 50.132-50.133c27.651 0 50.133 22.483 50.133 50.133 0 27.65-22.482 50.132-50.133 50.132Zm0-80.453c-16.71 0-30.32 13.61-30.32 30.32 0 16.712 13.61 30.322 30.32 30.322 16.711 0 30.321-13.61 30.321-30.321 0-16.711-13.61-30.32-30.321-30.32ZM602.452 146.521c-27.65 0-50.132-22.482-50.132-50.132s22.482-50.133 50.132-50.133c27.651 0 50.133 22.483 50.133 50.133-.086 27.65-22.569 50.132-50.133 50.132Zm0-80.453c-16.711 0-30.321 13.61-30.321 30.32 0 16.712 13.61 30.322 30.321 30.322 16.711 0 30.321-13.61 30.321-30.321 0-16.711-13.61-30.32-30.321-30.32ZM493.142 46.256c-27.65 0-50.132 22.483-50.132 50.133v73.821h19.812v-33.939c8.441 6.46 18.95 10.25 30.32 10.25 27.651 0 50.133-22.482 50.133-50.132s-22.482-50.133-50.133-50.133Zm0 80.454c-16.71 0-30.32-13.61-30.32-30.321 0-16.711 13.61-30.32 30.32-30.32 16.711 0 30.321 13.609 30.321 30.32s-13.61 30.321-30.321 30.321ZM811.079 53.75h-38.676V29.287h-19.812v117.751h19.812V73.562h38.676V53.75ZM328.704 47.807c-4.22-4.221-10.853-2.326-14.557 1.378-1.981 1.981-3.962 5.944-5.685 9.992-9.562-8.614-22.31-13.61-36.178-13.007-27.651 1.292-49.099 24.894-47.807 52.63 1.292 27.651 24.894 49.1 52.63 47.808 27.651-1.293 49.099-24.894 47.807-52.631a49.988 49.988 0 0 0-8.441-25.583c4.393-1.809 8.7-3.876 10.853-6.03 3.618-3.704 5.599-10.336 1.378-14.557ZM276.16 126.71c-16.711.775-31.01-12.146-31.785-28.943-.775-16.71 12.145-31.01 28.942-31.785 16.711-.775 31.01 12.145 31.785 28.942.776 16.711-12.231 31.01-28.942 31.786ZM320.607 149.192c-1.981-2.412-5.082-1.12-7.149.517-2.757 2.153-5.513 4.22-8.442 6.029-5.857 3.618-12.318 6.461-19.209 7.667-6.546 1.119-15.677 1.119-22.223 0-6.891-1.206-13.352-3.963-19.209-7.667-2.929-1.809-5.685-3.876-8.442-6.029-2.067-1.637-5.168-2.843-7.149-.517-3.79 4.565-1.378 11.715 1.378 16.108 3.618 5.685 9.906 9.475 15.763 12.49.086.086.259.086.345.172 8.7 4.393 17.572 6.03 28.426 6.03 10.853 0 19.725-1.637 28.425-6.03.086-.086.259-.086.345-.172 5.857-3.015 12.145-6.805 15.763-12.49 2.843-4.393 5.168-11.543 1.378-16.108ZM821.158 20.07s4.823-.086 7.235 0c2.929.086 5.341 2.67 5.168 5.6-.086 2.239-1.292 3.962-3.531 4.91 1.033 2.411 3.187 7.32 3.187 7.32h-3.446l-2.842-6.89h-2.584v6.977h-3.101V20.07h-.086Zm3.101 7.839h4.134c1.206-.086 2.068-1.12 2.154-2.24 0-1.378-1.034-2.412-2.412-2.498h-3.79l-.086 4.738Z"></path><path fill="#EC3926" d="M842.089 29.2c0 8.529-6.891 15.42-15.419 15.42-8.527 0-15.418-6.891-15.418-15.42 0-8.527 6.891-15.418 15.418-15.418 8.528 0 15.419 6.805 15.419 15.419ZM826.67 16.97c-6.718 0-12.231 5.426-12.231 12.23 0 6.806 5.427 12.146 12.231 12.146 6.719 0 12.232-5.426 12.232-12.231s-5.513-12.146-12.232-12.146Z"></path><path fill="#000" d="M69.083 235.244v20.587c-4.049 3.187-11.973 6.03-18.692 6.03-12.92 0-23.343-8.356-23.343-22.482 0-14.213 10.336-22.655 23.343-22.655 7.063 0 12.662 2.412 17.055 5.944l-4.22 6.891c-3.446-2.843-7.494-4.479-12.663-4.479-8.01 0-14.213 5.168-14.213 14.212 0 8.959 6.202 14.127 14.558 14.127 3.445 0 6.719-.861 9.13-2.326v-8.097H48.496v-7.838h20.587v.086ZM86.914 215.346v35.145c0 2.325.861 3.703 2.756 3.703 1.292 0 2.412-.43 3.618-1.033l.43 7.149c-1.55.603-4.479 1.465-7.58 1.465-4.996 0-8.269-2.412-8.269-9.131v-37.298h9.045ZM116.201 226.544c10.595 0 18.175 7.58 18.175 17.831 0 10.164-7.58 17.658-18.175 17.658-10.423 0-18.09-7.58-18.09-17.658 0-10.251 7.581-17.831 18.09-17.831Zm0 27.22c5.685 0 9.475-4.135 9.475-9.389 0-5.427-3.79-9.648-9.475-9.648-5.513 0-9.389 4.221-9.389 9.648 0 5.34 3.79 9.389 9.389 9.389ZM161.768 261.775c-4.565 0-7.839-1.379-10.164-3.704v3.015h-9.045v-45.74h9.045v14.902c2.325-2.067 5.771-3.446 10.164-3.446 9.475 0 15.849 7.236 15.849 17.4 0 10.251-6.374 17.573-15.849 17.573Zm-2.584-27.048c-3.015 0-5.858 1.378-7.58 3.187v12.921c1.55 1.551 4.479 3.101 7.58 3.101 5.513 0 9.13-3.876 9.13-9.647.087-5.772-3.531-9.562-9.13-9.562ZM218.705 250.749c0 1.895.517 3.445 2.326 3.445 1.292 0 2.326-.43 3.446-1.033l.344 7.149c-1.636.776-4.479 1.465-7.322 1.465-3.79 0-6.201-1.551-7.149-4.91a14.088 14.088 0 0 1-10.681 4.824c-9.389 0-15.763-7.236-15.763-17.314 0-10.251 6.374-17.573 15.763-17.573 4.393 0 7.838 1.206 10.078 3.446v-2.843h9.045v23.344h-.087Zm-8.958-13.007c-1.55-1.637-4.479-3.015-7.58-3.015-5.599 0-9.131 3.876-9.131 9.648 0 5.685 3.618 9.561 9.131 9.561 2.929 0 5.771-1.378 7.58-3.015v-13.179ZM240.671 215.346v35.145c0 2.325.861 3.703 2.756 3.703 1.292 0 2.412-.43 3.618-1.033l.431 7.149c-1.551.603-4.48 1.465-7.58 1.465-4.997 0-8.27-2.412-8.27-9.131v-37.298h9.045ZM290.373 226.372v34.8h-9.045v-34.8h-14.471v-9.045h37.384v9.045h-13.868ZM311.477 237.914c0-1.981-.431-3.445-2.326-3.445-1.378 0-2.929.603-3.446.947l-.344-7.063c.43-.431 3.79-1.464 7.321-1.464 3.877 0 6.375 1.55 7.322 5.082 1.637-3.187 4.049-5.082 8.442-5.082 3.187 0 5.599 1.119 6.029 1.895l-1.292 8.097c-.516-.689-3.101-1.723-6.202-1.723-4.306 0-6.029 3.704-6.546 7.666v18.348h-9.045v-23.258h.087ZM373.496 250.749c0 1.895.517 3.445 2.326 3.445 1.292 0 2.326-.43 3.445-1.033l.345 7.149c-1.637.776-4.479 1.465-7.322 1.465-3.79 0-6.202-1.551-7.149-4.91a14.088 14.088 0 0 1-10.681 4.824c-9.389 0-15.764-7.236-15.764-17.314 0-10.251 6.375-17.573 15.764-17.573 4.393 0 7.838 1.206 10.078 3.446v-2.843h9.044v23.344h-.086Zm-9.044-13.007c-1.551-1.637-4.48-3.015-7.58-3.015-5.599 0-9.131 3.876-9.131 9.648 0 5.685 3.618 9.561 9.131 9.561 2.928 0 5.771-1.378 7.58-3.015v-13.179ZM419.408 215.346v35.403c0 1.981.431 3.445 2.326 3.445 1.033 0 2.153-.43 3.359-1.033l.431 7.149c-1.637.776-4.566 1.465-7.408 1.465-3.532 0-6.03-1.292-7.063-4.307-2.154 2.67-5.772 4.307-10.768 4.307-9.389 0-15.763-7.322-15.763-17.573 0-10.164 6.46-17.4 15.763-17.4 4.307 0 7.753 1.379 10.165 3.446v-14.902h8.958Zm-16.539 38.59c3.015 0 6.03-1.464 7.581-3.015v-13.093c-1.723-1.723-4.566-3.101-7.581-3.101-5.512 0-9.216 3.79-9.216 9.562 0 5.771 3.617 9.647 9.216 9.647ZM462.908 257.468c-3.446 2.842-8.442 4.565-14.213 4.565-12.662 0-18.347-7.752-18.347-17.658 0-10.078 6.977-17.831 17.83-17.831 10.251 0 15.074 6.288 15.074 14.041 0 2.067-.344 5.254-.689 6.546H439.65c.862 4.738 3.877 7.322 9.39 7.322 4.22 0 8.183-1.723 10.508-3.446l3.36 6.461Zm-8.269-18.434c0-2.67-2.068-4.996-6.633-4.996-4.824 0-7.408 2.929-8.097 6.202h14.643c.087-.345.087-.861.087-1.206ZM489.008 217.327h20.931c8.614 0 15.936 4.996 15.936 16.022 0 9.906-7.322 15.763-15.936 15.763h-11.887v12.146h-9.044v-43.931Zm9.044 7.839v16.022h10.509c4.479 0 8.011-3.015 8.011-7.925 0-5.255-3.532-8.097-8.011-8.097h-10.509ZM541.983 215.346v35.145c0 2.325.861 3.703 2.756 3.703 1.293 0 2.412-.43 3.618-1.033l.431 7.149c-1.551.603-4.479 1.465-7.58 1.465-4.996 0-8.27-2.412-8.27-9.131v-37.298h9.045ZM588.239 250.749c0 1.895.517 3.445 2.326 3.445 1.292 0 2.326-.43 3.446-1.033l.344 7.149c-1.637.776-4.479 1.465-7.322 1.465-3.79 0-6.202-1.551-7.149-4.91a14.088 14.088 0 0 1-10.681 4.824c-9.389 0-15.764-7.236-15.764-17.314 0-10.251 6.375-17.573 15.764-17.573 4.393 0 7.838 1.206 10.078 3.446v-2.843h9.044v23.344h-.086Zm-8.958-13.007c-1.551-1.637-4.479-3.015-7.58-3.015-5.599 0-9.131 3.876-9.131 9.648 0 5.685 3.618 9.561 9.131 9.561 2.928 0 5.771-1.378 7.58-3.015v-13.179ZM612.617 218.878v8.614h12.317v7.063h-12.317v13.696c0 4.048 1.636 5.771 4.565 5.771 2.412 0 5.168-1.206 6.805-2.412l2.842 6.978c-3.187 1.981-7.494 3.359-12.49 3.359-6.632 0-10.767-4.049-10.767-11.801v-15.505h-6.03v-7.236h6.03l1.12-8.613h7.925v.086ZM630.792 229.042h6.202v-2.326c0-6.546 3.445-11.973 11.628-11.973 3.532 0 6.891 1.034 8.7 1.895l-1.981 7.839c-1.378-.862-3.532-1.809-5.685-1.809-2.584 0-3.618 1.55-3.618 4.134v2.24h10.164v7.063h-10.164v25.067h-9.044v-25.067h-6.202v-7.063ZM678.685 226.544c10.595 0 18.175 7.58 18.175 17.831 0 10.164-7.58 17.658-18.175 17.658-10.423 0-18.089-7.58-18.089-17.658 0-10.251 7.666-17.831 18.089-17.831Zm0 27.22c5.685 0 9.475-4.135 9.475-9.389 0-5.427-3.79-9.648-9.475-9.648-5.513 0-9.39 4.221-9.39 9.648 0 5.34 3.791 9.389 9.39 9.389ZM707.713 237.914c0-1.981-.43-3.445-2.325-3.445-1.379 0-2.929.603-3.446.947l-.345-7.063c.431-.431 3.791-1.464 7.322-1.464 3.876 0 6.374 1.55 7.322 5.082 1.637-3.187 4.048-5.082 8.441-5.082 3.188 0 5.599 1.119 6.03 1.895l-1.292 8.097c-.517-.689-3.101-1.723-6.202-1.723-4.307 0-6.03 3.704-6.546 7.666v18.348h-9.045v-23.258h.086ZM746.217 227.405v3.704c2.412-2.67 5.944-4.393 10.595-4.393 5.685 0 9.131 1.809 10.854 6.03 2.239-3.446 6.288-5.944 11.887-5.944 8.7 0 12.317 6.547 12.317 14.902v9.045c0 1.895.431 3.445 2.24 3.445 1.034 0 2.24-.43 3.446-1.033l.43 7.149c-1.636.776-4.651 1.465-7.408 1.465-4.996 0-7.752-2.584-7.752-8.873v-9.647c0-4.996-2.24-8.097-6.719-8.097-3.704 0-6.03 2.498-7.063 5.168v20.846h-9.045v-18.003c0-4.91-2.153-8.011-6.632-8.011-3.79 0-6.202 2.584-7.236 5.254v20.674h-9.045v-33.681h9.131ZM812.371 223.271v14.816h-4.909v-14.816h-6.03v-4.91h16.883v4.91h-5.944Zm28.34 2.842-5.944 7.236h-.861l-5.943-7.236v12.06h-4.91v-19.726h4.134l7.15 8.442 7.149-8.442h4.135v19.726h-4.91v-12.06Z"></path></svg>
                </div>
                <div className='mid'>
                    <span>
                        Products
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="1em" height="1em" role="img" style={{marginLeft: '4px', fontSize: '10px'}}><path class="ic-m-arrow_rotate_down_svg__ic_m_arrow_rotate_down" d="M1.989 4.052a.55.55 0 0 0-.286.449c0 .199-.084.109 2.518 2.716 1.488 1.492 2.501 2.489 2.557 2.519a.516.516 0 0 0 .444 0c.056-.03 1.069-1.027 2.557-2.519 2.606-2.612 2.518-2.516 2.518-2.719a.536.536 0 0 0-.285-.44c-.085-.044-.211-.045-5.017-.044-4.47 0-4.937.004-5.006.038" fill-rule="evenodd"></path></svg>
                    </span>
                    <span>
                        Partners
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="1em" height="1em" role="img" style={{marginLeft: '4px', fontSize: '10px'}}><path class="ic-m-arrow_rotate_down_svg__ic_m_arrow_rotate_down" d="M1.989 4.052a.55.55 0 0 0-.286.449c0 .199-.084.109 2.518 2.716 1.488 1.492 2.501 2.489 2.557 2.519a.516.516 0 0 0 .444 0c.056-.03 1.069-1.027 2.557-2.519 2.606-2.612 2.518-2.516 2.518-2.719a.536.536 0 0 0-.285-.44c-.085-.044-.211-.045-5.017-.044-4.47 0-4.937.004-5.006.038" fill-rule="evenodd"></path></svg>
                    </span>
                    <span>
                        Tools
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="1em" height="1em" role="img" style={{marginLeft: '4px', fontSize: '10px'}}><path class="ic-m-arrow_rotate_down_svg__ic_m_arrow_rotate_down" d="M1.989 4.052a.55.55 0 0 0-.286.449c0 .199-.084.109 2.518 2.716 1.488 1.492 2.501 2.489 2.557 2.519a.516.516 0 0 0 .444 0c.056-.03 1.069-1.027 2.557-2.519 2.606-2.612 2.518-2.516 2.518-2.719a.536.536 0 0 0-.285-.44c-.085-.044-.211-.045-5.017-.044-4.47 0-4.937.004-5.006.038" fill-rule="evenodd"></path></svg>
                    </span>
                    <span>
                        Company
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="1em" height="1em" role="img" style={{marginLeft: '4px', fontSize: '10px'}}><path class="ic-m-arrow_rotate_down_svg__ic_m_arrow_rotate_down" d="M1.989 4.052a.55.55 0 0 0-.286.449c0 .199-.084.109 2.518 2.716 1.488 1.492 2.501 2.489 2.557 2.519a.516.516 0 0 0 .444 0c.056-.03 1.069-1.027 2.557-2.519 2.606-2.612 2.518-2.516 2.518-2.719a.536.536 0 0 0-.285-.44c-.085-.044-.211-.045-5.017-.044-4.47 0-4.937.004-5.006.038" fill-rule="evenodd"></path></svg>
                    </span>
                    <span>
                        Knowledge Center
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="1em" height="1em" role="img" style={{marginLeft: '4px', fontSize: '10px'}}><path class="ic-m-arrow_rotate_down_svg__ic_m_arrow_rotate_down" d="M1.989 4.052a.55.55 0 0 0-.286.449c0 .199-.084.109 2.518 2.716 1.488 1.492 2.501 2.489 2.557 2.519a.516.516 0 0 0 .444 0c.056-.03 1.069-1.027 2.557-2.519 2.606-2.612 2.518-2.516 2.518-2.719a.536.536 0 0 0-.285-.44c-.085-.044-.211-.045-5.017-.044-4.47 0-4.937.004-5.006.038" fill-rule="evenodd"></path></svg>
                    </span>
                    <span>Contact Us</span>
                </div>
                <div className='right'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 27 27" style={{marginRight: '5px'}}><path fill="#fff" d="M13.368 26.485c6.946 0 12.577-5.63 12.577-12.576 0-6.946-5.631-12.576-12.577-12.576C6.423 1.333.792 6.963.792 13.909c0 6.946 5.631 12.576 12.576 12.576Z"></path><path fill="#231F20" d="M13.368.843a13.007 13.007 0 0 1 7.306 2.232 13.1 13.1 0 0 1 4.73 5.748 13.048 13.048 0 0 1-1.2 12.391 13.1 13.1 0 0 1-5.75 4.729 13.048 13.048 0 0 1-12.39-1.2 13.1 13.1 0 0 1-4.734-5.748A13.049 13.049 0 0 1 2.535 6.603 13.1 13.1 0 0 1 8.283 1.87 12.984 12.984 0 0 1 13.368.843Zm0 25.152a12.027 12.027 0 0 0 6.757-2.064 12.122 12.122 0 0 0 4.378-5.318 12.069 12.069 0 0 0-1.112-11.462 12.122 12.122 0 0 0-5.318-4.38A12.07 12.07 0 0 0 6.611 3.886a12.123 12.123 0 0 0-4.38 5.318 12.07 12.07 0 0 0 1.115 11.462 12.122 12.122 0 0 0 5.318 4.377 12.01 12.01 0 0 0 4.704.952Z"></path><path fill="#fff" d="M21.738 15.464c-2.374 7.394-12.709 6.916-15.1.964l15.1-.964Z"></path><path fill="#231F20" d="M14.02 21.442a9.571 9.571 0 0 1-2.182-.25 9 9 0 0 1-2.34-.901 7.364 7.364 0 0 1-3.315-3.681.49.49 0 1 1 .908-.365 6.4 6.4 0 0 0 2.883 3.192 8.005 8.005 0 0 0 2.086.8 8.6 8.6 0 0 0 2.267.22 7.826 7.826 0 0 0 4.172-1.333 6.963 6.963 0 0 0 1.638-1.577 7.627 7.627 0 0 0 1.134-2.233.488.488 0 1 1 .932.3 8.608 8.608 0 0 1-1.28 2.519 7.918 7.918 0 0 1-1.869 1.8 8.8 8.8 0 0 1-4.69 1.5c-.116.006-.23.009-.345.009ZM18.71 11.148c-.5 0-.889-.57-.889-1.3 0-.73.391-1.3.89-1.3.497 0 .888.57.888 1.3 0 .73-.39 1.3-.889 1.3Z"></path><path fill="#231F20" d="M18.71 10.87c.338 0 .612-.457.612-1.02s-.274-1.02-.612-1.02c-.338 0-.612.457-.612 1.02s.274 1.02.612 1.02ZM8.416 11.35c.491 0 .89-.58.89-1.297 0-.716-.399-1.297-.89-1.297-.49 0-.889.58-.889 1.297 0 .716.398 1.297.89 1.297Z"></path><path fill="#231F20" d="M7.805 10.053c0 .563.274 1.02.612 1.02.338 0 .612-.457.612-1.02s-.274-1.02-.612-1.02c-.338 0-.612.456-.612 1.02Z"></path><path fill="#fff" d="M14.375 8.83c1.32 1.793 1.888 3.245.9 4.476-.988 1.231-3.655.036-3.655.036"></path><path fill="#231F20" d="M13.851 14.354a4.813 4.813 0 0 1-.867-.085 7.61 7.61 0 0 1-1.568-.478.489.489 0 1 1 .4-.893c.438.185.894.322 1.36.411 1.058.19 1.516-.063 1.714-.308a1.719 1.719 0 0 0 .324-1.6 6.89 6.89 0 0 0-1.234-2.276.489.489 0 0 1 .788-.58 7.766 7.766 0 0 1 1.4 2.622c.11.415.127.849.051 1.27-.088.434-.281.84-.563 1.181-.326.39-.789.64-1.294.7-.169.025-.34.037-.51.036Z"></path></svg>
                        login
                    </span>
                    <button>Sign Up</button>
                </div>
            </div>

            {/* HomePage Banner */}
            <div className='header'>
                <span>
                    <div className='left'>
                        <h1>Grow Faster, Go Global.</h1>
                        <p>Strengthen your Supply Chain, and Scale your Business 
                            with Reliable Shipping and Cashflows.</p>
                        <div>Talk to us now!</div>
                        <div className='whatsappInput'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" width="20px" height="20px" role="img" class="styles_whatsapp_icon__Vyo1M"><g fill="#73D081"><path class="ic-c-send_whatsapp_svg__ic_c_send_whatsapp" d="M1.05 6.946c0 1.048.275 2.071.798 2.973L1 13l3.167-.827a5.994 5.994 0 0 0 2.856.724h.002c3.293 0 5.974-2.668 5.975-5.946 0-1.59-.62-3.083-1.748-4.207A5.951 5.951 0 0 0 7.025 1C3.732 1 1.052 3.667 1.05 6.946Zm1.886 2.817-.118-.186a4.913 4.913 0 0 1-.76-2.63c.002-2.726 2.23-4.943 4.969-4.943a4.94 4.94 0 0 1 3.51 1.45 4.901 4.901 0 0 1 1.454 3.496c-.001 2.725-2.229 4.943-4.966 4.943h-.002a4.978 4.978 0 0 1-2.527-.69l-.182-.106-1.88.49.502-1.824Z"></path><path class="ic-c-send_whatsapp_svg__ic_c_send_whatsapp" d="M5.532 4.46c-.112-.248-.23-.253-.336-.257C5.11 4.199 5.01 4.2 4.91 4.2a.55.55 0 0 0-.398.185c-.137.15-.523.509-.523 1.24s.535 1.438.61 1.537c.075.1 1.033 1.648 2.55 2.243 1.261.496 1.518.397 1.792.372.273-.024.883-.36 1.007-.706.125-.347.125-.645.088-.707-.038-.062-.137-.099-.287-.173-.15-.075-.883-.434-1.02-.484-.137-.05-.236-.074-.336.075-.1.148-.385.483-.472.582-.087.1-.175.112-.324.038-.15-.075-.63-.232-1.2-.738a4.48 4.48 0 0 1-.831-1.03c-.087-.148-.01-.228.066-.302.067-.067.149-.174.224-.26.074-.088.099-.15.149-.249.05-.099.025-.186-.013-.26-.037-.074-.327-.81-.46-1.103"></path></g></svg>
                            <select>
                                <option>+91</option>
                                <option>+91</option>
                                <option>+91</option>
                                <option>+91</option>
                                <option>+91</option>
                            </select>
                            <input placeholder='Whatsapp Number' type='number' />
                            <button>Get Started</button>
                        </div>
                    </div>
                    <div className='right'>
                        <video className='desktop' autoPlay loop>
                            <source src={homeBannerVid[Math.floor(Math.random()*homeBannerVid.length)]} />
                        </video>

                        <video className='mobile' autoPlay loop>
                            <source src={homeBannerVidM[Math.floor(Math.random()*homeBannerVidM.length)]} />
                        </video>
                    </div>
                </span>
            </div>

            {/* InfoCards */}
            <div className='infoBar'>
                <span>
                    <InfoCard quantity={helper(String(countriesServed))+"+"} remark={"Countries Served"} />
                    <InfoCard quantity={helper(String(portsPairsServed))} remark={"Ports Pairs Served"} />
                    <InfoCard quantity={helper(String(tonsOfAirCargoMoved))+"+"} remark={"Tons of Air Cargo Moved"} />
                    <InfoCard quantity={helper(String(containersMoved))} remark={"Containers Moved"} />
                </span>
            </div>

            {/* Tagline */}
            <div className='tagline'>
                <div className='boxCurve1'></div>
                <span>
                    <div className='left'>
                        <h2>One Stop Solution for Your Supply Chain</h2>
                        <p className='info'>Connected Shipping, Finance, and Trade-tech, to Power Global Trade and Supply Chains.</p>
                    </div>
                    <div className='right'>
                        <img src={mapSupplyChain} alt='mapSupplyChain' />
                    </div>
                </span>
            </div>

            {/* Our Products */}
            <div className='ourProducts'>
                <span>
                    <h3>Our Products</h3>
                    <div className='product'>
                        <h4 className='left'>End to End Cross Border Logistics</h4>
                        <div className='right'>
                            <ProductCard cardImg={fcl} cardTitle={"Ocean: FCL"}/>  
                            <ProductCard cardImg={lcl} cardTitle={"Ocean: LCL"}/>  
                            <ProductCard cardImg={intAir} cardTitle={"International Air"}/>  
                            <ProductCard cardImg={cfs} cardTitle={"Customs, CFS, & Handling"}/>
                        </div>  
                    </div>

                    <div className='product'>
                        <div className='left'>Domestic Logistics</div>
                        <div className='right'>
                            <ProductCard cardImg={ftl} cardTitle={"FTL, PTL"}/>  
                            <ProductCard cardImg={rail} cardTitle={"Trailer & Rail Container Haulage"}/>
                        </div>  
                    </div>

                    <div className='product'>
                        <div className='left'>Supply Chain Solutions</div>
                        <div className='right'>
                            <ProductCard cardImg={cogoAssured} cardTitle={"CogoAssured"}/>
                            <ProductCard cardImg={domesticFulfilment} cardTitle={"Domestic Fulfilment"}/>
                            <ProductCard cardImg={dtd} cardTitle={"Door to Door Shipments"}/>
                            <ProductCard cardImg={cargoInsurance} cardTitle={"Cargo Insurance"}/>  
                        </div>  
                    </div>

                    <div className='product'>
                        <div className='left'>Financial Services</div>
                        <div className='right'>
                            <ProductCard cardImg={payLater} cardTitle={"Pay Later"}/>  
                            <ProductCard cardImg={exportFactoring} cardTitle={"Export Factoring"}/>  
                        </div>
                    </div>

                    <div className='product'>
                        <div className='left'>Trade Management Solutions</div>
                        <div className='right'>
                            <ProductCard cardImg={freightRates} cardTitle={"Freight Rate & Schedules"}/>  
                            <ProductCard cardImg={qpq} cardTitle={"Quick Premium Quotations"}/>
                            <ProductCard cardImg={duties} cardTitle={"Duties & Taxes Calculator"}/>
                            <ProductCard cardImg={tracking} cardTitle={"Tracking & Visibility"}/>    
                        </div>  
                    </div>
                </span>
            </div>

            {/* Trusted Partners */}
            <div className='trustedPartners'>
                <h3>Trusted by</h3>
                <div className='companyName'>
                    <div className='animation'>
                        <div className='company'>
                            <img src={volvo} alt='volvo' />
                            <img src={airasia} alt='airasia' />
                            <img src={ais} alt='ais' />
                            <img src={bhilosa} alt='bhilosa' />
                            <img src={ais} alt='ais' />
                            <img src={bhilosa} alt='bhilosa' />
                            <img src={ais} alt='ais' />
                            <img src={ais} alt='ais' />
                            <img src={ais} alt='ais' />
                            <img src={bhilosa} alt='bhilosa' />
                        </div>
                    </div>
                </div>
            </div>

            {/*Ready to take your Supply Chain to the Next Level */}
            <div className='nextLevel'>
                <span>
                    <h3>Ready to take your Supply Chain to the Next Level?</h3>
                    <button>
                        <p>Get Started</p> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="1em" height="1em" role="img" style={{marginLeft: "5px", marginTop: "2px"}}><path class="ic-m-arrow_rotate_right_svg__ic_m_arrow_rotate_right" d="M4.375 1.724a.64.64 0 0 0-.12.045.639.639 0 0 0-.239.319c-.019.073-.026 1.483-.026 4.918 0 4.214.004 4.83.035 4.933a.532.532 0 0 0 .476.358c.199 0 .109.084 2.716-2.518 1.492-1.488 2.489-2.501 2.519-2.557a.533.533 0 0 0 .008-.432c-.054-.106-4.9-4.96-5.008-5.016a.612.612 0 0 0-.361-.05" fill-rule="evenodd"></path></svg>
                    </button>
                </span>
            </div>

            {/* How It Works */}
            <div>
                <HowItWorks/>
            </div>

            {/* Industries Served */}
            <div className='industriesServed'>
                <span>
                    <div className='top'>
                        <p>Industries Served</p>
                    </div>
                    <div className='bottom'>
                        <div>
                            <img src={chemicals} alt='chemicals' />
                            <p>Chemicals</p>
                        </div>
                        <div>
                            <img src={pharmaceuticals} alt='pharmaceuticals' />
                            <p>Pharmaceuticals</p>
                        </div>
                        <div>
                            <img src={electronics} alt='electronics' />
                            <p>Electronics</p>
                        </div>
                        <div>
                            <img className='industriesServedSpecialCase' src={whiteGoods} alt='whiteGoods' />
                            <p>White Goods</p>
                        </div>
                        <div>
                            <img className='industriesServedSpecialCase' src={textiles} alt='whiteGoods' />
                            <p>Textiles</p>
                        </div>
                        <div>
                            <img src={manufacturing} alt='manufacturing' />
                            <p>Manufacturing</p>
                        </div>
                        <div>
                            <img src={agriculture} alt='agriculture' />
                            <p>Agriculture</p>
                        </div>
                    </div>
                </span>
            </div>

            {/* Get Started Today */}
            <div className='getStartedToday'>
                <span>
                    <div>
                        <h2>Get Started Today</h2>
                        <p>Plan, Book and Finance your shipment in one place.</p>
                        <p>Experience how Cogoport’s Global Trade Platform can Turbocharge your Business.</p>    
                        <button>Get Started</button>
                    </div>
                    <img src={tradeTechHome} />
                </span>
            </div>

            {/* Display Video */}
            <div className='displayVideo'>
                <img src={videoImg} alt='videoImg' />
            </div>

            {/* Grow Faster */}
            <div className='growFaster'>
                <span>
                    <div>
                        <h3>Grow Faster with Cogoport</h3>
                        <p>Know more about Cogoport’s Global Trade PlatformTM</p>
                    </div>
                    <button>
                        Know More
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="1em" height="1em" role="img" style={{marginLeft:'5px', marginTop:'2px'}}><path class="ic-m-arrow_rotate_right_svg__ic_m_arrow_rotate_right" d="M4.375 1.724a.64.64 0 0 0-.12.045.639.639 0 0 0-.239.319c-.019.073-.026 1.483-.026 4.918 0 4.214.004 4.83.035 4.933a.532.532 0 0 0 .476.358c.199 0 .109.084 2.716-2.518 1.492-1.488 2.489-2.501 2.519-2.557a.533.533 0 0 0 .008-.432c-.054-.106-4.9-4.96-5.008-5.016a.612.612 0 0 0-.361-.05" fill-rule="evenodd"></path></svg>
                    </button>    
                </span>
            </div>

            {/* Blog Card */}
            <div className='blog'>
                <span className='container'>
                    <h3>Blogs</h3>
                    <div className='tray'>
                        <BlogCard 
                            blogImg={blog0} 
                            blogSource={"Expert Speak"} 
                            blogTitle={"Cogoport: A Global Trade Platform"} 
                            blogInfo={"Cogoport leverages technology and caters to enterprises of all sizes. Our solutions improve predictability and enhance human capabilities."} 
                            blogDate={"03 July 2023"} 
                        />
                        
                        <BlogCard 
                            blogImg={blog1} 
                            blogSource={"Industry Basics"} 
                            blogTitle={"Understanding Lean Supply Chain Management: Definition and Considerations"} 
                            blogInfo={"Lean Supply Chain Management represents the extension of Lean Thinking across the entire supply chain. So, what are the benefits and key "} 
                            blogDate={"24 June 2023"} 
                        />

                        <BlogCard 
                            blogImg={blog2} 
                            blogSource={"Industry Basics"} 
                            blogTitle={"Exploring Types of Supply Chain Management Strategies & Logistics"} 
                            blogInfo={"What are the types of supply chain management? How can we effectively apply them to your business and customer service? Let's find out together!"} 
                            blogDate={"22 June 2023"} 
                        />
                    </div>
                    <button>View All</button>
                </span>
            </div>

            {/* Footer */}
            <div className='footer'>
                <div className='boxCurve'></div>
                <div className='subscribe'>
                    <img src={subsrcibe} />
                    <div>
                        <h3>Subscribe to our newsletter now!</h3>
                        <p>Don’t miss out on the latest happenings at Cogoport.</p>
                        <span>
                            <input placeholder='Enter your email here' />
                            <button>
                                <span>
                                    Subscribe
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="30" height="18" role="img"><path class="ic-m-arrow_next_svg__ic_m_arrow_next" d="M7.945 2.517c-.186.086-.361.319-.361.481 0 .144.088.27.438.627a296.139 296.139 0 0 1 2.781 2.871c0 .007-2.029.016-4.509.02l-4.509.006-.09.056c-.252.156-.249.689.004.847l.086.053 4.509.006c2.48.004 4.509.012 4.509.02 0 .011-1.539 1.6-2.792 2.882-.338.346-.427.474-.427.616 0 .23.3.523.536.524a.46.46 0 0 0 .192-.064c.074-.043.742-.713 2.026-2.035 1.054-1.085 1.946-1.991 1.983-2.015.092-.058.197-.278.197-.412 0-.134-.105-.354-.197-.412-.037-.024-.929-.93-1.983-2.015-1.284-1.322-1.952-1.992-2.026-2.035a.36.36 0 0 0-.367-.021" fill-rule="evenodd"></path></svg>
                                </span>
                            </button>
                        </span>
                    </div>
                </div>
                <div className='footerInfo1'>
                    <FooterCard/>
                    <FooterCard/>
                    <FooterCard/>
                    <FooterCard/>
                    <FooterCard/>
                    <FooterCard/>
                </div>
                <div className='footerInfo2'>
                    <button>
                        <h3>Products</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" role="img" class="styles_arrow_icon__CKe8N "><path class="ic-m-arrow_rotate_up_svg__ic_m_arrow_rotate_up" d="M6.907 4.223a.595.595 0 0 0-.152.053c-.038.021-1.179 1.149-2.534 2.507-2.604 2.61-2.518 2.516-2.518 2.718 0 .203.182.432.384.483.151.038 9.679.037 9.83-.001a.546.546 0 0 0 .38-.484c0-.199.084-.109-2.518-2.716-1.355-1.358-2.501-2.488-2.546-2.511a.52.52 0 0 0-.326-.049" fill-rule="evenodd"></path></svg>
                    </button>

                    <button>
                        <h3>Partners</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" role="img" class="styles_arrow_icon__CKe8N "><path class="ic-m-arrow_rotate_up_svg__ic_m_arrow_rotate_up" d="M6.907 4.223a.595.595 0 0 0-.152.053c-.038.021-1.179 1.149-2.534 2.507-2.604 2.61-2.518 2.516-2.518 2.718 0 .203.182.432.384.483.151.038 9.679.037 9.83-.001a.546.546 0 0 0 .38-.484c0-.199.084-.109-2.518-2.716-1.355-1.358-2.501-2.488-2.546-2.511a.52.52 0 0 0-.326-.049" fill-rule="evenodd"></path></svg>
                    </button>

                    <button>
                        <h3>Tools</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" role="img" class="styles_arrow_icon__CKe8N "><path class="ic-m-arrow_rotate_up_svg__ic_m_arrow_rotate_up" d="M6.907 4.223a.595.595 0 0 0-.152.053c-.038.021-1.179 1.149-2.534 2.507-2.604 2.61-2.518 2.516-2.518 2.718 0 .203.182.432.384.483.151.038 9.679.037 9.83-.001a.546.546 0 0 0 .38-.484c0-.199.084-.109-2.518-2.716-1.355-1.358-2.501-2.488-2.546-2.511a.52.52 0 0 0-.326-.049" fill-rule="evenodd"></path></svg>
                    </button>

                    <button>
                        <h3>Company</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" role="img" class="styles_arrow_icon__CKe8N "><path class="ic-m-arrow_rotate_up_svg__ic_m_arrow_rotate_up" d="M6.907 4.223a.595.595 0 0 0-.152.053c-.038.021-1.179 1.149-2.534 2.507-2.604 2.61-2.518 2.516-2.518 2.718 0 .203.182.432.384.483.151.038 9.679.037 9.83-.001a.546.546 0 0 0 .38-.484c0-.199.084-.109-2.518-2.716-1.355-1.358-2.501-2.488-2.546-2.511a.52.52 0 0 0-.326-.049" fill-rule="evenodd"></path></svg>
                    </button>

                    <button>
                        <h3>Knowledge Center</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" role="img" class="styles_arrow_icon__CKe8N "><path class="ic-m-arrow_rotate_up_svg__ic_m_arrow_rotate_up" d="M6.907 4.223a.595.595 0 0 0-.152.053c-.038.021-1.179 1.149-2.534 2.507-2.604 2.61-2.518 2.516-2.518 2.718 0 .203.182.432.384.483.151.038 9.679.037 9.83-.001a.546.546 0 0 0 .38-.484c0-.199.084-.109-2.518-2.716-1.355-1.358-2.501-2.488-2.546-2.511a.52.52 0 0 0-.326-.049" fill-rule="evenodd"></path></svg>
                    </button>

                    <button>
                        <h3>Contact Us</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" role="img" class="styles_arrow_icon__CKe8N "><path class="ic-m-arrow_rotate_up_svg__ic_m_arrow_rotate_up" d="M6.907 4.223a.595.595 0 0 0-.152.053c-.038.021-1.179 1.149-2.534 2.507-2.604 2.61-2.518 2.516-2.518 2.718 0 .203.182.432.384.483.151.038 9.679.037 9.83-.001a.546.546 0 0 0 .38-.484c0-.199.084-.109-2.518-2.716-1.355-1.358-2.501-2.488-2.546-2.511a.52.52 0 0 0-.326-.049" fill-rule="evenodd"></path></svg>
                    </button>
                </div>
            </div>

            {/* Ports */}
            <div className='ports'>
                <div className='top'>
                    <div>
                        <a>Mandideep (IN) to Dammam</a>
                        <a>Mandideep (IN) to Port Sudan</a>
                        <a>Mandideep (IN) to Dublin</a>
                        <a>Mandideep (IN) to Damietta</a>
                        <a>Mandideep (IN) to Puerto Quetzal</a>
                        <a>Mandideep (IN) to Banjul</a>
                        <a>Mandideep (IN) to Iskenderun</a>
                        <a>Mandideep (IN) to Shuaiba</a>
                        <a>Mandideep (IN) to Tincan (Lagos)</a>
                        <a>Mandideep (IN) to Sydney</a>
                    </div>
                    <div>
                        <a>Mandideep (IN) to Dammam</a>
                        <a>Mandideep (IN) to Port Sudan</a>
                        <a>Mandideep (IN) to Dublin</a>
                        <a>Mandideep (IN) to Damietta</a>
                        <a>Mandideep (IN) to Puerto Quetzal</a>
                        <a>Mandideep (IN) to Banjul</a>
                        <a>Mandideep (IN) to Iskenderun</a>
                        <a>Mandideep (IN) to Shuaiba</a>
                        <a>Mandideep (IN) to Tincan (Lagos)</a>
                        <a>Mandideep (IN) to Sydney</a>
                    </div>
                    <div>
                        <a>Mandideep (IN) to Dammam</a>
                        <a>Mandideep (IN) to Port Sudan</a>
                        <a>Mandideep (IN) to Dublin</a>
                        <a>Mandideep (IN) to Damietta</a>
                        <a>Mandideep (IN) to Puerto Quetzal</a>
                        <a>Mandideep (IN) to Banjul</a>
                        <a>Mandideep (IN) to Iskenderun</a>
                        <a>Mandideep (IN) to Shuaiba</a>
                        <a>Mandideep (IN) to Tincan (Lagos)</a>
                        <a>Mandideep (IN) to Sydney</a>
                    </div>
                </div>
                <div className='bottom'>
                    <div className='left'>
                        <span>© 2023 Cogo Universe PTE. All rights reserved.</span>
                        <span><a>Terms and Conditions</a> | <a>Cookie policy</a> | <a>Privacy and Data Protection Policy</a></span>
                    </div>
                    <div className='right'>
                        <div className='language'>
                            <img src={globe} />
                            English (IN)
                        </div>

                        <div className='social'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="16" height="16" role="img"><path class="ic-m-linkedin_logo_svg__ic_m_linkedin_logo" d="M2.158 1.038c-.506.112-.92.494-1.089 1.004a1.672 1.672 0 0 0-.002.863c.147.466.501.818.986.983.098.033.198.043.42.043.353.001.544-.052.802-.221a1.45 1.45 0 0 0 .668-1.23c0-.262-.032-.401-.155-.657a1.467 1.467 0 0 0-1.63-.785m7.455 3.755c-.75.134-1.418.542-1.818 1.113l-.118.168V4.993l-1.184.006-1.185.006-.006 3.996-.005 3.996h2.38v-2.234c0-2.379.003-2.467.114-2.789.164-.475.491-.796.937-.917.07-.019.232-.041.36-.048.711-.041 1.167.306 1.369 1.041l.054.198.007 2.375.007 2.374h2.472l-.001-2.608c0-1.617-.009-2.713-.024-2.885-.13-1.476-.878-2.402-2.163-2.675-.294-.062-.94-.082-1.196-.036M1.237 8.995v4.002H3.71V4.993H1.237v4.002" fill-rule="evenodd"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="16" height="16" role="img"><path class="ic-m-facebook_logo_svg__ic_m_facebook_logo" d="M7.303 1.03c-.914.095-1.571.513-1.851 1.177-.166.396-.202.72-.202 1.84v.876H3.99v2.054h1.26v6.02h2.427V6.953h1.678l.012-.075c.007-.042.044-.454.083-.916.039-.462.078-.885.085-.94l.014-.099H7.674l.007-.74c.007-.724.009-.744.062-.853a.337.337 0 0 1 .152-.163c.093-.05.123-.052.873-.06l.775-.007V1.003l-1.02.003c-.562.002-1.111.013-1.22.024" fill-rule="evenodd"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 14" width="16" height="16" role="img"><path class="ic-m-instagram_logo_svg__ic_m_instagram_logo" d="M4.62 1.019c-.701.029-1.393.178-1.82.392-1.061.531-1.653 1.504-1.774 2.917-.018.208-.023 1.107-.017 2.859.01 2.757.004 2.626.137 3.236.098.452.241.787.495 1.159.46.672 1.164 1.109 2.09 1.297.508.103.551.105 3.234.105 2.744.001 2.716.002 3.371-.118 1.471-.269 2.483-1.459 2.615-3.078.012-.141.028-1.291.037-2.555.016-2.417.009-2.688-.086-3.336-.059-.402-.099-.563-.212-.855-.369-.955-1.2-1.647-2.272-1.894-.575-.133-.498-.13-3.161-.133-1.354-.002-2.541 0-2.637.004M9.17 2.1c1.069.057 1.516.187 1.966.568.27.23.547.668.635 1.007.046.175.097.611.128 1.096.03.453.03 2.896.001 4.084-.025 1.039-.067 1.339-.248 1.769a2.029 2.029 0 0 1-1.385 1.156c-.483.117-.615.126-1.949.136-1.703.013-4.024-.026-4.258-.071-.671-.13-1.011-.297-1.359-.665-.367-.389-.528-.845-.6-1.695-.032-.376-.032-4.626 0-4.982.031-.343.104-.759.165-.942a2.13 2.13 0 0 1 .645-.938c.178-.147.552-.339.771-.394.178-.045.684-.1 1.171-.126.507-.027 3.823-.03 4.317-.003m.79 1.014a.737.737 0 0 0-.443.457.949.949 0 0 0 .048.54.776.776 0 0 0 .328.326c.088.045.141.055.315.055.19 0 .223-.007.335-.07a.721.721 0 0 0-.083-1.305.975.975 0 0 0-.5-.003m-3.494.844c-.243.04-.619.164-.846.279-.742.374-1.284 1-1.549 1.791a2.805 2.805 0 0 0-.151.958c0 .686.188 1.276.578 1.817a3.083 3.083 0 0 0 3.377 1.148 3.155 3.155 0 0 0 1.589-1.106c.184-.245.408-.688.488-.97a3.087 3.087 0 0 0-2.448-3.919 4.053 4.053 0 0 0-1.038.002m.888 1.069a2.005 2.005 0 0 1 1.597 1.546c.059.255.053.657-.013.905a1.997 1.997 0 0 1-.595.987c-.162.153-.25.215-.44.308-.346.171-.543.218-.915.217a1.727 1.727 0 0 1-.886-.205c-.4-.2-.705-.508-.9-.91a1.678 1.678 0 0 1-.201-.782 1.856 1.856 0 0 1 .135-.839 2.04 2.04 0 0 1 1.533-1.237c.181-.03.503-.026.685.01" fill-rule="evenodd"></path></svg>
                        </div>
                    </div>
                    <span className='copyright'>© 2023 Cogo Universe PTE. All rights reserved.</span>
                </div>
            </div>
        </div>
    );
}

export default App;
