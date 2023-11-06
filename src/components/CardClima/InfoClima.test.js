import { act, fireEvent } from "react-dom/test-utils";
import ReactDOM from "react-dom/client"
import InfoClima from "./InfoClima";
import { Bar } from "react-chartjs-2"
import Chart from 'chart.js/auto';

describe("Test for InfoClima component",()=>{
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
                <InfoClima ciudad={ch}></InfoClima>
            );
        })

        const card = container.querySelector(".infoClima");
        expect(card).not.toBe(null);
    });

    it.only("Mount component", () => {
        act(()=>{
            ReactDOM.createRoot(container).render(
                <InfoClima></InfoClima>
            );
        })

        const card = container.querySelector(".infoClima");
        expect(card).toBe(null);
    });
})