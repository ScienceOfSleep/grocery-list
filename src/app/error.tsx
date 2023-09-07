'use client'

const ErrorUI = ({error}) => {
    return(
        <div>
            {error.type}
            {error.message}
        </div>
    )
}

export default ErrorUI