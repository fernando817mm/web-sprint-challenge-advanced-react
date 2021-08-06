import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    const formHeader = screen.getByText(/checkout form/i);
    expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    const firstName = 'Fernando';
    const lastName = 'Martinez';
    const address = '123 Something St';
    const city = 'Washington';
    const state = 'Chicago';
    const zip = '00000';

    const firstNameInput = screen.getByLabelText(/first name:/i);
    const lastNameInput = screen.getByLabelText(/last name:/i);
    const addressInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    const zipInput = screen.getByLabelText(/zip:/i);
    const submitBtn = screen.getByRole('button');

    userEvent.type(firstNameInput, firstName);
    userEvent.type(lastNameInput, lastName);
    userEvent.type(addressInput, address);
    userEvent.type(cityInput, city);
    userEvent.type(stateInput, state);
    userEvent.type(zipInput, zip);
    userEvent.click(submitBtn);

    const successDisplay = screen.getByTestId('successMessage');
    expect(successDisplay).toHaveTextContent(firstName, lastName, address, city, state, zip);
});
