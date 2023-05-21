import sourcepic from "../assets/icon-source.svg";


function Photobox (props:any) {


    return (
        <>
            <div className="photo"> 
            <img className={props.cl}  src={props.src} />
            {props.needed ? <img className="multy" src={props.three} /> : null}

            </div>
             <div className="info"> 
             <div className="pioner">
                <div className="head">
                <h2>{props.name}</h2>
                </div>
             
              <div className="description"><p>{props.text}</p></div>
              <div className="source">Source : <a href={props.source}>WIKIPEDIA <img src={sourcepic}/></a></div>
              </div>
              <div className="seconder">
             <div className="btns"> 
             <div className={props.one ? props.class : 'steps'} onClick={props.step1}><p className="num">01.</p><p className="txt">OVERVIEW</p> </div>
             <div className={props.two ? props.class : 'steps'} onClick={props.step2}><p className="num">02.</p><p className="txt">INTERNAL STRUCTURE </p> </div>
             <div className={props.threes ? props.class : 'steps'} onClick={props.step3}><p className="num">03.</p><p className="txt">SURFACE GEOLOGY </p> </div>
             </div>
             </div>
             </div>
        </>
    )

}



export default Photobox;