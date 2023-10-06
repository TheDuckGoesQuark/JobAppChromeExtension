// import UserInfo = chrome.identity.UserInfo;

import {SERVER_DOMAIN} from "../../shared/consts.ts";
import {GetQuestionAnswerResponse} from "../../shared/models.ts";

const getAuthToken = () => new Promise<string | undefined>((resolve) =>
    chrome.identity.getAuthToken({interactive: true}, resolve))

const getHeaders = (authToken: string) => ({"Authorization": `Bearer ${authToken}`})
// const getProfileUserInfo = () => new Promise<UserInfo | undefined>((resolve) =>
//     chrome.identity.getProfileUserInfo({accountStatus: chrome.identity.AccountStatus.ANY}, resolve))

const getQueryAnswer = async (question: string, authToken: string) => {
    const searchParams = new URLSearchParams({question})
    const res = await fetch(`${SERVER_DOMAIN}/answers?${searchParams}`, {
        headers: getHeaders(authToken)
    })
    const body = await res.json()
    return (body as GetQuestionAnswerResponse)
}

export {
    getQueryAnswer,
    getAuthToken
}