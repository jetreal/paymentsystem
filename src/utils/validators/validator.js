export const required = value => {
  if (value) return undefined;

  return '* Field is required'
}


export const validateLength = (minLength = 0, maxLength) => (value = 0) => {
  if (value.length < minLength && value.length !== 0) {
    return `* Min length is ${minLength} symbols`
  }
  else if (value.length > maxLength ) {
    return `* Max length is ${maxLength} symbols`
  } else {
    return undefined
  };
}

export const isEmail = (values = 0) => {
  if (!values) {
    return undefined
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
    return 'Invalid email address'
  } else if (values.length === 0) {
    return ' '
  }
}

