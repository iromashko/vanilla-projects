// $(function () {
//   $("#gantt").dxGantt({
//     tasks: {
//       dataSource: tasks
//     },
//     dependencies: {
//       dataSource: dependencies
//     },
//     resources: {
//       dataSource: resources
//     },
//     resourceAssignments: {
//       dataSource: resourceAssignments
//     }
//   });
// });

$(function() {
  $("#gantt").dxGantt({
  tasks: {
      dataSource: tasks,
      keyExpr: "taskId",
      parentIdExpr: "parentTaskId",
      startExpr: "startDate",
      endExpr: "endDate",
      progressExpr: "taskProgress",
      titleExpr: "taskTitle",
      colorExpr: "taskColor"
  },
  dependencies: {
      dataSource: dependencies,
      keyExpr: "depId",
      predecessorIdExpr: "preId",
      successorIdExpr: "sucId",
      typeExpr: "depType"
  }
  });
});

// $(function() {
//   $("#gantt").dxGantt({
//       // ...
//       columns: [{
//           dataField: "title",
//           caption: "Subject",
//           width: 300
//       }, {
//           dataField: "start",
//           caption: "Start Date"
//       }, {
//           dataField: "end",
//           caption: "End Date"
//       }],        
//   });
// });
