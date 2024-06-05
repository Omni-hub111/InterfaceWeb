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




window.onload = function() {
    var rectangle = document.getElementById("rectangle");

    if (window.innerHeight > 400 && window.innerWidth > 400) {
        window.addEventListener("scroll", function() {
            // ページのスクロール位置を取得
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // 開始位置と終了位置を設定
            var startPosition = 400; // 開始位置（スクロールトップがこの位置に達するとRectangleが現れます）
            var endPosition = 4000; // 終了位置（スクロールトップがこの位置に達するとRectangleが消えます）

            // スクロール位置が開始位置と終了位置の間にある場合、Rectangleの高さを設定
            if (scrollTop >= startPosition && scrollTop <= endPosition) {
                // スクロール位置に応じてRectangleの高さを計算
                var scrollPercentage = (scrollTop - startPosition) / (endPosition - startPosition);
                var rectangleHeight = scrollPercentage * 120 + "%"; // 120%の高さを設定
                rectangle.style.height = rectangleHeight;
            } else {
                // スクロール位置が範囲外の場合、Rectangleを非表示にする
                rectangle.style.height = "0";
            }
        });
    }
};

document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.Events');
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY + windowHeight;

    elements.forEach(function(element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > elementPosition + element.clientHeight / 2) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
    });
});

document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.Images');
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY + windowHeight;

    elements.forEach(function(element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > elementPosition + element.clientHeight / 2) {
            element.classList.add('show2');
        } else {
            element.classList.remove('show2');
        }
    });
});

window.addEventListener('DOMContentLoaded', function() {
    const accessTitle = document.querySelector('.Event-Title');
    const frameImage = document.querySelector('.youtube-container');

    function updateFrameImagePosition() {
        const accessTitleWidth = accessTitle.offsetWidth;
        const screenWidth = window.innerWidth;
        const additionalMargin = (screenWidth <= 800) ? 20 : 10; // Increase margin if screen width is less than or equal to 800px
        frameImage.style.top = `${accessTitleWidth + additionalMargin}px`;
    }

    // Initial position update
    updateFrameImagePosition();

    // Update position on window resize
    window.addEventListener('resize', updateFrameImagePosition);
});