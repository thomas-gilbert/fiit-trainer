import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';

export async function main(event, context, callback) {
  const params = {
    TableName: 'exercises',
    KeyConditionExpression: 'exerciseType = :type'
    ExpressionAttributeValues: {
      ':type': event.exerciseType
    },
    ProjectionExpression: 'exerciseName',
  };

  try {
    const result = await dynamoDbLib.call('query', params);

    if (result.Item) {
      // Return the retrieved item
      callback(null, success(result.Item));
    } else {
      callback(null, failure({ status: false, error: 'Item not found.' }));
    }
  } catch (e) {
    console.log(e);
    callback(null, failure({ status: false }));
  }
}
