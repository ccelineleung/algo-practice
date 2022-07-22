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
class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

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
