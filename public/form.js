(function () {

    const staticForm = document.getElementById("static-form");

    if (staticForm) {
        const inputPhrase = document.getElementById("phrase");
        var palindromeContainer = document.getElementById("attempts");
        const errorContainer = document.getElementById("error-container");
        const errorTextElement = errorContainer.getElementsByClassName(
            "text-goes-here"
        )[0];

        const resultContainer = document.getElementById("result-container");
        const resultTextElement = resultContainer.getElementsByClassName(
            "text-goes-here"
        )[0];

        const true_arr = [];
        const false_arr = [];

        staticForm.addEventListener("submit", event => {
            event.preventDefault();

            try {
                errorContainer.classList.add("hidden");
                resultContainer.classList.add("hidden");

                const inputPhraseValue = inputPhrase.value;

                if (!inputPhraseValue) {
                    resultTextElement.textContent = "No data provided";
                    resultContainer.classList.remove("hidden");
                    return;
                }

                var li = document.createElement("li");

                var re = /[\W_]/g;
                var lowRegStr = inputPhraseValue.toLowerCase().replace(re, '');
                var reverseStr = lowRegStr.split('').reverse().join('');
                if (reverseStr === lowRegStr) {
                    resultTextElement.textContent = "String is a palindrome"
                    var newContent = document.createTextNode(inputPhraseValue);
                    // list.style.color = "#0000FF";
                    // list.appendChild(li);
                    // list.appendChild(newContent);
                    true_arr.push(inputPhraseValue);
                    palindromeContainer.children[0].innerHTML += "<li>" + true_arr[true_arr.length - 1] + "</li>";
                }
                else {
                    resultTextElement.textContent = "String is not a palindrome"
                    var newContent = document.createTextNode(inputPhraseValue);
                    // list.style.color="#FF0000";
                    // list.appendChild(li);
                    // list.appendChild(newContent);
                    false_arr.push(inputPhraseValue);
                    palindromeContainer.children[1].innerHTML += "<li>" + false_arr[false_arr.length - 1] + "</li>";
                }

                resultContainer.classList.remove("hidden");
            }
            catch (e) {
                const message = typeof e === "string" ? e : e.message;
                errorTextElement.textContent = e;
                errorContainer.classList.remove("hidden");
            }
        });

    }
})();
