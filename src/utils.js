const checkValidUpdates = (updates, allowedUpdates) => {
  const failedUpdates = [];
  updates.forEach(update => {
    const validUpdate = allowedUpdates.includes(update);
    if (!validUpdate) {
      failedUpdates.push(update);
    }
  });
  return failedUpdates;
};

module.exports = checkValidUpdates;
