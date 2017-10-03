import AWS from 'aws-sdk';

AWS.config.update({ region: 'eu-west-2' });

export function call(action, params) {
	console.log('hi');
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  return dynamoDb[action](params).promise();
}