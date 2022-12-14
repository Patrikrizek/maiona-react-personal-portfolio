import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const MailchimpForm = () => {
    const SimpleForm = () => <MailchimpSubscribe url={'url'} />

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