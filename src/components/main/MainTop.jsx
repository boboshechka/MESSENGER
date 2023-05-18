import Image from "../UI/Image/Image"
import Svg from "../UI/Svg/Svg"

const MainTop = () => {
    return (
        <div className="main__top">
            <div className="main-profile">
                <Image className='circle' src="https://via.placeholder.com/50" alt="" />
                <div className="main-profile__info">
                    <h4 >Damir</h4>
                    <p >Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            <div className="sidebar__header-profile-icons">
                <Svg id='lupa' />
                <Svg id='message' />
            </div>
        </div>
    )
}

export default MainTop