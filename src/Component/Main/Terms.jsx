import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Terms = () => {
    let [check, setcheck] = useState(false);
    let navigate = useNavigate();

    let handle = () => {
        setcheck(!check);
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        if (check) {
            console.log("User agreed to the terms");
            navigate("/");
        } else {
            console.log("User did not agree to the terms");
        }
    }

    return (
        <div>
            <p>
                By signing up, you agree to our Terms and Conditions and Privacy Policy.
                Please read them carefully. By checking this box, you confirm that you
                have understood and accepted our terms. If you do not agree, you will
                not be able to complete the registration process. We value your privacy
                and security.
            </p>
            <form onSubmit={handleSubmit}>
                <input type="checkbox" name="" id="" onChange={handle} />
                <label htmlFor="">
                    I have read and agree to the{" "}
                    <a href="/terms-and-conditions" target="_blank">
                        Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="/privacy-policy" target="_blank">
                        Privacy Policy
                    </a>
                    .
                </label>
                <br />
                <br />
                <input type="button" value="Ok" disabled={!check} />
            </form>
        </div>
    );
};

export default Terms;
