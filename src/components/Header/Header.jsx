export default function Header(){
    return(
        <div className="navbar bg-base-100 flex justify-between">
            <div className="">
                <a className="btn btn-ghost text-xl text-left">Recipe Calories</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-20 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}