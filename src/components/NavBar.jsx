import { motion } from "framer-motion";

const NavBar = () => {
    return (
        <motion.nav
            className="navbar navbar-expand-lg ps-4 pe-4 navbar-customize"
            style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{'<'}
                    <span className="text-info fs-4">Jay</span> @dev{'/>'}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
                            <motion.li
                                className="nav-item"
                                key={item}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}  
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <a className="nav-link" href={`#${item.toLowerCase()}`}>{item}</a>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.nav>
    );
}

export default NavBar;
