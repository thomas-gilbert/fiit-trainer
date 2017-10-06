import * as dynamoDbLib from './libs/dynamodb-lib';
import { success, failure } from './libs/response-lib';

export async function main(event, context, callback) {
  const params = {
    TableName: 'exerciseList',
    IndexName: 'exerciseType-index',
    KeyConditionExpression: 'exerciseType = :exerciseType',
    ExpressionAttributeValues: {
      ':exerciseType': event.exerciseType,
    },
    ProjectionExpression: 'exerciseName',
  };

  try {
    const result = await dynamoDbLib.call('query', params);

    if (result.Items) {
      // Return the matching list of items in response body
      callback(null, success(result.Items));
    } else {
      callback(null, failure({ status: false, error: 'Items not found.' }));
    }
  } catch (e) {
    callback(null, failure({ status: false }));
  }
}
