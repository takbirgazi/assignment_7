import heroBg from '../../assets/image/hero-bg.png';
export default function Hero(){
    return(
        <div className="hero bg-cover bg-center h-[500px] rounded-xl mt-3" style={{backgroundImage: `url(${heroBg})`}}>
            <div className="hero-overlay bg-opacity-50 rounded-lg"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-2xl">
                <h1 className="mb-5 text-4xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                <p className="mb-5">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className="flex gap-5 justify-center items-center">
                    <button className="btn btn-success rounded-full">Success</button>
                    <button className="btn btn-outline border-white text-white rounded-full">Default</button>
                </div>
                </div>
            </div>
        </div>
    )
}