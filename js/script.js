function copyToClipboard(text) {
    var dummyInput = document.createElement("input");
    dummyInput.value = text;
    document.body.appendChild(dummyInput);
    dummyInput.select();
    document.execCommand("copy");
    document.body.removeChild(dummyInput);
    var copyButton = document.querySelector(".btn-primary");
    copyButton.textContent = "Copiado!";
}

function redirectToApp(link) {
    window.location.href = link;
}

function createCard(imageSrc, version, downloadLink, scarletLink, trollStoreLink) {
    var card = document.createElement("div");
    card.className = "card mb-3";

    var cardHeader = document.createElement("div");
    cardHeader.className = "card-header";
    cardHeader.textContent = "Vista previa:";
    card.appendChild(cardHeader);

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var img = document.createElement("img");
    img.src = imageSrc;
    img.alt = "Vista previa";
    img.style.maxWidth = "100%";
    cardBody.appendChild(img);

    var p = document.createElement("p");
    p.textContent = version;
    cardBody.appendChild(p);

    var downloadButton = document.createElement("a");
    downloadButton.className = "btn btn-sm btn-primary mb-2";
    downloadButton.href = downloadLink;
    downloadButton.textContent = "Download";
    cardBody.appendChild(downloadButton);

    var scarletButton = document.createElement("button");
    scarletButton.className = "btn btn-sm btn-secondary mb-2";
    scarletButton.textContent = "Scarlet Direct";
    scarletButton.addEventListener("click", function () {
        redirectToApp(scarletLink);
    });
    cardBody.appendChild(scarletButton);

    var trollStoreButton = document.createElement("button");
    trollStoreButton.className = "btn btn-sm btn-secondary mb-2";
    trollStoreButton.textContent = "TrollStore Direct";
    trollStoreButton.addEventListener("click", function () {
        redirectToApp(trollStoreLink);
    });
    cardBody.appendChild(trollStoreButton);

    card.appendChild(cardBody);

    return card;
}

window.onload = function () {
    var cardsData = [
        {
            imageSrc: "images/preview1.png",
            version: "V 2.26.3.xelahot + ctrl + nocrash ",
            downloadLink: "https://github.com/QxAngel/qxangel.github.io/releases/download/2/2.26.3.+xelahot+ctrl+nocrash.ipa",
            scarletLink: "scarlet://install=https://github.com/QxAngel/qxangel.github.io/releases/download/2/2.26.3.+xelahot+ctrl+nocrash.ipa",
            trollStoreLink: "apple-magnifier://install?url=https://github.com/QxAngel/qxangel.github.io/releases/download/2/2.26.3.+xelahot+ctrl+nocrash.ipa"
        },
        {
            imageSrc: "images/preview2.png",
            version: "V 2.26.3.invisible + xelahot + ctrl + nocrash ",
            downloadLink: "https://github.com/QxAngel/qxangel.github.io/releases/download/2/2.26.3.invisible+xelahot+ctrl+nocrash.ipa",
            scarletLink: "scarlet://install=https://github.com/QxAngel/qxangel.github.io/releases/download/2/2.26.3.invisible+xelahot+ctrl+nocrash.ipa",
            trollStoreLink: "apple-magnifier://install?url=https://github.com/QxAngel/qxangel.github.io/releases/download/2/2.26.3.invisible+xelahot+ctrl+nocrash.ipa"
        },
        {
            imageSrc: "images/preview3.png",
            version: "V 2.26.3.macro + xelahot + nocrash + ctrl ",
            downloadLink: "https://github.com/QxAngel/qxangel.github.io/releases/download/2/Shit_Fixed.ipa",
            scarletLink: "scarlet://install=https://github.com/QxAngel/qxangel.github.io/releases/download/2/Shit_Fixed.ipa",
            trollStoreLink: "apple-magnifier://install?url=https://github.com/QxAngel/qxangel.github.io/releases/download/2/Shit_Fixed.ipa"
        },
        {
            imageSrc: "images/preview4.png",
            version: "V 2.26.3.igg + xelahot + ctrl + nocrash ",
            downloadLink: "https://github.com/QxAngel/qxangel.github.io/releases/download/2/2.26.3.igg+xelahot+ctrl+nocrash.ipa",
            scarletLink: "scarlet://install=https://github.com/QxAngel/qxangel.github.io/releases/download/2/2.26.3.igg+xelahot+ctrl+nocrash.ipa",
            trollStoreLink: "apple-magnifier://install?url=https://github.com/QxAngel/qxangel.github.io/releases/download/2/2.26.3.igg+xelahot+ctrl+nocrash.ipa"
        },
        {
            imageSrc: "images/preview5.png",
            version: "V 2.26.3.xelahot + flexzoom + igs + igg + nocrash ",
            downloadLink: "https://github.com/QxAngel/qxangel.github.io/releases/download/2/2.26.3.xelahot+flexzoom+igs+igg+nocrash.ipa",
            scarletLink: "scarlet://install=https://github.com/QxAngel/qxangel.github.io/releases/download/2/2.26.3.xelahot+flexzoom+igs+igg+nocrash.ipa",
            trollStoreLink: "apple-magnifier://install?url=https://github.com/QxAngel/qxangel.github.io/releases/download/2/2.26.3.xelahot+flexzoom+igs+igg+nocrash.ipa"
        }
    ];

    var cardsContainer = document.querySelector(".cards-container");

    cardsData.forEach(function (data) {
        var card = createCard(data.imageSrc, data.version, data.downloadLink, data.scarletLink, data.trollStoreLink);
        cardsContainer.appendChild(card);
    });
};
