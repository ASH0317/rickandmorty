import React from "react";
import ErrorMassage from "../components/ErrorMassage/ErrorMassage";

export const withErrorApi = View => {
    return props => {
        const [errorApi, setErrorApi] = React.useState(false);

        return (
            <>
                {errorApi
                    ? <ErrorMassage />
                    : (
                        <View
                            setErrorApi={setErrorApi}
                            {...props}
                        />
                    )
                }
            </>
        )
    }
}