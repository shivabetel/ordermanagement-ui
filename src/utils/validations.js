const customRegEx = {
    emailRegex: /[A-Z a-z 0-9._-]*@[A-Z0-9.-]*.+[a-z 0-9 A-Z]$/
}

export const validateEmail = (emailId) => customRegEx.emailRegex.test(emailId)