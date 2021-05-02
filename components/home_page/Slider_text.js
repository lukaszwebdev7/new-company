

const SliderText = () => {
    return (
        <div className="xxl:ml-0">
            <div className="flex justify-center mt-4">
                <link href="https://fonts.googleapis.com/css2?family=Jacques+Francois+Shadow&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Londrina+Outline&family=Rozha+One&display=swap" rel="stylesheet"></link>
                <style jsx>{`
            
        .container {
            height: 40vh;
            position: relative;
            overflow: hidden;
        }
                    h1 {
                        position: absolute;
                        display: inline-block;
                        top: 20%;
                        width: 130%;
                        left: 0;
                        right: 0;
                        text-align: right;
                        font-size: 24px;
                        border-style: none;
                        animation: text 72s linear infinite both reverse;
                        z-index: 1;
                    }

                    h2 {
                        position: absolute;
                        display: inline-block;
                        top: 1%;
                        width: 130%;
                        left: 0;
                        right: 0;
                        text-align: right;
                        font-size: 24px;
                        border-style: none;
                        animation: text 80s linear infinite both reverse;
                        z-index: 1;
                    }

                    h3 {
                        position: absolute;
                        display: inline-block;
                        top: 40%;
                        width: 130%;
                        left: 0;
                        right: 0;
                        text-align: right;
                        // transform: translate(100%, 0);
                        font-size: 24px;
                        border-style: none;
                        animation: text 60s linear infinite both reverse;
                        z-index: 1;
                    }

                    h4 {
                        position: absolute;
                        display: inline-block;
                        top: 60%;
                        width: 130%;
                        left: 0;
                        right: 0;
                        text-align: right;
                        font-size: 24px;
                        border-style: none;
                        animation: text 88s linear infinite both reverse;
                        z-index: 1;
                    }


                    h1:nth-child(2) {
                        animation-delay: -54s;
                    }
            
                    h1:nth-child(3) {
                        animation-delay: -36s;
                    }
            
                    h1:nth-child(4) {
                        animation-delay: -18s;
                    }
            

                    h2:nth-child(2) {
                        animation-delay: -60s;
                    }
            
                    h2:nth-child(3) {
                        animation-delay: -40s;
                    }
            
                    h2:nth-child(4) {
                        animation-delay: -20s;
                    }


                    h3:nth-child(2) {
                        animation-delay: -45s;
                    }
            
                    h3:nth-child(3) {
                        animation-delay: -30s;
                    }
            
                    h3:nth-child(4) {
                        animation-delay: -15s;
                    }

                    
                    h4:nth-child(2) {
                        animation-delay: -66s;
                    }
            
                    h4:nth-child(3) {
                        animation-delay: -44s;
                    }
            
                    h4:nth-child(4) {
                        animation-delay: -22s;
                    }
            

      .sone {
        position: absolute;
        width: 100%;
        height: 25vh;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: black;
        overflow: hidden;
    }
    .stwo {
        position: absolute;
        width: 140%;
        height: 25vh;
        top: 20%;
        right: -30%;
        color: black;
        overflow-hidden;
    }

    .sthree {
        position: absolute;
        width: 140%;
        height: 25vh;
        top: 20%;
        right: -30%;
        color: black;
        overflow-hidden;
    }

    .sfour {
        position: absolute;
        width: 100%;
        height: 25vh;
        top: 30%;
        color: black;
        overflow: hidden;
    }
      @keyframes text {
        0% {
            /* transform: translate(100%, - 50%) */
            transform: translate(120%, -50%)
        }

        6% {
            /* transform: translate(100%, -50%) */
            transform: translate(100%, -50%)
        }

        8% {
            transform: translate(0, -50%)
        }

        /* 30% {
            transform: translate(0, - 50%)
        } */

        97% {
            transform: translate(-100%, -50%)
        }

        100% {
            transform: translate(-100%, -50%);
        }
    }
    `}</style>
                <div className="container xl:w-11/12">
                    <section className="sone ">
                        <h1 className="my-2" style={{ fontFamily: "Rozha One" }}>Wiedza</h1>
                        <h1 className="my-2" style={{ fontFamily: "Jacques Francois Shadow" }}>Wiedza</h1>
                        <h1 className="my-2" style={{ fontFamily: "Rozha One" }}>Wiedza</h1>
                        <h1 className="my-2" style={{ fontFamily: "Jacques Francois Shadow" }} >Wiedza</h1>
                    </section>
                    <section className="stwo">
                        <h2 className="my-2" style={{ fontFamily: "Jacques Francois Shadow" }} >Strategia</h2>
                        <h2 className="my-2" style={{ fontFamily: "Rozha One" }}>Strategia</h2>
                        <h2 className="my-2" style={{ fontFamily: "Jacques Francois Shadow" }}>Strategia</h2>
                        <h2 className="my-2" style={{ fontFamily: "Rozha One" }}>Strategia</h2>
                    </section>
                    <section className="sthree">
                        <h3 className="my-2" style={{ fontFamily: "Rozha One" }} >Zaufanie</h3>
                        <h3 className="my-2" style={{ fontFamily: "Jacques Francois Shadow" }}>Zaufanie</h3>
                        <h3 className="my-2" style={{ fontFamily: "Rozha One" }} >Zaufanie</h3>
                        <h3 className="my-2" style={{ fontFamily: "Jacques Francois Shadow" }}>Zaufanie</h3>
                    </section>
                    <section className="sfour">
                        <h4 className="my-2" style={{ fontFamily: "Jacques Francois Shadow" }}>Wynik</h4>
                        <h4 className="my-2" style={{ fontFamily: "Rozha One" }} >Wynik</h4>
                        <h4 className="my-2" style={{ fontFamily: "Jacques Francois Shadow" }}>Wynik</h4>
                        <h4 className="my-2" style={{ fontFamily: "Rozha One" }}>Wynik</h4>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default SliderText;