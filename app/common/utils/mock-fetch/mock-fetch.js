const createMockResponseDelayed = (response, delayMs) => {
  const {
    status, statusText, ok, body,
  } = response;

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        {
          status,
          statusText,
          ok,
          json: () => Promise.resolve(body),
          text: () => Promise.resolve(JSON.stringify(body)),
        },
      );
    }, delayMs);
  });
};

export default createMockResponseDelayed;