arr = [12,43,21,56,7,55,42];
let n = arr.length;
    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - i - 1; j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
console.log("ascending = ",arr);

arr2 = [12,43,21,56,7,55,42];
 n = arr2.length;
    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - i - 1; j++) {

            if (arr2[j] < arr2[j + 1]) {
                let temp = arr2[j];
                arr2[j] = arr2[j+1];
                arr2[j+1] = temp;
            }
        }
    }
console.log("descending = ",arr2);