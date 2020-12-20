
// var tasks = [{
//   'id': 1,
//   'parentId': 0,
//   'title': 'Software Development',
//   'start': new Date('2019-02-21T05:00:00.000Z'),
//   'end': new Date('2019-07-04T12:00:00.000Z'),
//   'progress': 31
// }, {
//   'id': 2,
//   'parentId': 1,
//   'title': 'Scope',
//   'start': new Date('2019-02-21T05:00:00.000Z'),
//   'end': new Date('2019-02-26T09:00:00.000Z'),
//   'progress': 60
// }, {
//   'id': 3,
//   'parentId': 2,
//   'title': 'Determine project scope',
//   'start': new Date('2019-02-21T05:00:00.000Z'),
//   'end': new Date('2019-02-21T09:00:00.000Z'),
//   'progress': 100
// },
// ];

// var dependencies = [{
//   'id': 0,
//   'predecessorId': 1,
//   'successorId': 2,
//   'type': 0
// }, {
//   'id': 1,
//   'predecessorId': 2,
//   'successorId': 3,
//   'type': 0
// }, {
//   'id': 2,
//   'predecessorId': 3,
//   'successorId': 4,
//   'type': 0
// },
//   // ...
// ];

// var resources = [{
//   'id': 1,
//   'text': 'Management'
// }, {
//   'id': 2,
//   'text': 'Project Manager'
// }, {
//   'id': 3,
//   'text': 'Analyst'
// },
//   // ...
// ];

// var resourceAssignments = [{
//   'id': 0,
//   'taskId': 3,
//   'resourceId': 1
// }, {
//   'id': 1,
//   'taskId': 4,
//   'resourceId': 1
// }, {
//   'id': 2,
//   'taskId': 5,
//   'resourceId': 2
// },
//   // ...
// ];


var tasks = [{
  'taskId': 1,
  'parentTaskId': 0,
  'taskTitle': 'Software Development',
  'startDate': new Date('2020-01-21T05:00:00.000Z'),
  'endDate': new Date('2020-06-04T12:00:00.000Z'),
  'taskProgress': 31,
  'taskColor': 'darkblue'
},{
  'taskId': 2,
  'parentTaskId': 1,
  'taskTitle': 'Software Development',
  'startDate': new Date('2020-02-21T05:00:00.000Z'),
  'endDate': new Date('2020-07-04T12:00:00.000Z'),
  'taskProgress': 31,
  'taskColor': 'darkblue'
},{
  'taskId': 3,
  'parentTaskId': 0,
  'taskTitle': 'Software Development',
  'startDate': new Date('2020-02-21T05:00:00.000Z'),
  'endDate': new Date('2020-07-04T12:00:00.000Z'),
  'taskProgress': 31,
  'taskColor': 'darkblue'
}
];


