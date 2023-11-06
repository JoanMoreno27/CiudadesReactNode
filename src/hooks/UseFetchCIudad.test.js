import React ,{ useEffect } from "react";
import { UseFetchCiudad } from "./UseFetchCiudad"
import { UseFetch } from "./UseFetch"
import {act} from "react-dom/test-utils"
import ReactDOM from "react-dom/client"

jest.mock("./UseFetch", () => {
    return{
        UseFetch: jest.fn()
    }
});

const ComponentePrueba = () => {
    const {data, doFetchCiudad} = UseFetchCiudad();

    useEffect(()=>{
        doFetchCiudad();
    },[])

    return(
        <div id="idPrueba">
            <div id="idDataPrueba">{JSON.stringify(data)}</div>
        </div>
    )
}

describe("Test for useFetchCiudad", () =>{
    let container;

    beforeEach(() => {
        container = document.createElement("div")
        document.body.appendChild(container);
    })

    afterEach(()=>{
        document.body.removeChild(container);
        container = null;
    })

    it("Mount component", () => {
        UseFetch.mockImplementation(() => ({
            fetchurl: jest.fn(),
            data: {},
            isLoading: false,
            hasError: false,
        }))

        act(() => {
            ReactDOM.createRoot(container).render(<ComponentePrueba></ComponentePrueba>)
        });
        const componentePrueba = container.querySelector("idPrueba")
        expect(componentePrueba).toBe(null);
    })

    
})
