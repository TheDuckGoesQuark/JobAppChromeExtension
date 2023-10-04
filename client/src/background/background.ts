chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({url: "index.html"})
})

let user_signed_in = false;
chrome.identity.onSignInChanged.addListener(function (_, signedIn) {
    user_signed_in = signedIn;
});
chrome.runtime.onMessage
    // @ts-ignore
    .addListener((request, sender, sendResponse) => {
        if (request.message === 'get_auth_token') {
            chrome.identity
                .getAuthToken({interactive: true}, function (token) {
                    console.log(token);
                });
        } else if (request.message === 'get_profile') {
            chrome.identity
                .getProfileUserInfo({accountStatus: chrome.identity.AccountStatus.ANY}, function
                (user_info) {
                    console.log(user_info);
                });
        }
    });