document.getElementById('menu-icon').addEventListener('click', function() {
    var overlay = document.querySelector('.overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('overlay');
        
        // メニューアイコンの追加
        var menuIcon = document.createElement('img');
        menuIcon.src = 'Menu.png'; // Menu.pngのパスを指定
        overlay.appendChild(menuIcon);

        // テキストの追加
        var textContainer = document.createElement('div');
        textContainer.classList.add('text-container');

        var links = ['Access', 'Event', 'Top'];

        links.forEach(function(linkText) {
            var link = document.createElement('a');
            link.textContent = linkText;
            if (linkText === 'Top') {
                link.href = 'index.html'; // Topリンクはindex.htmlにリンク
            } else if (linkText === 'Access') {
                link.href = 'Access.html'; // Topリンクはindex.htmlにリンク
            }else if (linkText === 'Event') {
                link.href = 'Event.html'; // Topリンクはindex.htmlにリンク
            }
            textContainer.appendChild(link);
        });

        overlay.appendChild(textContainer);

        document.body.appendChild(overlay);
        
        // フェードイン
        setTimeout(function() {
            overlay.style.opacity = '1';
            document.documentElement.classList.add('overlay-open'); // Add class to html to disable scrolling
            document.body.classList.add('overlay-open'); // Add class to body to disable scrolling
        }, 10); // 少しの待機時間を設定してフェードインのアニメーションが発生するようにする
    }

    if (document.body.classList.contains('overlay-open')) {
        // フェードアウト
        overlay.style.opacity = '0';
        // 覆いを削除
        setTimeout(function() {
            overlay.parentNode.removeChild(overlay);
            document.documentElement.classList.remove('overlay-open'); // Remove class from html to re-enable scrolling
            document.body.classList.remove('overlay-open'); // Remove class from body to re-enable scrolling
        }, 300); // フェードアウトの時間（ミリ秒）
    }


    if (document.body.classList.contains('overlay-open')) {
        // フェードアウト
        overlay.style.opacity = '0';
        // 覆いを削除
        setTimeout(function() {
            overlay.parentNode.removeChild(overlay);
            document.documentElement.classList.remove('overlay-open'); // Remove class from html to re-enable scrolling
            document.body.classList.remove('overlay-open'); // Remove class from body to re-enable scrolling
        }, 300); // フェードアウトの時間（ミリ秒）
    }
});



document.addEventListener("DOMContentLoaded", function() {
    const cheerSign = document.getElementById("cheers-sign");
    const highlight = document.getElementById("highlight");
    const photoContainer = document.querySelector(".photo-container");

    function adjustPosition(element, referenceElement, offsetY) {
        const referenceElementRect = referenceElement.getBoundingClientRect();
        element.style.top = (referenceElementRect.bottom + window.scrollY + offsetY) + "px";
    }

    function adjustPositions() {
        adjustPosition(highlight, cheerSign, 0);
        // 画面のサイズに応じてオフセットを変更
        const offset = window.innerWidth >= 720 ? -20 : -50;
        adjustPosition(photoContainer, cheerSign, offset);
    }

    window.addEventListener("resize", adjustPositions);
    window.addEventListener("scroll", adjustPositions);

    adjustPositions(); // 初期ロード時に位置を調整


    
});



document.addEventListener('scroll', function() {
    var pickUp = document.getElementById('Pick-up');
    var boundingPickUp = pickUp.getBoundingClientRect();

    if (
        boundingPickUp.top >= 0 &&
        boundingPickUp.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    ) {
        pickUp.classList.add('show-pick-up');
    } else {
        pickUp.classList.remove('show-pick-up');
    }


});

document.addEventListener("DOMContentLoaded", function() {
    const targetElements = document.querySelectorAll(".VISIT-KOMAE, .RESTAURANTS");

    function checkVisibility() {
        targetElements.forEach(function(targetElement) {
            const rect = targetElement.getBoundingClientRect();
            const viewHeight = window.innerHeight || document.documentElement.clientHeight;
            if (rect.top <= viewHeight && rect.bottom >= 0) {
                targetElement.classList.add("visible");
            } else {
                targetElement.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    // Initial check
    checkVisibility();
});



document.addEventListener('DOMContentLoaded', function () {
    var leftCheer = document.getElementById('left-cheer');
    leftCheer.addEventListener('animationend', function () {
        leftCheer.style.animation = 'shakeAnimation 5s infinite';
        setTimeout(function () {
            createSplashEffect(leftCheer);
        }, 1000); // 1秒待ってからエフェクトを生成
    });
    
    var rightCheer = document.getElementById('right-cheer');
    rightCheer.addEventListener('animationend', function () {
        rightCheer.style.animation = 'shakeAnimation 5s infinite';
        setTimeout(function () {
            createSplashEffect(rightCheer);
        }, 1000); // 1秒待ってからエフェクトを生成
    });
});

function createSplashEffect(parentElement) {
    var splash = document.createElement('div');
    splash.classList.add('splash-effect');
    var rect = parentElement.getBoundingClientRect();
    splash.style.top = rect.top + (rect.height / 2) + 'px';
    splash.style.left = rect.left + (rect.width / 2) + 'px';
    document.body.appendChild(splash);
}

document.addEventListener("DOMContentLoaded", function() {
    const imageContainers = document.querySelectorAll(".syunka-pair .image-container");
    
    imageContainers.forEach(function(container) {
        const img = container.querySelector(".SyunkaImg");
        const hoverImgSrc = img.getAttribute("data-hover-src");
        const hoverImg = new Image();
        hoverImg.src = hoverImgSrc;
        hoverImg.classList.add("hover-img");
        container.appendChild(hoverImg);
    });
});

