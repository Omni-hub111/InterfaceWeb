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




window.addEventListener('DOMContentLoaded', function() {
    const accessTitle = document.querySelector('.Access-Title');
    const frameImage = document.querySelector('.rectangle-container');

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

