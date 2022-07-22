//--------------------Merge Intervals Leetcode # 56. Merge Intervals-----------------//
// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }

//   get_interval() {
//     return "[" + this.start + ", " + this.end + "]";
//   }
// // }

// const merge = function (intervals) {
//   let merged = [];
//   intervals.sort((a, b) => a.start - b.start);
//   merged = [intervals[0]];

//   for (let interval of intervals) {
//     let end1 = merged[merged.length - 1].end;

//     let start2 = interval.start;
//     let end2 = interval.end;

//     if (end1 >= start2) {
//       merged[merged.length - 1].end = Math.max(end1, end2);
//     } else {
//       merged.push(interval);
//     }
//   }

//   return merged;
// };

// merged_intervals = merge([
//   new Interval(6, 7),
//   new Interval(2, 4),
//   new Interval(5, 9),
// ]);
// result = "";
// for (i = 0; i < merged_intervals.length; i++) {
//   result += merged_intervals[i].get_interval() + " ";
// }
// console.log(`Merged intervals: ${result}`);

// merged_intervals = merge([
//   new Interval(1, 4),
//   new Interval(2, 6),
//   new Interval(3, 5),
// ]);
// result = "";
// for (i = 0; i < merged_intervals.length; i++) {
//   result += merged_intervals[i].get_interval() + " ";
// }
// console.log(`Merged intervals: ${result}`);

//--------------------Insert Interval Leetcode # 57. Insert Interval-----------------//

// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }

//   print_interval() {
//     process.stdout.write(`[${this.start}, ${this.end}]`);
//   }
// }

const insert = function (intervals, new_interval) {
  let merged = [];
  let i = 0;

  while (i < intervals.length && intervals[i].end < new_interval.start) {
    merged.push(intervals[i]);
    i += 1;
  }
  // console.log(merged);
  while (i < intervals.length && intervals[i].start <= new_interval.end) {
    new_interval.start = Math.min(new_interval.start, intervals[i].start);
    new_interval.end = Math.max(new_interval.end, intervals[i].end);
    i += 1;
  }
  // console.log(merged);
  merged.push(new_interval);
  // console.log(merged);
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i += 1;
  }
  //console.log(merged);
  return merged;
};

// process.stdout.write("Intervals after inserting the new interval: ");
// let result = insert(
//   [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
//   new Interval(4, 6)
// );
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log(result);

//   process.stdout.write('Intervals after inserting the new interval: ');
//   result = insert([
//     new Interval(1, 3),
//     new Interval(5, 7),
//     new Interval(8, 12),
//   ], new Interval(4, 10));
//   for (i = 0; i < result.length; i++) {
//     result[i].print_interval();
//   }
//   console.log(result);

//   process.stdout.write('Intervals after inserting the new interval: ');
//   result = insert([new Interval(2, 3),
//     new Interval(5, 7),
//   ], new Interval(1, 4));
//   for (i = 0; i < result.length; i++) {
//     result[i].print_interval();
//   }
//   console.log(result);

//--------------------Intervals Intersection  Leetcode # 986. Interval List Intersections-----------------//
// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }

//   print_interval() {
//     process.stdout.write(`[${this.start}, ${this.end}]`);
//   }
// }

const merge = function (intervals_a, intervals_b) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < intervals_a.length && j < intervals_b.length) {
    let aOverlapsB =
      intervals_a[i].start >= intervals_b[j].start &&
      intervals_a[i].start <= intervals_b[j].end;
    let bOverlapsA =
      intervals_b[j].start >= intervals_a[i].start &&
      intervals_b[j].start <= intervals_a[i].end;

    if (aOverlapsB || bOverlapsA) {
      result.push(
        new Interval(
          Math.max(intervals_a[i].start, intervals_b[j].start),
          Math.min(intervals_a[i].end, intervals_b[j].end)
        )
      );
    }

    if (intervals_a[i].end < intervals_b[j].end) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return result;
};

// process.stdout.write("Intervals Intersection: ");
// let result = merge(
//   [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
//   [new Interval(2, 3), new Interval(5, 7)]
// );
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log(result);

// process.stdout.write("Intervals Intersection: ");
// result = merge(
//   [new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
//   [new Interval(5, 10)]
// );
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log();

//--------------------Conflicting Appointments  Leetcode # 986. Interval List Intersections-----------------//
// class Interval {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }

//   print_interval() {
//     process.stdout.write(`[${this.start}, ${this.end}]`);
//   }
// }

const can_attend_all_appointments = function (intervals) {
  intervals.sort((a, b) => a.start - b.start);

  let i = 1;
  while (i < intervals.length) {
    if (intervals[i - 1].end > intervals[i].start) {
      return false;
    } else if (intervals[i - 1].end > intervals[i].end) {
      return false;
    } else {
      i += 1;
    }
  }
  return true;
};

// console.log(
//   `Can attend all appointments: ${can_attend_all_appointments([
//     new Interval(1, 4),
//     new Interval(2, 5),
//     new Interval(7, 9),
//   ])}`
// );

// console.log(
//   `Can attend all appointments: ${can_attend_all_appointments([
//     new Interval(6, 7),
//     new Interval(2, 4),
//     new Interval(8, 12),
//   ])}`
// );

