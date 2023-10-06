// import UserInfo = chrome.identity.UserInfo;

import {SERVER_DOMAIN} from "../../shared/consts.ts";
import {GetQuestionAnswerResponse} from "../../shared/models.ts";

const getAuthToken = async () => chrome.identity.getAuthToken({interactive: true})

const getHeaders = (authToken: string, clientId: string) => ({
    "Authorization": `Bearer ${authToken}`,
    "ClientId": clientId
})
// const getProfileUserInfo = () => new Promise<UserInfo | undefined>((resolve) =>
//     chrome.identity.getProfileUserInfo({accountStatus: chrome.identity.AccountStatus.ANY}, resolve))

const getQueryAnswer = async (question: string, authToken: string, clientId: string) => {
    const searchParams = new URLSearchParams({question})
    const res = await fetch(`${SERVER_DOMAIN}/answers?${searchParams}`, {
        headers: getHeaders(authToken, clientId)
    })
    const body = await res.json()
    return (body as GetQuestionAnswerResponse)
}

export {
    getQueryAnswer,
    getAuthToken
}