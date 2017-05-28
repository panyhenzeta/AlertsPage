export const POPUP_IS_OPEN = "POPUP_IS_OPEN"

export function setPopupIsOpen(bool){
    return{
        type: POPUP_IS_OPEN,
        payload: bool
    }
}

export const ALERT_DETAIL = "ALERT_DETAIL";

export function setAlertDetail(alertObj){
     return{
        type: ALERT_DETAIL,
        payload: alertObj
    }
}