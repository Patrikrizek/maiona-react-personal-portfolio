import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MailchimpForm = () => {
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <React.Fragment>
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <div>
                        <SimpleForm onSubmitted={formData => subscribe(formData)} />
                        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
                        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                    </div>
                )}
            />
        </React.Fragment>
    );
}

export default MailchimpForm;