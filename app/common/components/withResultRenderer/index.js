import React, { useState, useEffect, useRef } from 'react';
import { Modal, Button } from 'react-native';
import ErrorHandler from 'ms/common/components/ErrorHandler';
import LoadingAnimation from 'ms/common/components/LoadingAnimation';
import getDatasets from 'ms/common/utils/request';
import { moreDetailsUrl, newPageUrl } from 'ms/common/constants';
import MediaInfo from 'ms/common/components/mediaInfo';

/* eslint-disable react/prop-types */
const withResultRenderer = (WrappedComponent, requestUrl) => function HOC({ altMediaType = '' }) {
  const [result, setResult] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [modalErrMessage, setModalErrMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [itemDetails, setItemDetails] = useState({});
  const [isLoadingModal, setIsLoadingModal] = useState(false);

  let isRendered = useRef(false);

  const setLoadingState = isComponentLoading => setIsLoading(isComponentLoading);

  const defaultErrMessage = 'Sorry we are unable to retrieve data from resource';

  const fetchResult = async requestUrl => {
    setLoadingState(true);
    const response = await getDatasets(requestUrl);
    /* eslint-disable camelcase */
    const { status_message, results } = response;
    if (!isRendered) {
      return;
    }
    if (status_message || !results.length) {
      setErrorMessage(status_message || defaultErrMessage);
    } else {
      setResult(response);
    }

    setLoadingState(false);
  };

  useEffect(() => {
    fetchResult(requestUrl);

    return () => {
      isRendered = false;
    };
  }, []);

  const fetchNextPage = (page, total_pages) => {
    if (page === total_pages) {
      return;
    }
    const url = newPageUrl(requestUrl, page + 1);
    fetchResult(url);
  };

  const fetchPrevPage = page => {
    if (page <= 1) {
      return;
    }
    const url = newPageUrl(requestUrl, page - 1);
    fetchResult(url);
  };

  const handleOpenModal = () => setShowModal(state => !state);

  const intializeModal = () => {
    setItemDetails({});
    setModalErrMessage('');
  };

  let isModalRendered = useRef(false);
  const handleCloseModal = () => {
    setShowModal(false);
    intializeModal();
    isModalRendered = false;
  };

  const getMoreDetails = async (id, mediaType) => {
    setIsLoadingModal(true);
    /* eslint-disable react/prop-types */
    const retrieveAlt = altMediaType
      ? altMediaType.split(' ')[0].toLowerCase() : '';
    handleOpenModal();
    const url = moreDetailsUrl(id, mediaType || retrieveAlt);
    const response = await getDatasets(url);
    const { name, title, status_message } = response;
    if (!isModalRendered) {
      return;
    }
    if (status_message || (!name && !title)) {
      setModalErrMessage(status_message || defaultErrMessage);
    } else {
      setItemDetails({ ...response, mediaType: mediaType || retrieveAlt });
    }
    setIsLoadingModal(false);
  };
  /* eslint-enable camelcase */
  /* eslint-enable react/prop-types */

  if (errorMessage) {
    return (
      <ErrorHandler
        message={errorMessage}
        retryRequest={() => fetchResult(requestUrl)}
      />
    );
  }

  return (
    <>
      {isLoading ? <LoadingAnimation />
        : (
          <WrappedComponent
            altMediaType={altMediaType}
            loadedData={result}
            getMoreDetails={getMoreDetails}
            handleGetNextPage={fetchNextPage}
            handleGetPrevPage={fetchPrevPage}
          />
        )}
      <Modal
        animationType="slide"
        visible={showModal}
        onShow={() => setIsLoadingModal(false)}
      >
        {isLoadingModal ? <LoadingAnimation />
          : (
            <>
              <Button
                title="Close"
                color="red"
                onPress={handleCloseModal}
              />
              {!modalErrMessage ? <MediaInfo details={itemDetails} />
                : (
                  <ErrorHandler
                    message={modalErrMessage}
                    retryRequest={() => { }}
                  />
                )}
            </>
          )}
      </Modal>
    </>
  );
};

export default withResultRenderer;
