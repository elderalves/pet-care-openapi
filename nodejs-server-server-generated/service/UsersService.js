'use strict';


/**
 * Delete user by ID
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteUserWithId = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get job applications made by user
 *
 * id Integer 
 * returns inline_response_200_1
 **/
exports.listJobApplicationsForUser = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "user_id" : 1,
    "job_id" : 6,
    "id" : 0,
    "status" : "status"
  }, {
    "user_id" : 1,
    "job_id" : 6,
    "id" : 0,
    "status" : "status"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get jobs created by user
 *
 * id Integer 
 * returns inline_response_200
 **/
exports.listJobsForUser = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "creator_user_id" : 6,
    "start_time" : "start_time",
    "activity" : "activity",
    "end_time" : "end_time",
    "id" : 0,
    "dog" : {
      "size" : 1,
      "name" : "name",
      "breed" : "breed",
      "age" : 5
    }
  }, {
    "creator_user_id" : 6,
    "start_time" : "start_time",
    "activity" : "activity",
    "end_time" : "end_time",
    "id" : 0,
    "dog" : {
      "size" : 1,
      "name" : "name",
      "breed" : "breed",
      "age" : 5
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update user by ID
 *
 * body User 
 * id Integer 
 * returns User
 **/
exports.modifyUserWithId = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "full_name" : "full_name",
  "roles" : [ "roles", "roles" ],
  "id" : 0,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new user
 *
 * body User 
 * no response value expected for this operation
 **/
exports.registerUser = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get user by ID
 *
 * id Integer 
 * returns User
 **/
exports.viewUserWithId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "password" : "password",
      "full_name" : ["full_name"],
      "roles" : [ "roles", "roles" ],
      "id" : 0,
      "email" : "email"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

