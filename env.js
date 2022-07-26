const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: '9000',
    Meta_WA_accessToken:'EAAHjESF3dpIBAJG7ZBiQ92gkrZAu6pWOmDZC8mKAHMBFLnZCBmFqBXfqMJMfGyOZBUDHepE23QTuFLxZC58CsKqWJjODl7LCBZCKHqa0T94x2GR5racMSitK31IRCONY81PFO8CP5ZCvAFSNZATz5fTNo9XYvFzFhLNNO8WCQG7ynNCwCyshihFTbiNEztGtOJ4dM2amWajDj3gZDZD',
    Meta_WA_SenderPhoneNumberId: '100814659398566',
    Meta_WA_wabaId: '109749331821401',
    Meta_WA_VerifyToken: 'YouCanSetYourOwnToken',
};

const fallback = {
    ...process.env,
    NODE_ENV: undefined,
};

module.exports = (environment) => {
    console.log(`Execution environment selected is: "${environment}"`);
    if (environment === 'production') {
        return production;
    } else if (environment === 'development') {
        return development;
    } else {
        return fallback;
    }
};