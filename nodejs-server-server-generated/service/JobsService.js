'use strict';


/**
 * Create a new job
 *
 * body Job 
 * no response value expected for this operation
 **/
exports.createJob = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create a new job application
 *
 * body JobApplication  (optional)
 * id Integer 
 * no response value expected for this operation
 **/
exports.createJobApplication = function(body,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete job by ID
 *
 * id Integer 
 * no response value expected for this operation
 **/
exports.deleteJobWithId = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all jobs
 *
 * returns inline_response_200
 **/
exports.listAllJobs = function() {
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
 * Update job application status
 *
 * body JobApplication Update the status of a job application (optional)
 * id Integer 
 * returns JobApplication
 **/
exports.modifyJobApplicationWithId = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user_id" : 1,
  "job_id" : 6,
  "id" : 0,
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update job by ID
 *
 * body Job 
 * id Integer 
 * returns Job
 **/
exports.modifyJobWithId = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all job applications for a job
 *
 * id Integer 
 * returns inline_response_200_1
 **/
exports.viewApplicationsForJob = function(id) {
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
 * Get job by ID
 *
 * id Integer 
 * returns Job
 **/
exports.viewJobWithId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

