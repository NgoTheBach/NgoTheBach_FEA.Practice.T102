function getData(url, fn) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                fn(undefined, JSON.parse(xhr.responseText));
            } else {
                fn(new Error(xhr.statusText), undefined);
            }
        }
    };

    xhr.open('GET', url, true);
    xhr.send();
}


