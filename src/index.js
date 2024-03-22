'use strict';

module.exports.hello = async event => {
  console.log('Test lambda deplyment using github copilot!');
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Test lambda deplyment using github copilot!',
      },
      null,
      2
    ),
  
  };
};