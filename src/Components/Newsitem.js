import React from "react"
const Newsitem =(props)=> {

  
    let {title,description,imageUrl,newsUrl , author , date} = props
    return (    
      <div>
                
            <div className="card shadow-sm" style={{height:'500px' , overflow: 'hidden'}}>
                <img src={!imageUrl?"https://www.livemint.com/lm-img/img/2023/08/16/600x338/se_1692180854951_1692180855175.jpg":imageUrl} alt="..." style={{height:'250px'}}/>
                <div className="card-body">
                    <h5> 
                        <a  rel='noreferrer' href={newsUrl} target="_blank" className='card-title'>{title}</a>
                    </h5>
                    <p className="card-text">{description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-body-secondary text-danger">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small>
                    </div>
                </div>
            </div>
               
        </div>
    )
}

export default Newsitem
