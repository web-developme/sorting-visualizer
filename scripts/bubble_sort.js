function Bubble() {

    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;
    // div_size  which represent the array elements being sorted. Each element in div_sizes corresponds to a div element in the DOM, whose height is set to visually represent the value of the array element.

    // The div_update     function in your Bubble sort code is likely used to update the visual representation of the array elements in the sorting visualizer. This function typically changes the properties of HTML elements (such as color, height, etc.) to visually demonstrate the sorting process.
    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {
            div_update(divs[j], div_sizes[j], "yellow");

            if (div_sizes[j] > div_sizes[j + 1]) {
                div_update(divs[j], div_sizes[j], "red");
                div_update(divs[j + 1], div_sizes[j + 1], "red");

                var temp = div_sizes[j];
                div_sizes[j] = div_sizes[j + 1];
                div_sizes[j + 1] = temp;

                div_update(divs[j], div_sizes[j], "red");
                div_update(divs[j + 1], div_sizes[j + 1], "red");
            }
            div_update(divs[j], div_sizes[j], "blue");
        }
        div_update(divs[j], div_sizes[j], "green");
    }
    div_update(divs[0], div_sizes[0], "green");
    enable_buttons();
}

