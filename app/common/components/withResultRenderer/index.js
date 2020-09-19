import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-native';
import ErrorHandler from 'ms/common/components/ErrorHandler';
import LoadingAnimation from 'ms/common/components/LoadingAnimation';
import { getDatasets } from 'ms/common/utils/request';
import { moreDetailsUrl } from 'ms/common/constants';
import MoreDetails from 'ms/common/components/moreDetails';

const withResultRenderer = (WrappedComponent, requestUrl) => {
  return function HOC(props) {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [itemDetails, setItemDetails] = useState({});
    const [isLoadingDetails, setIsLoadingDetails] = useState(false);

    useEffect(() => {
      fetchResult();
    }, [])

    const setLoadingState = isComponentLoading =>
      setIsLoading(isComponentLoading)

    const fetchResult = async () => {
      const response = await getDatasets(requestUrl);
      const { results, status_message } = response;
      if (status_message) {
        setErrorMessage(status_message);
      } else {
        setResult(results);
      }

      return setLoadingState(false);
    }

    const getMoreDetails = async (id) => {
      setShowModal(state => !state);
      setIsLoadingDetails(state => !state);
      const url = moreDetailsUrl(id);
      const response = await getDatasets(url);
      setItemDetails(response);
      setIsLoadingDetails(false);
    }

    if (errorMessage) {
      return (
        <ErrorHandler
          message={errorMessage}
          retryRequest={() => fetchResult()} />
      )
    }

    return (
      <>
        {isLoading && <LoadingAnimation />}
        <WrappedComponent {...props}
          loadedData={result}
          getMoreDetails={getMoreDetails} />
        <Modal
          animationType="slide"
          visible={showModal}
          onShow={() => setIsLoadingDetails(false)}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        // }}
        >
          {isLoadingDetails ? <LoadingAnimation /> :
            (<>
              <Button
                title="Close"
                onPress={() => setShowModal(false)} />
              <MoreDetails details={itemDetails} />
            </>
            )}
        </Modal>
      </>
    )
  }
}

export default withResultRenderer;