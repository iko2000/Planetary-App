



function Stats(props:any) {


    return (
        <>
        <div className="statbox">
             <div className="statistic"> 
             <label>ROTATION TIME</label>
             <p>{props.rotation}</p>
             </div>
             <div className="statistic"> 
             <label>REVOLUTION TIME</label>
             <p>{props.revolution}</p>
             </div>
             <div className="statistic"> 
             <label>RADIUS</label>
             <p>{props.radius}</p>
             </div>
             <div className="statistic"> 
             <label>AVERIGE TEMP</label>
             <p>{props.temp}</p>
             </div>

        </div>
        </>
    )
}


export default Stats;