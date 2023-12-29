function copyToClipboard(text) {
    var dummyInput = document.createElement("input");
    dummyInput.value = text;
    document.body.appendChild(dummyInput);
    dummyInput.select();
    document.execCommand("copy");
    document.body.removeChild(dummyInput);

    var copyButton = document.querySelector(".btn-primary");
    copyButton.textContent = "Enlace Copiado!";

    setTimeout(function () {
        copyButton.textContent = "Copiar Enlace";
    }, 10000);
}

function redirectToApp(link) {
    window.location.href = link;
}

function createCard(imageSrc, version, downloadURL, scarletLink, trollStoreLink, localizedDescription, appName) {
    var card = document.createElement("div");
    card.className = "card mb-3";

    var cardHeader = document.createElement("div");
    cardHeader.className = "card-header";
    cardHeader.textContent = "Vista previa - " + appName;
    card.appendChild(cardHeader);

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var img = document.createElement("img");
    img.src = imageSrc;
    img.alt = "Vista previa";
    img.style.maxWidth = "50%";
    cardBody.appendChild(img);

    var p = document.createElement("p");
    p.textContent = "Version: " + version;
    cardBody.appendChild(p);

    var descriptionLabel = document.createElement("p");
    descriptionLabel.textContent = "Description: " + localizedDescription;
    cardBody.appendChild(descriptionLabel);

    var downloadButton = document.createElement("a");
    downloadButton.className = "btn btn-sm btn-primary mb-2";
    downloadButton.href = downloadURL;
    downloadButton.textContent = "Download iPA";
    downloadButton.addEventListener("click", function () {
        redirectToApp(downloadURL);
    });
    cardBody.appendChild(downloadButton);

    var scarletButton = document.createElement("button");
    scarletButton.className = "btn btn-sm btn-secondary mb-2";
    scarletButton.textContent = "Scarlet Direct";
    scarletButton.addEventListener("click", function () {
        redirectToApp("scarlet://install=" + downloadURL);
    });
    cardBody.appendChild(scarletButton);

    var trollStoreButton = document.createElement("button");
    trollStoreButton.className = "btn btn-sm btn-secondary mb-2";
    trollStoreButton.textContent = "TrollStore Direct";
    trollStoreButton.addEventListener("click", function () {
        redirectToApp("apple-magnifier://install?url=" + downloadURL);
    });
    cardBody.appendChild(trollStoreButton);

    card.appendChild(cardBody);

    return card;
}

window.onload = function () {
    var jsonFilePath = 'repo.json';

    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            processJsonData(data);
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
};

function processJsonData(data) {
    var apps = data.apps;

    var cardsContainer = document.querySelector(".cards-container");

    apps.forEach(function (app) {
        var card = createCard(
            app.iconURL,
            app.version,
            app.downloadURL,
            app.scarletLink,
            app.trollStoreLink,
            app.localizedDescription,
            app.name
        );
        cardsContainer.appendChild(card);
    });
};
