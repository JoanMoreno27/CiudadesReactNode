import { act, fireEvent } from "react-dom/test-utils";
import ReactDOM from "react-dom/client"
import CardTitle from "./CardTitle";

describe ("Test for CardTitle component", () => {
    let container;
    let ch = <div>Hola</div>;
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
                <CardTitle children={ch}></CardTitle>
            );
        })

        const card = container.querySelector(".containerCardTitle");
        expect(card).not.toBe(null);
    });

    it.only("Mount component not child prop", () => {
        act(() => {
            ReactDOM.createRoot(container).render(<CardTitle></CardTitle>);
        })

        const card = container.querySelector(".containerCardTitle");
        expect(card).toBe(null);
    });

    it.only("Change visibility", () =>{
        act(() => {
            <CardTitle children={ch}></CardTitle>
        })
        const bt = container.querySelector(".minim");
        bt.click();
        //fireEvent.click(bt);
        const card = container.querySelector(".containerInfo");
        expect(card).toBe(null);
    })
}) 