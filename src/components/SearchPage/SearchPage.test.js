import InfoClima from "../CardClima/InfoClima";
import InfoGeo from "../CardGeo/InfoGeo";
import InfoPolitica from "../CardPolitica/InfoPolitica";
import React from "react"
import SearchPage from "./SearchPage";
import { act } from "react-dom/test-utils";
import SearchBar from "../SearchBar/SearchBar";
import { UseFetchCiudad } from "../../hooks/UseFetchCiudad";
import ReactDOM from "react-dom/client"
import CiudadesContext from "../../context/CiudadesContext";

//jest.mock('../../context/CiudadesContext', () => ({  __esModule: true,  Context: jest.fn(),}));

jest.mock("../CardClima/InfoClima", () => ({  __esModule: true,  InfoClima: jest.fn(),}));

jest.mock("../CardGeo/InfoGeo", () => ({  __esModule: true,  InfoGeo: jest.fn(),}));

jest.mock("../CardPolitica/InfoPolitica", () => ({  __esModule: true,  InfoPolitica: jest.fn(),}));

jest.mock("../SearchBar/SearchBar", () => ({  __esModule: true,  SearchBar: jest.fn(),}));

jest.mock("../../context/CiudadesContext", () => ({ __esModule: true,  CiudadesContext: jest.fn(),}))

jest.mock("../../hooks/UseFetchCiudad",()=>{
    return{
        UseFetchCiudad: jest.fn()
    }
})

describe("test for SearchPage", () =>{

    let container;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });
    afterEach(()=>{
        document.body.removeChild(container);
        container = null;
    });

    it.only("Mount component", () => {
        CiudadesContext.mockImplementation(()=>({
            addHist: ()=>{}
        }))
        InfoGeo.mockImplementation(()=>{
            return <div></div>
        });
        InfoClima.mockImplementation(()=>{
            return <div></div>
        })
        InfoPolitica.mockImplementation(()=>{
            return <div></div>
        })
        UseFetchCiudad.mockImplementation(()=>{
            return{
                doFetchCiudad: jest.fn(),
                data: {places: [1,2]},
                isLoading: false
            }
        });
        SearchBar.mockImplementation(()=>{
            return <div id="SearchBar"></div>
        })

        act(()=>{
            ReactDOM.createRoot(container).render(<SearchPage></SearchPage>);
        })
        const searchPage = container.querySelector("flexContainer");
        expect(searchPage).not.toBe(null);
    })
})



