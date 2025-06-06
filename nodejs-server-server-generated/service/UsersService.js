'use strict';


/**
 * Delete user by ID
 *
 * id String 
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
 * id String 
 * returns inline_response_200_1
 **/
exports.listJobApplicationsForUser = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "user_id" : "user_id",
    "job_id" : "job_id",
    "id" : "id",
    "status" : "status"
  }, {
    "user_id" : "user_id",
    "job_id" : "job_id",
    "id" : "id",
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
 * id String 
 * returns inline_response_200
 **/
exports.listJobsForUser = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "items" : [ {
    "creator_user_id" : "creator_user_id",
    "pets" : [ "", "" ],
    "start_time" : "start_time",
    "activity" : "activity",
    "end_time" : "end_time",
    "id" : "id"
  }, {
    "creator_user_id" : "creator_user_id",
    "pets" : [ "", "" ],
    "start_time" : "start_time",
    "activity" : "activity",
    "end_time" : "end_time",
    "id" : "id"
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
 * id String 
 * returns User
 **/
exports.modifyUserWithId = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "full_name" : "full_name",
  "roles" : [ "roles", "roles" ],
  "id" : "id",
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
 * Create a new session
 *
 * body Session_body  (optional)
 * returns Session
 **/
exports.startSession = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user_id" : "user_id",
  "auth_header" : "auth_header"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get user by ID
 *
 * id String 
 * returns User
 **/
exports.viewUserWithId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "password" : "password",
  "full_name" : "full_name",
  "roles" : [ "roles", "roles" ],
  "id" : "id",
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

