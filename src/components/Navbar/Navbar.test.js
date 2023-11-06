import Navbar from "./Navbar";
import ReactDOM from "react-dom/client"
import { act } from "react-dom/test-utils";
import CiudadesContextProvider from "../../context/CiudadesContext";
import NavLink from "react-router-dom"
import jest from ""

jest.mock("react-router-dom", () =>{
    return(
        NavLink: 
})

describe("Test for Navbar component", () =>{
    let container;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });
    afterEach(()=>{
        document.body.removeChild(container);
        container = null;
    });


    it("Mount component", () => {
        
        NavLink.mockImplementation
        act(()=>{
            ReactDOM.createRoot(container).render(<Navbar></Navbar>);
        })
        const navbar = container.querySelector("navBar");
        expect(navbar).not.toBe(null);
    });
})