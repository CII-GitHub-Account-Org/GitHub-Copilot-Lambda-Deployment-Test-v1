'use strict';

module.exports.hello = async event => {
  console.log('Hello from Lambda!');
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello from Lambda!',
      },
      null,
      2
    ),
  
  };
};