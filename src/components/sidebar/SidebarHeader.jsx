import Image from "./../UI/Image/Image"
import Svg from "./../UI/Svg/Svg"

const SidebarHeader = () => {
    return (
        <div className="sidebar__header">
            <div className="sidebar__header-profile">
                <Image className='circle' src="https://via.placeholder.com/50" alt="" />
                <div className="sidebar__header-profile-icons">
                    <Svg id='something' />
                    <Svg id='message' />
                </div>
            </div>
            <div className="searching">
                <Svg id='lupa' />
                <input type="text" placeholder="Search..." />
            </div>
        </div>
    )
}

export default SidebarHeader