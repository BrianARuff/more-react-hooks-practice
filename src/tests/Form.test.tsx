import * as React from "react";
import {render, screen} from "@testing-library/react";
import Form from "../components/Form";
import '@testing-library/jest-dom/extend-expect';

describe("The Form Component", () => {
  it("shows 'Username' in the username label", () => {
    render(<Form/>)
    const usernameLabel = screen.getByText("Username")
    expect(usernameLabel.textContent).toBe("Username");
    expect(usernameLabel.textContent).not.toBe("");
    expect(usernameLabel).toBeInTheDocument();
    expect(screen.queryByText("Username2")).toBeNull()
  })
  it("show 'Password' in the password label", () => {
    render(<Form/>)
    const passwordLabel = screen.getByText("Password");
    expect(passwordLabel.textContent).toBe("Password");
    expect(passwordLabel.textContent).not.toBe("");
    expect(passwordLabel).toBeInTheDocument()
    expect(screen.queryByText("Password2")).toBeNull();
  })
})