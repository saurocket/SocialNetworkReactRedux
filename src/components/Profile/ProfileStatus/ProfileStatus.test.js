import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("Profile Status Component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('it-kamasutra.com');
    });
    test("Profile  must have span for start", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com"/>);
        const root = component.root;
        let span =  root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation <input> should't be displated", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com"/>);
        const root = component.root;
        expect(() =>{
            let input =  root.findByType("input");
        } ).toThrow()
    });
    test("Profile  create <span> after init", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com"/>);
        const root = component.root;
        let span =  root.findByType("span");
        expect(span.children[0]).toBe('it-kamasutra.com');
    });
    test("imput should be displayded in edinMpode ", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com"/>);
        const root = component.root;
        let span =  root.findByType("span");
        span.props.onDoubleClick();
        let input =  root.findByType("input");
        expect(input.props.value).toBe('it-kamasutra.com');
    });

    test("callBack should be cold", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="it-kamasutra.com" updateStatus={mockCallback}/>);
        const instans = component.getInstance();
        instans.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });






});