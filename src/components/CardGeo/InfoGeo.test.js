import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom/client"
import InfoGeo from "./InfoGeo";


describe("Test for InfoGeo component",()=>{
    let container;
    let ch = {latitude: 20,
    longitude: 30}
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
                <InfoGeo ciudad={ch}></InfoGeo>
            );
        })

        const card = container.querySelector(".flex-container-geo");
        expect(card).not.toBe(null);
    });

    it.only("Mount component no props", () => {
        act(()=>{
            ReactDOM.createRoot(container).render(
                <InfoGeo></InfoGeo>
            );
        })

        const card = container.querySelector(".flex-container-geo");
        expect(card).toBe(null);
    });
})