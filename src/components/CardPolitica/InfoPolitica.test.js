import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom/client"
import InfoPolitica from "./InfoPolitica";


describe("Test for InfoGeo component",()=>{
    let container;
    let ch = {"state abbreviation": "AN"}
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(()=>{
        document.body.removeChild(container);
        container = null;
    });

    it.only("Mount component", () => {
        act(()=>{
            ReactDOM.createRoot(container).render(
                <InfoPolitica ciudad={ch}></InfoPolitica>
            );
        })

        const card = container.querySelector(".flex-container-po");
        expect(card).not.toBe(null);
    });

    it.only("Mount component no props", () => {
        act(()=>{
            ReactDOM.createRoot(container).render(
                <InfoPolitica></InfoPolitica>
            );
        })

        const card = container.querySelector(".flex-container-po");
        expect(card).toBe(null);
    });
})