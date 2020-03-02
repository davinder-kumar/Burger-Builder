export const updateObject = (oldObject , updatedProperties) =>{

    return {
        ...oldObject,
        ...updatedProperties
    }

}

export const checkValidity = (value, rules) => {
    let isValid = true
    if (!rules) {
        return true;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid
    }
    if (rules.minLength) {
        isValid = value.trim().length >= rules.minLength && isValid
    }
    if (rules.maxLength) {
        isValid = value.trim().length <= rules.maxLength && isValid
    }
    if (rules.email) {
        var re = /\S+@\S+\.\S+/;
        isValid = re.test(value) && isValid
    }

    return isValid

}