import profilepic from './assets/pic.jpg'

function Card(){
    return(
        <div className="card">
            <img className='card-img' src={profilepic} alt="profileimage" />
            <h2 className='card-head'>Eyob Zewde</h2>
            <p className='card-dis'>I'm a web developer and Frontend developer.
                I have greate skil in HTML, CSS, JavaScript, React js
            </p>

        </div>
    )
}
export default Card