// console.log(
//   `Can attend all appointments: ${can_attend_all_appointments([
//     new Interval(4, 5),
//     new Interval(2, 3),
//     new Interval(3, 6),
//   ])}`
// );

//--------------------Minimum Meeting Rooms  Leetcode # -----------------//
// const Heap = require("./collections/heap");

// class Meeting {
//   constructor(start, end) {
//     this.start = start;
//     this.end = end;
//   }
// }

const min_meeting_rooms = function (meetings) {
  meetings.sort((a, b) => a.start - b.start);

  let minRooms = 0;
  let minHeap = new Heap([], null, (a, b) => b.end - a.end);

  for (let i = 0; i < meetings.length; i++) {
    //remove all the meetings that have ended
    while (minHeap.length > 0 && meetings[i].start >= minHeap.peek().end) {
      minHeap.pop();
    }
    // add the current meetings that have ended
    minHeap.push(meetings[i]);
    //add active meetings are in the min_heap, so we nned rooms for all of them
    minRooms = Math.max(minRooms, minHeap.length);
  }
  return minRooms;
};

// console.log(
//   `Minimum meeting rooms required: ${min_meeting_rooms([
//     new Meeting(4, 5),
//     new Meeting(2, 3),
//     new Meeting(2, 4),
//     new Meeting(3, 5),
//   ])}`
// );
// console.log(
//   `Minimum meeting rooms required: ${min_meeting_rooms([
//     new Meeting(1, 4),
//     new Meeting(2, 5),
//     new Meeting(7, 9),
//   ])}`
// );
// console.log(
//   `Minimum meeting rooms required: ${min_meeting_rooms([
//     new Meeting(6, 7),
//     new Meeting(2, 4),
//     new Meeting(8, 12),
//   ])}`
// );
// console.log(
//   `Minimum meeting rooms required: ${min_meeting_rooms([
//     new Meeting(1, 4),
//     new Meeting(2, 3),
//     new Meeting(3, 6),
//   ])}`
// );
// console.log(
//   `Minimum meeting rooms required: ${min_meeting_rooms([
//     new Meeting(4, 5),
//     new Meeting(2, 3),
//     new Meeting(2, 4),
//     new Meeting(3, 5),
//   ])}`
// );

//--------------------Maximum CPU Load  Leetcode # -----------------//

// const Heap = require('./collections/heap'); //http://www.collectionsjs.com

// class Job {
//   constructor(start, end, cpuLoad) {
//     this.start = start;
//     this.end = end;
//     this.cpuLoad = cpuLoad;
//   }
// }

function find_max_cpu_load(jobs) {
  // sort the jobs by start time
  jobs.sort((a, b) => a.start - b.start);

  let maxCPULoad = 0,
    currentCPULoad = 0;
  const minHeap = new Heap([], null, (a, b) => b.end - a.end);

  for (j = 0; j < jobs.length; j++) {
    // remove all the jobs that have ended
    while (minHeap.length > 0 && jobs[j].start >= minHeap.peek().end) {
      currentCPULoad -= minHeap.pop().cpuLoad;
    }
    // add the current job into min_heap
    minHeap.push(jobs[j]);
    currentCPULoad += jobs[j].cpuLoad;
    maxCPULoad = Math.max(maxCPULoad, currentCPULoad);
  }
  return maxCPULoad;
}

// console.log(`Maximum CPU load at any time: ` +
//   `${find_max_cpu_load([new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)])}`);
// console.log(`Maximum CPU load at any time: ` +
//   `${find_max_cpu_load([new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)])}`);
// console.log(`Maximum CPU load at any time: ` +
//   `${find_max_cpu_load([new Job(1, 4, 2), new Job(2, 4, 1), new Job(3, 6, 5)])}`);

//--------------------Employee Free Time  Leetcode # 759. Employee Free Time -----------------//
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}

const find_employee_free_time = function (schedule) {
  result = [];

  for (let i = 0; i < schedule.length; i++) {
    result.push([schedule[i][0].end, schedule[i][1].start]);
  }
  console.log(result);
  let finalResult = [result[0]];
  finalResult = [
    Math.max(result[0][0], result[1][0]),
    Math.min(result[0][1], result[1][1]),
  ];
  console.log(result[0][0]);
  console.log(finalResult);
  return finalResult;
};

// input = [
//   [new Interval(1, 3), new Interval(5, 6)],
//   [new Interval(2, 3), new Interval(6, 8)],
// ];
// intervals = find_employee_free_time(input);
// result = "Free intervals: ";
// for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
// console.log(result);

input = [
  [new Interval(1, 3), new Interval(9, 12)],
  [new Interval(2, 4)],
  [new Interval(6, 8)],
];
intervals = find_employee_free_time(input);
result = "Free intervals: ";
for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
console.log(result);

// input = [
//   [new Interval(1, 3)],
//   [new Interval(2, 4)],
//   [new Interval(3, 5), new Interval(7, 9)],
// ];
// intervals = find_employee_free_time(input);
// result = "Free intervals: ";
// for (i = 0; i < intervals.length; i++) result += intervals[i].get_interval();
// console.log(result);
