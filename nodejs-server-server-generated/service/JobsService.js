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
 * id String 
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
 * id String 
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
 * start_time_before Date Filter jobs that start before this time (optional)
 * start_time_after Date Filter jobs that start after this time (optional)
 * end_time_before Date Filter jobs that end before this time (optional)
 * end_time_after Date Filter jobs that end after this time (optional)
 * activity String Filter jobs by activity type (e.g., walk, feeding, grooming) (optional)
 * pets[age_below] Integer  (optional)
 * pets[age_above] Integer  (optional)
 * pets[species] String  (optional)
 * returns inline_response_200
 **/
exports.listAllJobs = function(start_time_before,start_time_after,end_time_before,end_time_after,activity,pets) {
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
 * Update job application status
 *
 * body JobApplication Update the status of a job application (optional)
 * id String 
 * returns JobApplication
 **/
exports.modifyJobApplicationWithId = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "user_id" : "user_id",
  "job_id" : "job_id",
  "id" : "id",
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
 * id String 
 * returns Job
 **/
exports.modifyJobWithId = function(body,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "creator_user_id" : "creator_user_id",
  "pets" : [ "", "" ],
  "start_time" : "start_time",
  "activity" : "activity",
  "end_time" : "end_time",
  "id" : "id"
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
 * id String 
 * returns inline_response_200_1
 **/
exports.viewApplicationsForJob = function(id) {
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
 * Get job by ID
 *
 * id String 
 * returns Job
 **/
exports.viewJobWithId = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "creator_user_id" : "creator_user_id",
  "pets" : [ "", "" ],
  "start_time" : "start_time",
  "activity" : "activity",
  "end_time" : "end_time",
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

