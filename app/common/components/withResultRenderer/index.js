import React, { useState, useEffect } from 'react';
import ErrorHandler from 'ms/common/components/ErrorHandler';
import LoadingAnimation from 'ms/common/components/LoadingAnimation';
import { getDatasets } from 'ms/common/utils/request';

const withResultRenderer = (WrappedComponent, requestUrl) => {
  return function HOC(props) {
    const [result, setResult] = useState([])
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      fetchResult();
    }, [])

    const setLoadingState = isComponentLoading =>
      setIsLoading(isComponentLoading)

    const fetchResult = async () => {
      const response = await getDatasets(requestUrl)
      if(response.status_message) {
        setErrorMessage(status_message);
      } else {
        setResult(response);
      }

      return setLoadingState(false);
    }

    if (errorMessage) {
      return (
        <ErrorHandler
          message={status_message || errorMessage}
          retryRequest={() => fetchResult()} />
      )
    }

    return (
      <>
        {isLoading && <LoadingAnimation />}
        <WrappedComponent {...props} loadedData={result} />
      </>
    )
  }
}

export default withResultRenderer;