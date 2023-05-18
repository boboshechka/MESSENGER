import SidebarContent from "./SidebarContent"
import SidebarHeader from "./SidebarHeader"


const Sidebar = () => {

    return (
        <aside className="sidebar">
            <SidebarHeader />
            <SidebarContent />
        </aside>
    )
}

export default Sidebar