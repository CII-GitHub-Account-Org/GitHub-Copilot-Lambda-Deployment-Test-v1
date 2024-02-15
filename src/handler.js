'use strict';

module.exports.handler = async (event, context) => {
  // Your code here
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from Lambda!',
    }),
  };
};